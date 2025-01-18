update:
    docker compose down
    git pull
    docker compose build --no-cache
    docker compose up -d

merge_and_push_prod:
    git switch prod
    git merge main
    git switch main
    git push --all
