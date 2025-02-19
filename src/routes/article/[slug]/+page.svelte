<script lang="ts">
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import type { PageData } from "./$types.ts";
  import "photoswipe/style.css";
  import "highlight.js/styles/atom-one-dark.css";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let galleryId = "lightbox";

  $effect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryId}`,
      children: "a.image",
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
      srcset={`${data.article?.coverImage.src}?format=webp&width=1200&height=630&fit=cover`}
      type="image/webp"
    /><img
      class="eyecatch"
      src={data.article?.coverImage.src}
      alt={data.article?.coverImage.altText}
      loading="eager"
    /></picture
  >
  <div class="inner">
    <article>
      <h1>{@html data.segments}</h1>
      <section class="article">
        {@html data.highlightedHtml}
        {#if data.article.gallery && data.article.gallery.length > 0}
          <div class="pswp-gallery" id={galleryId}>
            {#each data.article.gallery ?? [] as image}
              <p>
                {image.title}
                {#if image.metadata}
                  {#each Object.entries(image.metadata) as key}
                    {#if key[0]}
                      <span class="ampersand">&nbsp;&amp;</span>
                      <a
                        class="metadata-link"
                        href={`https://x.com/${key[0]}`}
                        target="_blank"
                        rel="noreferrer">{`@${key[0]}`}</a
                      >
                    {/if}
                  {/each}
                {/if}
              </p>
              <p>{image.description}</p>
              <a
                class="image"
                href={`${image.src}?format=webp`}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                target="_blank"
                rel="noreferrer"
              >
                <picture
                  ><source
                    srcset={`${image.src}?format=webp&width=600&height=800&fit=outside`}
                    type="image/webp"
                  /><img src={`${image.src}`} alt={image.altText} /></picture
                >
              </a>
            {/each}
          </div>
        {/if}
      </section>
    </article>
  </div>
</div>

<style lang="scss">
  // section {
  //   max-width: 516px;
  //   margin: auto;
  // }
  h1 {
    text-align: initial;
    word-break: keep-all;
    overflow-wrap: anywhere;
    margin-bottom: 1em;
  }
  .article :global(h2),
  .article :global(h3) {
    font-weight: bold;
    margin: 1em 0;
    border-left: solid 4px #fff;
    padding-left: 2px;
  }
  .article :global(li) {
    list-style-type: disc;
  }
  .pswp-gallery p {
    max-width: 400px;
    margin: auto;
  }
  .pswp-gallery img {
    max-width: 400px;
    margin: 0 auto 2em;
    cursor: zoom-in;
  }
  .ampersand:first-child {
    display: none;
  }
  .eyecatch {
    aspect-ratio: 1.91/1;
  }
  :global(hr) {
    border: transparent;
    padding: 8px;
  }
</style>
