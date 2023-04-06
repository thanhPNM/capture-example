<script lang="ts">
    import { CameraCorner } from 'ui'

    export let logoUrl: string = ''

    const CORNERS = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft']
</script>

<div class="camera-layout-wrapper">
    {#each CORNERS as corner}
        <CameraCorner position={corner} color="var(--theme-surface)" />
    {/each}

    {#if logoUrl}
        <div class="logo-wrapper">
            <img src={logoUrl} alt="logo" />
        </div>
    {/if}

    <slot />
</div>

<style lang="scss">
    .camera-layout-wrapper {
        position: relative;
    }

    .logo-wrapper {
        position: absolute;
        z-index: 1;
        max-width: 100px;
        left: 50%;
        top: 30px;
        transform: translate(-50%, 0);
    }
</style>
