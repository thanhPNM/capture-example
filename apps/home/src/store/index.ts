import { writable } from 'svelte/store';

export interface ISession {
    id: string;
    active: boolean;
}

export const sessions = writable<ISession[]>([]);
export const SimpleSDK = writable<any>({});