import { SvelteComponentTyped } from 'svelte';

export type ButtonType =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';

interface IButtonProps {
    type?: ButtonType;
    className?: string
}

export default class Button extends SvelteComponentTyped<IButtonProps> { }
