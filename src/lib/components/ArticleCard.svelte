<script lang="ts">
  export let articles;
</script>

<div class="articles">
  {#each articles as article, i}
    <article>
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
          <use href="#arrow-up-right" />
        </svg><symbol id="arrow-up-right" viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </symbol></a
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
    background: rgba(195, 223, 243, 0.8);
    backdrop-filter: blur(2px);
    font-size: 1.6rem;
    padding: 2px;
  }
</style>
