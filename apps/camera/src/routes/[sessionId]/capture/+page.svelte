<script lang="ts">
    import { Camera } from '@components/index'
    import { imgBase64ToBlob } from 'shared-utils'
    import CameraLayout from 'src/components/layout/camera/CameraLayout.component.svelte'
    import PAVELogo from '@assets/logos/logo.png'

    export let data: any

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
    <CameraLayout logoUrl={PAVELogo}>
        <Camera onCapture={capturePicture} {onUserMedia} />
    </CameraLayout>
</div>
