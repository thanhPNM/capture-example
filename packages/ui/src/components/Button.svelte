<script lang="ts">
    import classNames from 'classnames'
    import type { ButtonType } from './Button'

    export let type: ButtonType = 'default'
    export let className: string
    let restProps
    $: ({ type, className, ...restProps } = $$props)
    console.log('🚀 ~ file: Button.svelte:9 ~ type:', type)
    console.log('🚀 ~ file: Button.svelte:17 ~ restProps:', restProps)
    console.log('🚀 ~ file: Button.svelte:16 ~ className:', className)
    let cls = classNames({
        btn: true,
        'btn-primary': type === 'primary',
        'btn-secondary': type === 'secondary',
        'btn-accent': type === 'accent',
        'btn-info': type === 'info',
        'btn-success': type === 'success',
        'btn-warning': type === 'warning',
        'btn-error': type === 'error',
    })

    if (className) {
        cls = cls.concat(` ${className}`)
    }
</script>

<button type="button" class={cls} {...restProps} on:click>
    <slot />
</button>
