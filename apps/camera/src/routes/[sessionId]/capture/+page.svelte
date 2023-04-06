<script lang="ts">
    import { imgBase64ToBlob } from 'shared-utils'

    import { Camera } from '@components/index'
    import CameraLayout from '@components/layout/camera/CameraLayout.component.svelte'
    import PAVELogo from '@assets/logos/logo.png'
    import type { IPhoto } from 'src/models/photos/Photo.interface'

    import { apiClient } from '@api'
    import { useAppStore } from '@store'
    import type { PageData } from './$types'

    export let data: PageData

    const { sessionStore } = useAppStore()
    const { startSessionApiResponse } = sessionStore.getters

    const capturePicture = async (picture: string) => {
        if (picture) {
            const imgBlob = await imgBase64ToBlob(picture)
            const uploadedPhoto: IPhoto = {
                photo_code: '5',
                image: imgBlob,
            }
            apiClient.photos.uploadPhoto(data.sessionId, uploadedPhoto)
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
    {#if $startSessionApiResponse?.status !== 'CONFIRM'}
        <CameraLayout logoUrl={PAVELogo}>
            <Camera onCapture={capturePicture} {onUserMedia} />
        </CameraLayout>
    {:else}
        <h1>This session have been finished!</h1>
    {/if}
</div>

<style lang="scss">
    .capture-container {
        h1 {
            color: var(--theme-on-primary);
        }
    }
</style>
