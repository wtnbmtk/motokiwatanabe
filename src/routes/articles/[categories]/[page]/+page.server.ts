import {
  NEWT_APP_UID,
  NEWT_ARTICLE_MODEL_UID,
  NEWT_CATEGORY_MODEL_UID,
  PAGE_LIMIT,
} from "$env/static/private";
import { newtClient } from "$lib/server/newt";
import type { Article, Category } from "$lib/server/newt";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.ts";

export const load = (async ({ params }) => {
  const current = Number(params.page);
  const limit = Number(PAGE_LIMIT);

  const category = await newtClient.getFirstContent<Category>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_CATEGORY_MODEL_UID,
    query: {
      depth: 2,
      slug: params.categories,
    },
  });
  const { items: articles, total } = await newtClient.getContents<Article>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_ARTICLE_MODEL_UID,
    query: {
      depth: 2,
      categories: category?._id,
      limit,
      skip: limit * (current - 1),
    },
  });

  const max = Math.ceil(total / limit);
  if (current > max) {
    throw error(404, { message: "Not found" });
  }
  if (!category) {
    throw error(404, { message: "Not found" });
  }

  return {
    category,
    articles,
    total,
    current,
    limit,
    max,
  };
}) satisfies PageServerLoad;
