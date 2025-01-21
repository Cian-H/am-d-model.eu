update:
    just tag-version
    docker compose down
    git pull
    docker compose pull
    docker compose build --no-cache
    docker compose up -d

merge_and_push_prod:
    git switch prod
    git merge main
    git switch main
    git push --all

remote-update:
    #!/usr/bin/env bash
    if ssh server "[ ! -f /tmp/update.lock ]"; then
        ssh server "touch /tmp/update.lock"
        just merge_and_push_prod
        ssh server "cd am-d-model.eu && just update"
        ssh server "rm /tmp/update.lock"
        ssh server "just healthcheck || just rollback"
    else
        echo "Update already in progress"
    fi

tag-version:
    git tag backup-$(date +%Y%m%d-%H%M%S)
    mkdir -p versions
    docker compose images | grep -v "REPOSITORY" > versions/$(date +%Y%m%d-%H%M%S).txt

healthcheck:
    #!/usr/bin/env bash
    for i in 1 2 3; do
        curl -f http://localhost/health && exit 0
        sleep 5
    done
    exit 1

rollback version="":
    #!/usr/bin/env bash
    current_branch=$(git branch --show-current)
    if [ -z "{{version}}" ]; then # Get last backup tag if no version specified
        version=$(git tag | grep backup | sort -r | head -n1)
    else # Or get the specified version
        version="backup-{{version}}"
    fi

    # Find corresponding version file
    version_date=${version#backup-}  # Remove 'backup-' prefix
    version_file="versions/$version_date.txt"

    if [ ! -f "$version_file" ]; then
        echo "No version file found for $version"
        exit 1
    fi

    # Read the old image versions and pull them specifically
    while read -r repo tag image_id _; do
        if [ ! -z "$repo" ]; then
            docker pull "$repo:$tag"
        fi
    done < "$version_file"

    # Then check out the version and update
    git checkout $version
    docker compose down
    docker compose build --no-cache
    docker compose up -d
    git switch $current_branch  # Return to original branch

cleanup-versions:
    #!/usr/bin/env bash
    # Keep last 5 backup tags
    for tag in $(git tag | grep backup | sort -r | tail -n +6); do
        git tag -d $tag
        rm -f "versions/${tag#backup-}.txt"
    done
