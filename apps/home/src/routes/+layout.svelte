<script lang="ts">
    import { isMobileBrowser } from 'shared-utils'
    import { Alert } from 'ui'

    import 'src/app.postcss'
    import 'src/global.scss'

    let isMobile = isMobileBrowser()
</script>

<svelte:head>
    <link
        rel="preload"
        href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,900"
        as="font"
        crossorigin=""
    />
</svelte:head>

<div class="wrapper">
    {#if !isMobile}
        <Alert message="You're currently not using mobile." type="warning" />
    {/if}

    <slot />
</div>

<style lang="scss">
    .wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: var(--theme-secondary);
        padding: 8px;
    }
</style>
