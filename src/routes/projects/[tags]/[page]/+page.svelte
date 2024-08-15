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
  <title>Category: {data.tag.name}</title>
  <meta name="description" content="Category: {data.tag.name}" />
</svelte:head>

<div class="contain">
  <h1>{data.tag.name}</h1>
  <div class="inner">
    <Dropdown tags={data.tags} name={data.tag.name} />

    <SearchForm {query} on:search={handleSearch} />

    <ArticleCard articles={data.articles} />

    <Pagination
      current={data.current}
      slug={data.tag?.slug}
      total={data.total}
      limit={data.limit}
      max={data.max}
    />
  </div>
</div>

<style>
</style>
