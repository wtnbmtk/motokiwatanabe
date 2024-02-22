import { newtClient } from '$lib/server/newt';
import type { Article } from '$lib/server/newt';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const article = await newtClient.getFirstContent<Article>({
		appUid: 'blog',
		modelUid: 'article',
		query: {
			slug: params.slug,
			select: ['_id', 'title', 'slug', 'body', 'coverImage']
		}
	});
	return {
		article
	};
}) satisfies PageServerLoad;
