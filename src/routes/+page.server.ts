import {
  NEWT_APP_UID,
  NEWT_ARTICLE_MODEL_UID,
  NEWT_AUTHOR_MODEL_UID,
  NEWT_CHART_MODEL_UID,
  NEWT_TAG_MODEL_UID,
} from "$env/static/private";
import { newtClient } from "$lib/server/newt";
import type { Article, Author, Chart, Tag } from "$lib/server/newt";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.ts";

export const load = (async () => {
  const author = await newtClient.getFirstContent<Author>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_AUTHOR_MODEL_UID,
    query: {
      depth: 2,
      slug: {
        in: ["motoki_watanabe"],
      },
    },
  });

  if (!author) {
    throw error(404, { message: "Not found" });
  }

  const chart = await newtClient.getFirstContent<Chart>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_CHART_MODEL_UID,
    query: {
      depth: 2,
      slug: {
        in: ["radar0"],
      },
    },
  });

  const { items: tags } = await newtClient.getContents<Tag>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_TAG_MODEL_UID,
    query: {
      depth: 2,
      slug: {
        in: ["development", "design", "editing", "management", "promotion"],
      },
    },
  });

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
    author,
    chart,
    tags,
    articles,
    total,
  };
}) satisfies PageServerLoad;
