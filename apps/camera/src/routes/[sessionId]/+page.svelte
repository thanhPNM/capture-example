<script lang="ts">
    import { goto } from '$app/navigation'
    import { Button } from 'ui'

    export let data = { id: '', sessionInfo: null }

    console.log('🚀 ~ file: +page.svelte:7 ~ sessionInfo:', data.sessionInfo)
</script>

<svelte:head>
    <title>{data.id ?? 'Invalid Session'}</title>
    <meta name="description" content="Capture UI 2.0" />
</svelte:head>

<div class="capture-container">
    <h1>Capture UI 2.0</h1>
    <Button
        className="custom-button"
        on:click={() => goto(`${data.id}/capture`)}>Start</Button
    >
</div>

<style lang="scss">
    .capture-container {
        background-image: linear-gradient(
            to bottom right,
            var(--theme-secondary),
            var(--theme-primary)
        );
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
        font-size: 1.5rem;
        margin: 2em;
        color: var(--theme-on-primary);
    }

    :global(.custom-button) {
        color: var(--theme-on-surface);
        background-color: var(--theme-on-primary);
        border-color: transparent;
    }

    :global(.custom-button:hover) {
        color: var(--theme-on-secondary);
        background-color: var(--theme-secondary);
        border-color: transparent;
    }
</style>
