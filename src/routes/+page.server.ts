import { newtClient } from '$lib/server/newt';
import type { Article } from '$lib/server/newt';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { items: articles } = await newtClient.getContents<Article>({
		appUid: 'blog',
		modelUid: 'article',
		query: {
			select: ['_id', 'title', 'slug', 'body', 'coverImage']
		}
	});
	return {
		articles
	};
}) satisfies PageServerLoad;
