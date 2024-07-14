import {
  NEWT_APP_UID,
  NEWT_ARTICLE_MODEL_UID,
  NEWT_CATEGORY_MODEL_UID,
  PAGE_LIMIT,
} from "$env/static/private";
import { newtClient } from "$lib/server/newt";
import type { Article, Category } from "$lib/server/newt";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  const current = Number(params.page);
  const limit = Number(PAGE_LIMIT);

  const { items: categories } = await newtClient.getContents<Category>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_CATEGORY_MODEL_UID,
    query: {
      depth: 2,
      order: ["-_sys.createdAt"],
    },
  });

  const { items: articles, total } = await newtClient.getContents<Article>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_ARTICLE_MODEL_UID,
    query: {
      depth: 2,
      limit,
      categories: "6641228a3c7b20ccb024d38a",
      skip: limit * (current - 1),
    },
  });

  const max = Math.ceil(total / limit);
  if (current > max) {
    throw error(404, { message: "Not found" });
  }

  return {
    categories,
    articles,
    total,
    current,
    limit,
    max,
  };
}) satisfies PageServerLoad;
