<script>
    import 'src/app.postcss'
</script>

<div class="wrapper">
    <slot />
</div>

<style lang="scss">
    .wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
