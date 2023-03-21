<script>
  // @ts-nocheck
  import { page } from '$app/stores';

  const DEFAULT_MESSAGE = 'This boat is broken! Wait a minute, our cool crew is fixing it';
  const errorContents = {
    404: {
      emoji: '🌊',
      message: 'Oops! It seems like you are lost in the ocean...'
    },
    420: {
      emoji: '🫠',
      message: DEFAULT_MESSAGE
    },
    500: {
      emoji: '💥',
      message: DEFAULT_MESSAGE
    }
  };
</script>

<div class="error-page">
  <h1>{$page.status} Error</h1>
  <h2>
    {errorContents[$page.status] ? errorContents[$page.status].message : errorContents[500].message}
  </h2>

  <p class="emoji">
    {errorContents[$page.status] ? errorContents[$page.status].emoji : errorContents[500].emoji}
  </p>

  {#if $page.status === 404}
    <a href="/" alt="Go to homepage">Take me back to the land</a>
  {/if}
</div>

<style lang="scss">
  .error-page {
    margin: auto;
    padding: 0 2em 6em;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  h1 {
    font-size: 6rem;
    color: darkred;
    font-weight: 700;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 600;
    color: var(--primary-text-color);
    margin: 0.5em 0 1em;
  }

  a {
    color: var(--secondary-color);
    font-size: 1.5em;
    font-weight: 400;
    &:hover {
      color: var(--primary-color);
    }
  }
  .emoji {
    font-size: 8rem;
  }
</style>
