<script>
  // @ts-nocheck
  import { page } from '$app/stores';

  const DEFAULT_MESSAGE = 'Something wrong here.';
  const errorContents = {
    404: {
      emoji: '👻',
      message: 'Oops! The page you are searching is not existed.'
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
  <h1>{$page.status}</h1>
  <h2>{$page.error?.message}</h2>

  <span>
    {errorContents[$page.status] ? errorContents[$page.status].message : errorContents[500].message}
  </span>
  <span class="emoji">
    {errorContents[$page.status] ? errorContents[$page.status].emoji : errorContents[500].emoji}
  </span>
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
    color: #333333;
    margin-bottom: 1em;
  }

  span {
    font-size: 2rem;
    font-weight: 300;
    color: #333333;
    margin: 0.5rem 0;
  }
  .emoji {
    font-size: 8rem;
  }
</style>
