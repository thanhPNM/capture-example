<script lang="ts">
    import { isMobileBrowser } from 'shared-utils'
    import { Alert } from 'ui'

    import 'src/app.postcss'
    import 'src/global.scss'

    let isMobile = isMobileBrowser()
</script>

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
        background-image: linear-gradient(
            to bottom right,
            var(--theme-primary),
            var(--theme-secondary)
        );
        padding: 8px;
    }
</style>
