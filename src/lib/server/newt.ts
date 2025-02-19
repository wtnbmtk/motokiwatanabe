import { NEWT_CDN_API_TOKEN, NEWT_SPACE_UID } from "$env/static/private";
import { type Media, createClient } from "newt-client-js";
import type { AppMeta, GetContentsQuery } from "newt-client-js";

export interface Article {
  _id: string;
  title: string;
  slug: string;
  body: string;
  coverImage: Media;
  categories?: {
    name?: string;
    slug?: string;
  }[];
  tags?: {
    name?: string;
    slug?: string;
  }[];
  gallery?: {
    title?: string;
    description?: string;
    src?: string;
    altText?: string;
    width?: number;
    height?: number;
    metadata?: [];
  }[];
}
export interface Category {
  _id: string;
  name: string;
  slug: string;
}
export interface Tag {
  _id: string;
  name: string;
  slug: string;
}
export const newtClient = createClient({
  spaceUid: NEWT_SPACE_UID,
  token: NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});

export const getArticles = async (
  query?: GetContentsQuery
): Promise<{ articles: Article[]; total: number }> => {
  const { items: articles, total } = await newtClient.getContents<Article>({
    appUid: `${process.env.NEXT_PUBLIC_NEWT_APP_UID}`,
    modelUid: `${process.env.NEXT_PUBLIC_NEWT_ARTICLE_MODEL_UID}`,
    query: {
      depth: 2,
      ...query,
    },
  });
  return {
    articles,
    total,
  };
};
