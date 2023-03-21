<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  import { sessions } from '@store/index';
  import type { ISession } from '@store/index';

  export let data: { id: string } = { id: '' };
  let session: ISession | null = null;

  onMount(() => {
    const cachedSessions = JSON.parse(localStorage.getItem('session_list') ?? '[]');
    console.log('🚀 ~ file: +page.svelte:10 ~ onMount ~ cachedSessions:', cachedSessions);
    console.log('🚀 ~ file: +page.svelte:16 ~ onMount ~ sessions:', $sessions);

    if (cachedSessions.length > 0 && $sessions.length === 0) {
      console.log('set cached data to store');
      sessions.set(cachedSessions);
    }

    const existed = $sessions.find((item) => item.id === data.id);
    console.log('🚀 ~ file: +page.svelte:15 ~ onMount ~ existed:', existed);

    if (!existed) {
      return goto('/404');
    }
    session = existed;
  });
</script>

<svelte:head>
  <title>{session?.id ?? 'Invalid Session'}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="session-container">
  <h1>Session id: <span>{data.id}</span></h1>
  {#if session?.active}
    <h2>This session is <strong>active</strong></h2>
  {:else if session?.active === false}
    <h2 class="inactive">This session is <strong>not active</strong> anymore.</h2>
  {/if}
</div>

<style lang="scss">
  .session-container {
    margin: auto;
    padding-bottom: 10em;
    text-align: center;

    h1 {
      color: var(--primary-text-color);
      font-size: 2rem;
      margin-bottom: 0.5em;
      span {
        font-weight: bold;
      }
    }

    h2 {
      color: var(--primary-text-color);
      font-size: 1.5rem;
      &.inactive {
        color: red;
      }
    }
  }
</style>
