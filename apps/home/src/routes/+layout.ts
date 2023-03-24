import { loadWebAssembly } from 'shared-utils';
import { SimpleSDK } from '@store/index';

export function load() {
    loadWebAssembly("https://tranxuanthang.github.io/wasm-example/add.wasm")
        .then((instance: any) => {
            SimpleSDK.set({ add: instance.exports.add });
            console.log("Wasm is ready!");
        });
}