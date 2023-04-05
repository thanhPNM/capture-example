<script lang="ts">
    import { goto } from '$app/navigation'
    import { Button } from 'ui'
    import PAVELogo from '@assets/logos/logo.png'

    import { useAppStore } from '../../store'

    export let data = { id: '', sessionInfo: null }

    const { sessionStore } = useAppStore()

    const { loading, initialData } = sessionStore.getters

    console.log('🚀 ~ file: +page.svelte:7 ~ sessionInfo:', data.sessionInfo)
</script>

<svelte:head>
    <title>{data.id ?? 'Invalid Session'}</title>
    <meta name="description" content="Capture UI 2.0" />
</svelte:head>

<div class="capture-container">
    <div class="logo-wrapper">
        <img src={PAVELogo} alt="pave-logo" />
    </div>
    <div class="primary-wrapper">
        <div class="content-wrapper">
            <h1>Capture UI 2.0</h1>
            {#if $loading}<p>Loading session ...</p>{/if}
        </div>
        {#if $initialData}
            <Button
                className="custom-button"
                on:click={() => goto(`${data.id}/capture`)}>GET STARTED</Button
            >
        {/if}
    </div>
</div>

<style lang="scss">
    .capture-container {
        background-image: linear-gradient(
            to bottom right,
            var(--theme-secondary),
            var(--theme-primary)
        );
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        padding: 1rem;
        color: var(--theme-on-primary);
    }

    .logo-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .primary-wrapper {
        flex: 1;
    }

    .content-wrapper {
        flex: 1;
        margin: 1.5em;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    p {
        font-weight: 300;
    }

    img {
        max-width: 85px;
    }

    :global(.custom-button) {
        color: var(--theme-on-surface);
        background-color: var(--theme-surface);
        border-color: transparent;
    }

    :global(.custom-button:hover) {
        color: var(--theme-on-surface);
        background-color: var(--theme-on-secondary);
        border-color: transparent;
    }

    @media screen and (orientation: landscape) {
        .primary-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .content-wrapper {
            text-align: left;
        }
    }

    @media screen and (orientation: portrait) {
        .primary-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        .content-wrapper {
            text-align: center;
        }
    }
</style>
