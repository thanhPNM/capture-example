<script lang="ts">
    import { Camera } from '@components/index'

    export let data: any
    console.log('🚀 ~ file: +page.svelte:5 ~ data:', data)

    const capturePicture = (picture: any) => {
        console.log(
            '🚀 ~ file: +page.svelte:5 ~ capturePicture ~ picture:',
            picture
        )
    }
</script>

<svelte:head>
    <meta name="description" content="Capture UI 2.0" />
</svelte:head>

<div class="capture-container">
    <Camera onCapture={capturePicture} />
    <!-- <div class="output">
        <img
            id="photo"
            bind:this={capturedPicture}
            alt="The screen capture will appear in this box."
        />
    </div> -->
</div>
