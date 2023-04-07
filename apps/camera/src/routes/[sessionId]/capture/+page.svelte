<script lang="ts">
    import { onMount } from 'svelte'
    import { imgBase64ToBlob } from 'shared-utils'

    import { Camera, CameraLayout } from '@components/index'
    import type { IUploadedPhoto } from '@models/photos/Photo.interface'
    import type { PageData } from './$types'

    import PAVELogo from '@assets/logos/logo.png'

    import { apiClient } from '@api'
    import { useAppStore } from '@store'

    export let data: PageData

    const { sessionStore } = useAppStore()
    const { startSessionApiResponse } = sessionStore.getters

    const missingPhotos = data.progress?.photos?.missing || []
    let requiredPhotos = [...missingPhotos].sort()
    let camera: any

    $: currentPhoto = requiredPhotos[0]

    const capturePicture = async (picture: string) => {
        if (picture) {
            const imgBlob = await imgBase64ToBlob(picture)
            const uploadedPhoto: IUploadedPhoto = {
                photo_code: Number.parseInt(currentPhoto),
                image: imgBlob,
            }
            apiClient.photos.uploadPhoto(data.sessionId, uploadedPhoto)
            requiredPhotos = requiredPhotos.splice(1)
            if (requiredPhotos.length === 0) {
                camera.closeCamera()
            }
        }
    }

    const onUserMedia = (stream: MediaStream) => {
        console.groupCollapsed('CAMERA STREAMING')
        console.log('STREAM: ', stream)
        console.groupEnd()
    }

    $: shouldRenderCamera = (): { result: boolean; message: string } => {
        let result = false,
            message = ''

        if (!data.progress?.inspectionID) {
            message = 'This session have not been started!'
        } else if ($startSessionApiResponse?.status === 'CONFIRM') {
            message = 'This session have been finished!'
        } else if (requiredPhotos.length === 0) {
            message =
                'You took enough photos. Please wait for the inspection result'
        } else {
            result = true
        }

        return { result, message }
    }
</script>

<svelte:head>
    <meta name="description" content="Capture UI 2.0" />
</svelte:head>

<div class="capture-container">
    {#if shouldRenderCamera().result}
        <CameraLayout logoUrl={PAVELogo}>
            <Camera
                bind:this={camera}
                onCapture={capturePicture}
                {onUserMedia}
            />
            <div class="tracking-total-photos">
                <span class="current-photo">{currentPhoto}</span>
                <span class="total-photos"> / 13</span>
            </div>
        </CameraLayout>
    {:else}
        <h1>{shouldRenderCamera().message}</h1>
    {/if}
</div>

<style lang="scss">
    .capture-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;

        h1 {
            color: var(--theme-on-primary);
        }

        .tracking-total-photos {
            position: absolute;
            top: 15%;
            right: 5%;
            color: var(--theme-on-primary);

            .current-photo {
                color: var(--theme-primary);
                font-weight: bold;
            }
            .total-photos {
                font-weight: 500;
            }
        }
    }
</style>
