import { error } from '@sveltejs/kit';
import { validateSessionId } from '@utils/index';
import type { PageLoad } from './$types';
export function load({ params }: { params: { slug: string } }) {
    console.log(params.slug)

    if (!validateSessionId(params.slug)) {
        throw error(404, {
            message: 'Not found'
        });
    }
    return { id: params.slug }
}

// export const load = (({ route }) => {
//     console.log(route.id); // '/a/[b]/[...c]'
// }) satisfies PageLoad;