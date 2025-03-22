import {
  NEWT_APP_UID,
  NEWT_ARTICLE_MODEL_UID,
  NEWT_CATEGORY_MODEL_UID,
} from "$env/static/private";
import { newtClient } from "$lib/server/newt";
import type { Article, Category } from "$lib/server/newt";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.ts";

export const load = (async () => {
  const category = await newtClient.getFirstContent<Category>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_CATEGORY_MODEL_UID,
    query: {
      depth: 2,
      slug: {
        in: ["development"],
      },
    },
  });

  const { items: articles } = await newtClient.getContents<Article>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_ARTICLE_MODEL_UID,
    query: {
      depth: 2,
      categories: category?._id,
    },
  });

  if (!articles) {
    throw error(404, { message: "Not found" });
  }

  return {
    articles,
  };
}) satisfies PageServerLoad;
