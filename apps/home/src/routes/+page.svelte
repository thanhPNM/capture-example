<script lang="ts">
  import { Button } from 'ui';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Button label="test" />

<div class="green">
  This is div!
  <span>This is span!</span>
</div>
<a href="/about">Go to about page</a>

<style lang="scss">
  div {
    color: red;
    & .green {
      color: green;
    }
    span {
      color: blue;
    }
  }
</style>
