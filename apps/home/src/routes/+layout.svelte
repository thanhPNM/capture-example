<script lang="ts">
  import { isMobileBrowser } from 'shared-utils';
  import { Alert } from 'ui';
  import '../app.postcss';
  import '../global.scss';

  let isMobile = isMobileBrowser();
  console.log('🚀 ~ file: +layout.svelte:7 ~ isMobile:', isMobile);
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
  }
</style>
