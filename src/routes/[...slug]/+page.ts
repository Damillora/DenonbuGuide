import { error } from '@sveltejs/kit';
import { getPage } from '$lib/markdown/parser';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const path = params.slug;

    const page = getPage(path);

    if (page != null) {
        return {
            ...page.metadata,
            isIndex: page.isIndex,
            document: page.document,
        }
    }

    throw error(404, 'Not found');
}