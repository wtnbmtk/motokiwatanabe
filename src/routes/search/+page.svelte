<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import SearchForm from "$lib/components/SearchForm.svelte";
  import type { Article } from "$lib/server/newt";
  import { onMount } from "svelte";
  import { derived } from "svelte/store";

  export let data: { articles: Article[] };

  let filteredArticles: Article[] = [];
  let query = "";

  // URLのクエリパラメータを監視するストア
  const searchQuery = derived(
    page,
    ($page) => $page.url.searchParams.get("q") || ""
  );

  // onMountでフィルタリングを行う
  onMount(() => {
    searchQuery.subscribe((q) => {
      query = q;
      const lowerCaseQuery = q.toLowerCase();
      filteredArticles = data.articles.filter(
        (article) =>
          article.title.toLowerCase().includes(lowerCaseQuery) ||
          article.body.toLowerCase().includes(lowerCaseQuery)
      );
    });
  });

  // フォーム送信時にクエリを更新してフィルタリングを行う
  function handleSearch(event: CustomEvent) {
    const value = event.detail.query;
    goto(`/search?q=${encodeURIComponent(value)}`);
  }
</script>

<div class="contain">
  <h1>"{query}" に関する記事</h1>
  <div class="inner">
    <SearchForm {query} on:search={handleSearch} />

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
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                ><path
                  fill="currentColor"
                  d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"
                /></svg
              ></a
            >
          </li>
        {/each}
      </ul>
    {:else}
      <p>"{query}" に関する記事はありません</p>
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
  .articles svg {
    position: absolute;
    inset: auto auto 0 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
  }
  p {
    text-align: center;
  }
</style>
