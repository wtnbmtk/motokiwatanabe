import {
  NEWT_APP_UID,
  NEWT_ARTICLE_MODEL_UID,
  NEWT_TAG_MODEL_UID,
  PAGE_LIMIT,
} from "$env/static/private";
import { newtClient } from "$lib/server/newt";
import type { Article, Tag } from "$lib/server/newt";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  const current = Number(params.page);
  const limit = Number(PAGE_LIMIT);

  const { items: tags } = await newtClient.getContents<Tag>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_TAG_MODEL_UID,
    query: {
      depth: 2,
      order: ["_sys.createdAt"],
      or: [
        {
          slug: "sveltekit",
        },
        {
          slug: "nextjs",
        },
        {
          slug: "gatsby",
        },
        {
          slug: "nuxtjs",
        },
        {
          slug: "astro",
        },
      ],
    },
  });

  const tag = await newtClient.getFirstContent<Tag>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_TAG_MODEL_UID,
    query: {
      depth: 2,
      slug: params.tags,
    },
  });

  const { items: articles, total } = await newtClient.getContents<Article>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_ARTICLE_MODEL_UID,
    query: {
      depth: 2,
      tags: tag?._id,
      limit,
      skip: limit * (current - 1),
    },
  });

  const max = Math.ceil(total / limit);
  if (current > max) {
    throw error(404, { message: "Not found" });
  }
  if (!tag) {
    throw error(404, { message: "Not found" });
  }

  return {
    tags,
    tag,
    articles,
    total,
    current,
    limit,
    max,
  };
}) satisfies PageServerLoad;
