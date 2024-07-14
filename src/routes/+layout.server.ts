export const prerender = "auto";

import { NEWT_APP_UID, NEWT_CATEGORY_MODEL_UID } from "$env/static/private";
import { newtClient } from "$lib/server/newt";
import type { Category } from "$lib/server/newt";

export const load = async () => {
  const { items: categories, total } = await newtClient.getContents<Category>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_CATEGORY_MODEL_UID,
    query: {
      depth: 2,
      order: ["-_sys.createdAt"],
    },
  });
  const category = await newtClient.getFirstContent<Category>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_CATEGORY_MODEL_UID,
    query: {
      depth: 2,
    },
  });
  return {
    categories,
    category,
    total,
  };
};
