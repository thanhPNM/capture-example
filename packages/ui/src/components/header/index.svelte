<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../Button.svelte';

  export let user: { name: string } = null;
  export let page: any = null;
  const dispatch = createEventDispatcher();

  function onLogin(event) {
    dispatch('login', event);
  }
  function onLogout(event) {
    dispatch('logout', event);
  }
  function onCreateAccount(event) {
    dispatch('createAccount', event);
  }
</script>

<header>
  <div class="wrapper">
    <div>
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
            fill="#FFF"
          />
          <path
            d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
            fill="#555AB9"
          />
          <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
        </g>
      </svg>
      <h1>Acme</h1>
    </div>
    <nav>
      <ul>
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
          <a href="/">Home</a>
        </li>
        <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
          <a href="/about">About</a>
        </li>
        <!-- <li aria-current={$page.url.pathname.startsWith('/camera') ? 'page' : undefined}>
          <a href="/camera">Camera</a>
        </li> -->
      </ul>
    </nav>
    <div>
      {#if user}
        <span class="welcome">
          Welcome, <b>{user.name}</b>!
        </span>
        <Button size="small" on:click={onLogout} label="Log out" />
      {:else}
        <Button size="small" on:click={onLogin} label="Log in" />
        <Button primary size="small" on:click={onCreateAccount} label="Sign up" />
      {/if}
    </div>
  </div>
</header>

<style>
  @import './styles.css';
  nav ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
</style>
