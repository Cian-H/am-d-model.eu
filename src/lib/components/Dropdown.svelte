<script lang="ts">
    import "$lib/styles/Dropdown.scss";
    import Link from "$lib/components/Link.svelte";

    interface DropdownItem {
        text: string;
        redirectFunc: () => void;
        hotkey?: string;
    }

    export let items: DropdownItem[] = [];
    export let label: string = "Dropdown";

    let isOpen: boolean = false;

    function toggleDropdown(): void {
        isOpen = !isOpen;
    }

    function handleClickOutside(event: MouseEvent): void {
        if (isOpen && !(event.target as HTMLElement).closest(".dropdown")) {
            isOpen = false;
        }
    }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="dropdown {$$props.class}">
    <button on:click={toggleDropdown} class="dropdown-toggle {$$props.class}">
        {label}
        <span class="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
    </button>

    {#if isOpen}
        <div class="dropdown-menu">
            {#each items as item}
                <div class="dropdown-item-wrapper">
                    <Link
                        text={item.text}
                        redirectFunc={item.redirectFunc}
                        hotkey={item.hotkey || ""}
                        class="dropdown-item {$$props.class}"
                    />
                </div>
            {/each}
        </div>
    {/if}
</div>
