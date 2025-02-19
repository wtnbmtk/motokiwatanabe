import {
  NEWT_APP_UID,
  NEWT_ARTICLE_MODEL_UID,
  PAGE_LIMIT,
} from "$env/static/private";
import { newtClient } from "$lib/server/newt";
import type { Article } from "$lib/server/newt";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.ts";

export const load = (async () => {
  const { items: articles, total } = await newtClient.getContents<Article>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_ARTICLE_MODEL_UID,
    query: {
      depth: 2,
      categories: "6641228a3c7b20ccb024d38a",
    },
  });
  if (!articles) {
    throw error(404, { message: "Not found" });
  }
  return {
    articles,
    total,
  };
}) satisfies PageServerLoad;
