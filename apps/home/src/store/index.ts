import { writable } from 'svelte/store';

export interface ISessionInitialData {
    id: string;
    active: boolean;
}

export const sessions = writable<ISessionInitialData[]>([]);
