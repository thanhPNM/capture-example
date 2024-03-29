<script lang="ts">
    import { onMount } from 'svelte'
    import { Button } from 'ui'

    import { hasGetUserMedia, polyfillGetUserMedia } from './utils'
    import type { ScreenshotFormatType, IScreenshotDimensions } from './models'
    import {
        CameraConstraintResolution,
        screenshotFormat as defaultScreenshotFormat,
        screenshotQuality as defaultScreenshotQuality,
    } from './models'
    import CameraIcon from '@assets/icons/camera-icon.svg?component'

    //props
    export const cameraConstraints: MediaTrackConstraints =
        CameraConstraintResolution.Default
    export const startOnMount: boolean = true
    export const mirrored: boolean = true
    export const screenshotFormat: ScreenshotFormatType =
        defaultScreenshotFormat
    export const screenshotQuality: number = defaultScreenshotQuality

    export let onUserMedia: (stream: MediaStream) => void
    export let onCapture: (picture: any) => void

    let screenshotDimensions: IScreenshotDimensions = {
        width: cameraConstraints.width as number,
        height: cameraConstraints.height as number,
    }

    let videoSource: any = null
    let loading: boolean = false
    let isRunning: boolean = false
    let stream: MediaStream | null = null
    let canvas: HTMLCanvasElement | null = null

    const openVideoCamera = async () => {
        try {
            loading = true
            stream = await navigator.mediaDevices.getUserMedia({
                video: cameraConstraints,
            })
            videoSource.srcObject = stream
            videoSource.play()
            const track = stream.getVideoTracks()[0]
            const settings = track.getSettings()
            loading = false
            isRunning = true
            onUserMedia(stream)
        } catch (error) {
            console.warn(error)
        }
    }

    export const closeCamera = () => {
        if (!isRunning) {
            return false
        }

        stream?.getTracks().forEach((track: any) => {
            stream?.removeTrack(track)
            if (track.readyState == 'live' && track.kind === 'video') {
                track.stop()
            }
        })

        videoSource.srcObject = null
    }

    const capturePicture = async () => {
        const context = canvas?.getContext('2d')

        if (!canvas || !context) {
            return
        }

        if (mirrored) {
            context.translate(canvas.width, 0)
            context.scale(-1, 1)
        }

        context?.drawImage(
            videoSource,
            0,
            0,
            screenshotDimensions.width,
            screenshotDimensions.height
        )

        if (mirrored) {
            context.scale(-1, 1)
            context.translate(-canvas.width, 0)
        }

        const screenshot = canvas?.toDataURL(
            screenshotFormat,
            screenshotQuality
        )

        onCapture && onCapture(screenshot)
    }

    onMount(() => {
        polyfillGetUserMedia()
        if (!hasGetUserMedia()) {
            console.error('getUserMedia not supported')
            return
        }
        console.info(screen)
        if (startOnMount) {
            openVideoCamera()
        }

        closeCamera()
    })
</script>

<div class="camera-container">
    <div class="camera-wrapper">
        {#if loading}
            <h1>Loading camera...</h1>
        {/if}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video bind:this={videoSource} />
    </div>
    <div class="action-area">
        <Button
            type="secondary"
            className="capture-btn rounded-full"
            on:click={capturePicture}
        >
            <CameraIcon height={48} width={48} />
        </Button>
    </div>
    <canvas
        bind:this={canvas}
        width={screenshotDimensions.width}
        height={screenshotDimensions.height}
    />
</div>

<style lang="scss">
    @import './styles.scss';
</style>
