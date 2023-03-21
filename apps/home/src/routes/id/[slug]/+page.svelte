<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  import { sessions } from '@store/index';
  import type { ISession } from '@store/index';

  export let data: { id: string } = { id: '' };
  let session: ISession | null = null;
  let message: string = '';

  onMount(() => {
    const cachedSessions = JSON.parse(localStorage.getItem('session_list') ?? '[]');

    if (cachedSessions.length > 0 && $sessions.length === 0) {
      sessions.set(cachedSessions);
    }

    const existed = $sessions.find((item) => item.id === data.id);

    if (!existed) {
      return goto('/404');
    }
    session = existed;

    if (existed.active) {
      setTimeout(() => {
        message = 'Redirecting you to camera...';
      }, 1000);

      setTimeout(() => {
        goto(`http://localhost:3001/id/${existed.id}`);
      }, 3000);
    }
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

  {#if message}
    <p>{message}</p>
  {/if}
</div>

<style lang="scss">
  .session-container {
    margin: auto;
    text-align: center;
    background-color: var(--theme-surface);
    border-radius: 16px;
    padding: 5em 10em 8em;
    h1 {
      color: var(--theme-on-surface);
      font-size: 2rem;
      margin-bottom: 0.5em;
      span {
        font-weight: bold;
      }
    }

    h2 {
      color: var(--theme-primary);
      font-size: 1.5rem;
      &.inactive {
        color: red;
      }
    }

    p {
      font-size: 1.2em;
      color: var(--theme-primary);
      margin: 0.5em 0;
    }
  }
</style>
