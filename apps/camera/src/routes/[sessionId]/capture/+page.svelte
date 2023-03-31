<script lang="ts">
    import { Camera } from '@components/index'
    import { imgBase64ToBlob } from 'shared-utils'
    export let data: any
    console.log('🚀 ~ file: +page.svelte:5 ~ data:', data)

    const capturePicture = async (picture: string) => {
        if (picture) {
            const imgBlob = await imgBase64ToBlob(picture)
            console.log(
                '🚀 ~ file: +page.svelte:10 ~ capturePicture ~ imgBlob:',
                imgBlob
            )
        }
    }

    const onUserMedia = (stream: MediaStream) => {
        console.log(
            '🚀 ~ file: +page.svelte:15 ~ onUserMedia ~ stream:',
            stream
        )
    }
</script>

<svelte:head>
    <meta name="description" content="Capture UI 2.0" />
</svelte:head>

<div class="capture-container">
    <Camera onCapture={capturePicture} {onUserMedia} />
</div>
