<script lang="ts">
  import BudouX from "$lib/components/BudouX.svelte";
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import "photoswipe/style.css";

  export let data: PageData;

  const text = data.article?.title;

  onMount(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + "lightbox",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  });
</script>

<svelte:head>
  <title>{data.article?.title}</title>
  <meta name="description" content="投稿詳細ページです" />
</svelte:head>

<div class="contain">
  <picture
    ><source
      srcset={`${data.article?.coverImage.src}?format=webp`}
      type="image/webp"
    /><img
      class="eyecatch"
      src={data.article?.coverImage.src}
      alt=""
      loading="eager"
    /></picture
  >
  <div class="inner">
    <article>
      <BudouX {text} />
      <section class="article">{@html data.article?.body}</section>
    </article>
  </div>
</div>

<style lang="scss">
  // section {
  //   max-width: 516px;
  //   margin: auto;
  // }
  .article :global(h2) {
    font-weight: bold;
  }
  .article :global(.name) {
    text-align: center;
    margin: 32px 0 4px;
  }
  .eyecatch {
    aspect-ratio: 16 / 9;
  }
  :global(.pswp-gallery img) {
    cursor: zoom-in;
  }
  :global(hr) {
    border: transparent;
    padding: 8px;
  }
</style>
