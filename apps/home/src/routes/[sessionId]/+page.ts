import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types'

import { validateSessionId } from 'shared-utils';

export const load: PageLoad = ({ params }: { params: { sessionId: string } }) => {
    console.log(params.sessionId)
    if (!validateSessionId(params.sessionId)) {
        throw error(404, {
            message: 'Not found'
        });
    } else {
        console.log('Calling API for session ID: ', params.sessionId)

    }
    return { id: params.sessionId }
}
