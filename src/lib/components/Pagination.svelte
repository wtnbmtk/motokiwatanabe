<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";

  interface Props {
    current: number;
    slug: string;
    total: number;
    limit: number;
    max: number;
  }

  let {
    current = $bindable(),
    slug,
    total,
    limit,
    max = $bindable(),
  }: Props = $props();

  $effect(() => {
    current = Number(page.params.page);
  });
  $effect(() => {
    max = Math.ceil(total / limit);
  });
  let start = $derived((current - 1) * limit);
  let end = $derived(current === max ? total - 1 : start + limit - 1);

  const goBack = (e: Event) => {
    e.preventDefault();
    goto(`/articles/${slug}/${current - 1}`);
  };

  const goNext = (e: Event) => {
    e.preventDefault();
    goto(`/articles/${slug}/${current + 1}`);
  };
</script>

{#if total && total > limit}
  <div class="pagination">
    {#if current > 1}
      <a
        href={`/articles/${slug}/${current - 1}`}
        class="button"
        onclick={goBack}
        aria-label="left arrow icon"
        aria-describedby="prev">prev</a
      >
    {/if}
    <p>{start + 1} - {end + 1} of {total}</p>
    {#if current < max}
      <a
        href={`/articles/${slug}/${current + 1}`}
        class="button"
        onclick={goNext}
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
</style>
