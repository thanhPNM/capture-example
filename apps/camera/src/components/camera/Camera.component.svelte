<script lang="ts">
    import { onMount } from 'svelte'
    import { Button } from 'ui'

    export const startOnMount: boolean = true
    export let onCapture: (picture: any) => void

    let videoSource: any = null
    let loading: boolean = false
    let isRunning: boolean = false
    let stream: any = null
    let capturedPicture: any = null
    let canvas: any = null

    const width = 1080
    const height = 720

    const setVideoSize = (videoRatio: any) => {
        console.log(
            '🚀 ~ file: +page.svelte:16 ~ setVideoSize ~ videoRatio:',
            videoRatio
        )
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight

        // Check if the video width fits within the window width
        if (videoRatio * windowHeight > windowWidth) {
            videoSource.style.width = `${windowWidth}px`
            videoSource.style.height = `${windowWidth / videoRatio}px`
        } else {
            videoSource.style.width = `${videoRatio * windowHeight}px`
            videoSource.style.height = `${windowHeight}px`
        }
    }

    const obtenerVideoCamera = async () => {
        try {
            loading = true
            stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment',
                    aspectRatio: screen.width / screen.height,
                },
            })
            videoSource.srcObject = stream
            videoSource.play()
            const track = stream.getVideoTracks()[0]
            const settings = track.getSettings()
            const videoRatio = settings.aspectRatio
            // setVideoSize(videoRatio)
            loading = false
            isRunning = true
        } catch (error) {
            console.log(error)
        }
    }

    const closeCamera = () => {
        console.log(isRunning)
        if (!isRunning) {
            return false
        }

        stream.getTracks().forEach(function (track: any) {
            console.log(track)
            if (track.readyState == 'live' && track.kind === 'video') {
                track.stop()
            }
        })
    }

    $: capturePicture = async () => {
        const context = canvas.getContext('2d')
        if (width && height) {
            context.drawImage(videoSource, 0, 0, width, height)

            const data = canvas.toDataURL('image/png')
            capturedPicture.setAttribute('src', data)
            onCapture && onCapture(capturedPicture)
        } else {
            // clearphoto();
        }
    }

    onMount(() => {
        console.log(screen)
        if (startOnMount) {
            obtenerVideoCamera()
        }
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
        <Button on:click={capturePicture}>Capture</Button>
    </div>
    <canvas bind:this={canvas} width={1280} height={720} />
</div>

<style lang="scss">
    .camera-container {
        position: relative;
        .camera-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        .action-area {
            position: fixed;
            top: 50%;
            right: 10px;
        }
        canvas {
            display: none;
        }
    }
</style>
