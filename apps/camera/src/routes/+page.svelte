<script lang="ts">
  let videoSource: any = null;
  let loading: boolean = false;
  let isRunning: boolean = false;
  let capturedPicture: any = null;
  let canvas: any = null;
  let stream: any = null;

  const width = 1080;
  const height = 720;

  const obtenerVideoCamera = async () => {
    try {
      loading = true;
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { max: 1080 },
          height: { max: 720 }
        }
      });
      videoSource.srcObject = stream;
      videoSource.play();
      loading = false;
      isRunning = true;
    } catch (error) {
      console.log(error);
    }
  };

  $: capturePicture = async () => {
    const context = canvas.getContext('2d');
    if (width && height) {
      context.drawImage(videoSource, 0, 0, width, height);

      const data = canvas.toDataURL('image/png');
      capturedPicture.setAttribute('src', data);
    } else {
      // clearphoto();
    }
  };

  const closeCamera = () => {
    console.log(isRunning);
    if (!isRunning) {
      return false;
    }

    stream.getTracks().forEach(function (track: any) {
      console.log(track);
      if (track.readyState == 'live' && track.kind === 'video') {
        track.stop();
      }
    });
  };
</script>

<h1>Camera Testing</h1>
<div>
  {#if loading}
    <h1>Loading camera...</h1>
  {/if}
  <!-- svelte-ignore a11y-media-has-caption -->
  <video bind:this={videoSource} />
  <div class="action-area">
    <button on:click={() => (isRunning ? closeCamera() : obtenerVideoCamera())}
      >{isRunning ? 'CLOSE' : 'OPEN'}</button
    >
    <button on:click={capturePicture}>CAPTURE</button>
  </div>
  <canvas bind:this={canvas} {width} {height} />
  <div class="output">
    <img id="photo" bind:this={capturedPicture} alt="The screen capture will appear in this box." />
  </div>
</div>

<style>
  canvas {
    display: none;
  }
  .action-area {
    display: inline-block;
  }
</style>
