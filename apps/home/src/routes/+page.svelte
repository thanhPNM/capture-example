<script lang="ts">
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  import { sessions } from '@store/index';
  import { validateSessionId } from '@utils/index';

  let sessionId: string = '';
  let error: string = '';

  onMount(() => {
    const cachedSessions = JSON.parse(localStorage.getItem('session_list'));
    if (cachedSessions) {
      sessions.set(cachedSessions);
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
  <div class="input-wrapper">
    <input
      id="session-id"
      type="text"
      placeholder="Enter ID Here"
      class="input input-bordered input-lg w-full max-w-lg"
      autofocus
      maxlength="20"
      bind:value={sessionId}
      on:keypress={handleKeyPress}
      on:blur={() => {
        error = '';
      }}
    />
    {#if error}
      <div class="error-text">{error}</div>
    {/if}
  </div>

  {#if $sessions.length > 0}
    <div class="sessions-list" transition:slide|local>
      <ul>
        {#each $sessions as session, i}
          <li class={session.active ? 'active' : 'inactive'} transition:slide|local>
            <a href={`/id/${session.id}`} target="_blank">{i + 1}. {session.id}</a>
            <span on:click={() => inactiveSession(session.id)}>Kill it</span>
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

      input {
        border-color: #19a7ce;
        margin-bottom: 10px;
        &:focus {
          outline: 2px solid rgba(25, 167, 206, 0.8);
        }
      }

      .error-text {
        color: red;
      }
    }

    .sessions-list {
      overflow-y: scroll;
      padding: 2em;
    }

    li {
      box-sizing: border-box;
      font-size: 20px;
      margin: 0.5em 0;
      width: 20em;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &.active {
        color: green;
      }
      &.inactive {
        color: red;
        text-decoration: line-through;
      }
    }

    li span {
      padding: 0.5em 1em;
      cursor: pointer;
      background-color: #19a7ce;
      border-radius: 8px;
      color: white;
      margin-left: 1em;
      text-decoration: none;
      &:hover {
        background-color: #146c94;
      }
    }
  }
</style>
