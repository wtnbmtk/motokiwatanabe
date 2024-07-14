<script lang="ts">
  import { goto } from "$app/navigation";
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  import Dropdown from "$lib/components/Dropdown.svelte";
  import Pagination from "$lib/components/Pagination.svelte";
  import SearchForm from "$lib/components/SearchForm.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;

  let query = "";

  function handleSearch(event: CustomEvent) {
    const value = event.detail.query;
    goto(`/search?q=${encodeURIComponent(value)}`);
  }
</script>

<svelte:head>
  <title>All Articles</title>
  <meta name="description" content="All Articles" />
</svelte:head>

<div class="contain">
  <h1>Latest</h1>
  <div class="inner">
    <Dropdown categories={data.categories} name={"Latest"} />

    <SearchForm {query} on:search={handleSearch} />

    <ArticleCard articles={data.articles} />

    <Pagination
      current={data.current}
      slug={"latest"}
      total={data.total}
      limit={data.limit}
      max={data.max}
    />
  </div>
</div>

<style>
</style>
