<script lang="ts">
    import classNames from 'classnames'

    type PositionType = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
    export let color: string = `rgb(39, 208, 137)`
    export let position: PositionType | string = 'topLeft'

    const cls = classNames({
        'top-left': position === 'topLeft',
        'top-right': position === 'topRight',
        'bottom-left': position === 'bottomLeft',
        'bottom-right': position === 'bottomRight',
    })
</script>

<span class={cls} style={`border-color: ${color}`} />

<style lang="scss">
    span {
        border-style: solid;
        border-color: rgb(39, 208, 137);
        border-image: initial;
        border-width: 0px 3.5px 3.5px 0px;
        display: inline-block;
        padding: 3.5px;
        position: fixed;
        z-index: 4;
        transition: all 0.5s ease 0s;

        &.top-left {
            transform: rotate(-180deg);
            top: 15px;
            left: 15px;
        }

        &.top-right {
            transform: rotate(270deg);
            right: 15px;
            top: 15px;
        }

        &.bottom-left {
            transform: rotate(-270deg);
            left: 15px;
            bottom: 15px;
        }

        &.bottom-right {
            bottom: 15px;
            right: 15px;
        }
    }
</style>
