export function validateSessionId(id: string): boolean {
    const regex = /^([A-Z]{3})-[A-Z0-9]{10}$/g
    return id.match(regex) ? true : false
}