<script>
    import 'src/app.postcss'
    import 'src/global.scss'
</script>

<div class="wrapper">
    <slot />
</div>

<style lang="scss">
    .wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(
            to bottom right,
            var(--theme-secondary),
            var(--theme-primary)
        );
    }
</style>
