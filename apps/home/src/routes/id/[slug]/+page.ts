import { error } from '@sveltejs/kit';
import { validateSessionId } from '@utils/index';

export function load({ params }: { params: { slug: string } }) {
    console.log(params.slug)

    if (!validateSessionId(params.slug)) {
        throw error(404, {
            message: 'Not found'
        });
    } else {
        console.log('Calling API for session ID: ', params.slug)
    }
    return { id: params.slug }
}
