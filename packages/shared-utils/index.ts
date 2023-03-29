export function validateSessionId(id: string, containNumberAndLetter: boolean = false): boolean {
    const regex = containNumberAndLetter ? /^([A-Z]{3})-(?=.*[A-Z])(?=.*\d)[A-Z\d]{10}$/g : /^([A-Z]{3})-[A-Z\d]{10}$/g
    return regex.test(id)
}

export function isMobileBrowser(): boolean {
    if (typeof navigator !== 'undefined') {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    return false
}

export const loadWebAssembly = (fileName: string) =>
    fetch(fileName)
        .then((response) => response.arrayBuffer())
        .then((bits) => WebAssembly.compile(bits))
        .then((module) => {
            return new WebAssembly.Instance(module);
        });
