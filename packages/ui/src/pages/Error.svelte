<script lang="ts">
    export let page
    export let canGoBack: boolean = true

    console.log($page)
    const DEFAULT_MESSAGE: string =
        'This boat is broken! Wait a minute, our cool crew is fixing it'
    const errorContents = {
        404: {
            emoji: '🫠',
            message: 'Oops! It seems like you are lost in the ocean...',
        },
        500: {
            emoji: '💥',
            message: DEFAULT_MESSAGE,
        },
    }
</script>

<div class="error-page">
    <h1>{$page.status}</h1>
    <h2>
        {errorContents[$page.status]
            ? $page.error.message ?? errorContents[$page.status].message
            : errorContents[500].message}
    </h2>

    <p class="emoji">
        {errorContents[$page.status]
            ? errorContents[$page.status].emoji
            : errorContents[500].emoji}
    </p>

    {#if canGoBack && $page.status === 404}
        <a href="/">Take me back to the land</a>
    {/if}
</div>

<style lang="scss">
    .error-page {
        margin: auto;
        padding: 0 2em 6em;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    h1 {
        font-size: 6rem;
        color: darkred;
        font-weight: 700;
    }

    h2 {
        font-size: 3.5rem;
        font-weight: 600;
        color: var(--theme-on-primary);
        margin: 0.5em 0 1em;
    }

    a {
        color: var(--theme-on-primary);
        font-size: 1.5em;
        font-weight: 400;
        text-decoration: underline;
        &:hover {
            color: var(--theme-primary);
            opacity: 0.9;
        }
    }
    .emoji {
        font-size: 8rem;
    }

    @media screen and (max-width: 844px) {
        .error-page {
            padding: 0;
        }
        h1 {
            font-size: 3rem;
        }

        h2 {
            font-size: 2.2rem;
        }

        a {
            font-size: 1.2rem;
        }

        .emoji {
            font-size: 4rem;
        }
    }
</style>
