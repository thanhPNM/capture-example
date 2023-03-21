import { error } from '@sveltejs/kit';
import { validateSessionId } from 'shared-utils';

export function load({ params }: { params: { slug: string } }) {
    console.log(params.slug)

    if (!validateSessionId(params.slug)) {
        throw error(404, {
            message: 'Not found'
        });
    }
    return { id: params.slug }
}
