import { NEWT_CDN_API_TOKEN, NEWT_SPACE_UID } from "$env/static/private";
import { type Media, createClient } from "newt-client-js";
import type { AppMeta, GetContentsQuery } from "newt-client-js";

export interface Article {
  _id: string;
  title: string;
  slug: string;
  body: string;
  coverImage: Media;
  tags: string;
  categories?: {
    name?: string;
    slug?: string;
  };
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
