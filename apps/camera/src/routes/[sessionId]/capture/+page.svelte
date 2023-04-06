<script lang="ts">
    import { Camera } from '@components/index'
    import { imgBase64ToBlob } from 'shared-utils'
    import CameraLayout from 'src/components/layout/camera/CameraLayout.component.svelte'
    import PAVELogo from '@assets/logos/logo.png'
    import type { ISessionProgress } from 'src/models/sessions/Session.interface'
    import { useAppStore } from '@store'

    export const progress: ISessionProgress = {
        session_key: '',
        inspection_id: null,
        status: '',
        isReported: false,
        photos: [],
        passQC: false,
        ttw: 0,
    }

    const { sessionStore } = useAppStore()
    const { startSessionApiResponse } = sessionStore.getters

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
