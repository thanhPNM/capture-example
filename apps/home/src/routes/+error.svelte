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
    <span class="emoji">
      {errorContents[$page.status] ? errorContents[$page.status].emoji : errorContents[500].emoji}
    </span>
  </span>
</div>

<style>
  .error-page {
    margin: 8em auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  h1 {
    font-size: 4em;
    color: #333333;
  }

  h2 {
    font-size: 4em;
    color: #333333;
  }

  span {
    font-size: 2em;
    color: #333333;
  }

  .emoji {
    margin: 0 0.3em;
  }
</style>
