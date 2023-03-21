<script lang="ts">
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  import { sessions } from '@store/index';
  import { validateSessionId } from '@utils/index';

  let sessionId: string = '';
  let error: string = '';

  onMount(() => {
    const cachedSessions = localStorage.getItem('session_list');

    if (cachedSessions) {
      const parsedCachedSessions = cachedSessions ? JSON.parse(cachedSessions) : [];
      sessions.set(parsedCachedSessions);
    }
  });

  function addSession(id: string) {
    sessions.update((prevState) => [...prevState, { id: id, active: true }]);
    localStorage.setItem('session_list', JSON.stringify($sessions));
  }

  function openNewTabSession(id: string) {
    window.open(`/id/${id}`, '_blank');
  }

  function validate(id: string): string {
    if (!sessionId) {
      return 'Please enter session id!';
    }
    if (!validateSessionId(id)) {
      return 'Wrong session format. Example: ABC-123ZYX7890';
    }
    if ($sessions.find((item) => item.id === id)) {
      return 'Existed session id.';
    }
    return '';
  }

  function handleKeyPress(event: any) {
    if (event.keyCode === 13) {
      error = validate(sessionId);
      if (error) {
        return;
      } else {
        addSession(sessionId);
        // openNewTabSession(sessionId);
        sessionId = '';
      }
    }
  }

  function inactiveSession(id: string) {
    const existedSession = $sessions.find((item) => item.id === id);
    if (existedSession) {
      existedSession.active = false;
    }
    sessions.set($sessions);
    localStorage.setItem('session_list', JSON.stringify($sessions));
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="home-container">
  <!-- svelte-ignore a11y-autofocus -->
  <div class="input-wrapper form-control w-full max-w-lg">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">
      <span class="label-text">Sesson ID</span>
    </label>
    <input
      id="session-id"
      type="text"
      placeholder="Fill in where you wanna go"
      class="input input-bordered input-lg"
      autofocus
      maxlength="20"
      bind:value={sessionId}
      on:keypress={handleKeyPress}
      on:blur={() => {
        error = '';
      }}
    />
    {#if error}
      <div class="error-text" transition:slide|local>{error}</div>
    {/if}
  </div>

  {#if $sessions.length > 0}
    <div class="sessions-list" transition:slide|local>
      <ul>
        {#each $sessions as session, i}
          <li class={session.active ? 'active' : 'inactive'} transition:slide|local>
            <a href={`/id/${session.id}`} target="_blank">{i + 1}. {session.id}</a>
            {#if session.active}
              <button on:click={() => inactiveSession(session.id)}>Kill it</button>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style lang="scss">
  .home-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5em;
    overflow: hidden;

    .input-wrapper {
      justify-content: center;
      margin-bottom: 5em;
      width: 30%;

      .label-text {
        color: var(--theme-on-primary);
        font-size: 1.2em;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-bottom: 0.2em;
      }

      input {
        border-color: var(--theme-on-primary);
        margin-bottom: 10px;
        font-weight: 600;
        letter-spacing: 0.5px;
        &:focus {
          outline: 2px solid var(--theme-on-primary);
        }
      }

      .error-text {
        color: rgb(183, 8, 8);
      }
    }

    .sessions-list {
      overflow-y: scroll;
      padding: 2em;
      background-color: var(--theme-surface);
      border-radius: 16px;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    }

    li {
      box-sizing: border-box;
      font-size: 20px;
      margin: 0.5em 0;
      width: 24em;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        font-size: 1.2em;
        font-weight: 600;
        letter-spacing: 0.5px;
        color: var(--theme-on-surface);
      }

      &.inactive a {
        color: var(--grey);
        opacity: 0.6;
        text-decoration: line-through;
      }
    }

    li button {
      padding: 6px 16px;
      cursor: pointer;
      background-color: var(--theme-primary);
      border-radius: 8px;
      color: var(--theme-on-primary);
      margin-left: 1em;
      text-decoration: none;
      &:hover {
        background-color: var(--theme-secondary);
      }
    }
  }
</style>
