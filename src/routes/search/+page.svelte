<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import SearchForm from "$lib/components/SearchForm.svelte";
  import type { Article } from "$lib/server/newt";
  import type { PageData } from "./$types.ts";
  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  interface Props {
    data: {
      articles: Article[];
      gallery: { title?: string; description?: string };
    };
  }

  // URLのクエリパラメータを監視する
  let searchQuery = $derived(
    browser ? page.url.searchParams.get("q") || "" : ""
  );
  let query = $state("");
  let filteredArticles: Article[] = $state([]);

  // リアクティブフィルタリング
  $effect(() => {
    query = searchQuery;
    const lowerCaseQuery = searchQuery.toLowerCase();
    filteredArticles = data.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(lowerCaseQuery) ||
        article.body.toLowerCase().includes(lowerCaseQuery) ||
        article.gallery?.some((item) =>
          Object.values(item).some((value) =>
            String(value).toLowerCase().includes(lowerCaseQuery)
          )
        )
    );
  });
</script>

<div class="contain">
  <h1>"{searchQuery}" に関する記事</h1>
  <div class="inner">
    <SearchForm bind:query />

    {#if filteredArticles.length > 0}
      <ul class="articles">
        {#each filteredArticles as article, i}
          <li>
            {article.title}
            <a href={`/article/${article.slug}`}
              ><picture>
                <source
                  srcset={`${article.coverImage.src}?format=avif&quality=75&width=350&height=350`}
                  width="250"
                  height="250"
                /><source
                  srcset={`${article.coverImage.src}?format=webp&quality=75&width=350&height=350`}
                  width="250"
                  height="250"
                /><img
                  class="eyecatch"
                  src={`${article.coverImage.src}?format=auto&quality=75&width=350&height=350`}
                  alt="article"
                  loading={i === 0 ? "eager" : "lazy"}
                  width="250"
                  height="250"
                /></picture
              ><svg class="icons">
                <symbol id="arrow-up-right" viewBox="0 0 24 24"
                  ><path
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </symbol><use href="#arrow-up-right" /></svg
              ></a
            >
          </li>
        {/each}
      </ul>
    {:else}
      <p>"{searchQuery}" に関する記事はありません</p>
    {/if}
  </div>
</div>

<style>
  .articles {
    display: grid;
    place-content: center;
    place-items: end center;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    gap: 16px;
    list-style: none;
    padding: 0;
  }
  .articles li {
    max-width: 250px;
  }
  .articles a {
    display: block;
    max-width: 250px;
    max-height: 250px;
    position: relative;
    overflow: hidden;
    margin: 8px auto 0;
  }
  .articles img {
    transition: 0.5s ease-in-out;
    transform: scale(1);
  }
  .articles a:hover img {
    cursor: pointer;
    transform: scale(1.3);
  }
  .icons {
    position: absolute;
    inset: auto auto 0 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    font-size: 1.6rem;
    padding: 4px 4px 2px 2px;
  }
  p {
    text-align: center;
  }
</style>
