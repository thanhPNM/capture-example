export function validateSessionId(id: string): boolean {
    const regex = /^([A-Z]{3})-(?=.*[A-Z])(?=.*\d)[A-Z\d]{10}$/g
    return regex.test(id)
}