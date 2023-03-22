export function validateSessionId(id: string): boolean {
    const regex = /^([A-Z]{3})-(?=.*[A-Z])(?=.*\d)[A-Z\d]{10}$/g
    return regex.test(id)
}

export function isMobileBrowser(): boolean {
    if (typeof navigator !== 'undefined') {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    return false
}