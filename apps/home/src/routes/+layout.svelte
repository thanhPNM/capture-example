<script lang="ts">
  import { onMount } from 'svelte';
  import { isMobileBrowser } from 'shared-utils';
  import { Alert } from 'ui';
  import { SimpleSDK } from '@store/index';

  import 'src/app.postcss';
  import 'src/global.scss';

  let isMobile = isMobileBrowser();
  console.log('🚀 ~ file: +layout.svelte:7 ~ isMobile:', isMobile);

  onMount(() => {
    if (typeof $SimpleSDK.add !== 'undefined') {
      console.log();
    }
  });
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
