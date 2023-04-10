<script>
    import 'src/app.postcss'
    import 'src/global.scss'

    import { isMobileBrowser } from 'shared-utils'
    import { Unsupported } from 'ui'
</script>

{#if isMobileBrowser()}
    <div class="wrapper">
        <slot />
    </div>
{:else}
    <Unsupported />
{/if}

<style lang="scss">
    .wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: var(--theme-secondary);
    }
</style>
