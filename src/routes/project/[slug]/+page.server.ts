import {
  NEWT_APP_UID,
  NEWT_ARTICLE_MODEL_UID,
  NEWT_CATEGORY_MODEL_UID,
} from "$env/static/private";
import { newtClient } from "$lib/server/newt";
import type { Article, Category } from "$lib/server/newt";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  const article = await newtClient.getFirstContent<Article>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_ARTICLE_MODEL_UID,
    query: {
      depth: 2,
      slug: String(params.slug),
    },
  });
  const category = await newtClient.getFirstContent<Category>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_CATEGORY_MODEL_UID,
    query: {
      depth: 2,
    },
  });
  if (!article) {
    throw error(404, { message: "Not found" });
  }
  return {
    article,
    category,
  };
}) satisfies PageServerLoad;
