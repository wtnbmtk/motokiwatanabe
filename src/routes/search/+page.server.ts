import { NEWT_APP_UID, NEWT_ARTICLE_MODEL_UID } from "$env/static/private";
import { newtClient } from "$lib/server/newt";
import type { Article } from "$lib/server/newt";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const { items: articles } = await newtClient.getContents<Article>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_ARTICLE_MODEL_UID,
  });

  if (!articles) {
    throw error(404, { message: "Not found" });
  }

  return {
    articles,
  };
}) satisfies PageServerLoad;
