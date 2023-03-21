import { writable } from 'svelte/store';

export interface ISession {
    id: string;
    active: boolean;
}

export const sessions = writable<ISession[]>([], () => {
    console.log('got a subscriber');
    return () => console.log('no more subscribers');
})
