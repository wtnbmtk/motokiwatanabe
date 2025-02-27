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
export interface Author {
  fullName: string;
  slug: string;
  biography: string;
  profileImage?: Media;
}
export interface Chart {
  name: string;
  slug: string;
  score?: { number: number }[];
  tags?: {
    name?: string;
    slug?: string;
  }[];
}

export const newtClient = createClient({
  spaceUid: NEWT_SPACE_UID,
  token: NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});
