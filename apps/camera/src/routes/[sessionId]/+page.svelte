<script lang="ts">
    import { goto } from '$app/navigation'
    import { Button } from 'ui'

    export let data = { id: '', sessionInfo: null }

    console.log('🚀 ~ file: +page.svelte:7 ~ sessionInfo:', data.sessionInfo)
</script>

<svelte:head>
    <title>{data.id ?? 'Invalid Session'}</title>
    <meta name="description" content="Capture UI 2.0" />
</svelte:head>

<h1>Capture UI 2.0</h1>
<Button type="primary" on:click={() => goto(`${data.id}/capture`)}>Start</Button
>

<style lang="scss">
    h1 {
        font-size: 1.5rem;
        margin: 2em;
    }
</style>
