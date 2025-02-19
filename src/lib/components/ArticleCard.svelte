<script lang="ts">
  let { articles } = $props();
</script>

<div class="articles">
  {#each articles as article, i}
    <article id={`${i}`}>
      <h2>{article.title}</h2>
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
    </article>
  {/each}
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
  .articles article {
    max-width: 250px;
  }
  .articles h2 {
    font-size: 1rem;
    font-style: normal;
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
</style>
