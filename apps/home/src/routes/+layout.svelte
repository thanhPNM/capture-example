<script lang="ts">
  import '../app.postcss';
</script>

<div class="wrapper">
  <slot />
</div>

<style lang="scss">
  .wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f6f1f1;
  }
</style>
