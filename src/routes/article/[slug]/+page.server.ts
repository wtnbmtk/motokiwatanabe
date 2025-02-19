import { NEWT_APP_UID, NEWT_ARTICLE_MODEL_UID } from "$env/static/private";
import { newtClient } from "$lib/server/newt";
import type { Article } from "$lib/server/newt";
import { error } from "@sveltejs/kit";
import { Parser, jaModel } from "budoux";
import { load as cheerioLoad } from "cheerio";
import hljs from "highlight.js";
import type { PageServerLoad } from "./$types.ts";

const parser = new Parser(jaModel);
const languageRegex = /language-(\w+)/;

export const load = (async ({ params }) => {
  const article = await newtClient.getFirstContent<Article>({
    appUid: NEWT_APP_UID,
    modelUid: NEWT_ARTICLE_MODEL_UID,
    query: {
      depth: 2,
      slug: String(params.slug),
    },
  });

  if (!article) {
    throw error(404, { message: "Not found" });
  }

  // タイトルを分割
  const segments = parser.parse(article.title).join("<wbr>");

  // HTMLの解析と加工
  const $ = cheerioLoad(article.body ?? "");

  // pre > code の要素を見つけて、シンタックスハイライトを適用
  $("pre code").each((_, elem) => {
    const $elem = $(elem);
    const code = $elem.text();
    const langMatch = ($elem.attr("class") || "").match(languageRegex);
    const lang = langMatch ? langMatch[1] : "plaintext";

    // highlight.jsでコードをハイライト
    const highlighted = hljs.highlight(code, {
      language: lang,
      ignoreIllegals: true,
    }).value;

    // ハイライトされたコードで内容を置き換え、クラスを追加
    $elem.html(highlighted);
    $elem.addClass("hljs");
  });

  const highlightedHtml = $.html();

  return {
    article,
    segments,
    highlightedHtml,
  };
}) satisfies PageServerLoad;
