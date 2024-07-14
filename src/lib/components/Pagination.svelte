<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  export let current: number;
  export let slug: string;
  export let total: number;
  export let limit: number;
  export let max: number;

  $: current = Number($page.params.page);
  $: max = Math.ceil(total / limit);
  $: start = (current - 1) * limit;
  $: end = current === max ? total - 1 : start + limit - 1;

  function goBack() {
    goto(`/articles/${slug}/${current - 1}`);
  }

  function goNext() {
    goto(`/articles/${slug}/${current + 1}`);
  }
</script>

{#if total && total > limit}
  <div class="pagination">
    {#if current > 1}
      <a
        href={`/articles/${slug}/${current - 1}`}
        class="button"
        on:click|preventDefault={goBack}
        aria-label="left arrow icon"
        aria-describedby="prev">prev</a
      >
    {/if}
    <p>{start + 1} - {end + 1} of {total}</p>
    {#if current < max}
      <a
        href={`/articles/${slug}/${current + 1}`}
        class="button"
        on:click|preventDefault={goNext}
        aria-label="right arrow icon"
        aria-describedby="next">next</a
      >
    {/if}
  </div>
{/if}
<div class="dummy">
  {#each Array(max) as _, i}
    <a href="/articles/{slug}/{i + 1}">{i + 1}</a>
  {/each}
</div>

<style>
  .dummy {
    display: none;
    visibility: hidden;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
  }
  .pagination p {
    margin: 1rem;
  }
  button {
    display: flex;
  }
  button:disabled {
    visibility: hidden;
  }
</style>
