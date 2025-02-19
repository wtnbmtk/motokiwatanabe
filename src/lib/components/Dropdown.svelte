<script lang="ts">
  let { categories, name } = $props();

  let menuOpen = $state(false);

  const handleMenuOpen = (e: Event) => {
    e.stopPropagation();
    menuOpen = !menuOpen;
    window.addEventListener("click", handleMenuClose);
  };

  const handleMenuClose = () => {
    menuOpen = false;
    window.removeEventListener("click", handleMenuClose);
  };
</script>

<div class="dropdown">
  <div>
    <button class="dropbtn" onclick={handleMenuOpen}
      >{name}
      {#if menuOpen}<svg class="icons">
          <symbol id="drop-open" viewBox="0 0 24 24">
            <path
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
            /></symbol
          >
          <use href="#drop-open" />
        </svg>
      {:else}<svg class="icons"
          ><symbol id="drop-close" viewBox="0 0 24 24">
            <path
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
            /></symbol
          >
          <use href="#drop-close" />
        </svg>{/if}</button
    >
  </div>
  {#if menuOpen}
    <nav>
      {#each categories as { slug, name }}
        <a href={`/articles/${slug}/1`}>{name}</a>
      {/each}
    </nav>{/if}
</div>

<style>
  .dropdown {
    width: fit-content;
    margin: 16px auto;
  }
  svg {
    width: 1.4rem;
    margin: auto 0 auto 8px;
  }
  button {
    padding: 4px 8px;
    display: grid;
    grid-auto-flow: column;
    width: 200px;
    place-content: center;
    text-transform: uppercase;
  }
  nav {
    position: absolute;
    display: grid;
    z-index: 1;
    width: 200px;
    text-transform: uppercase;
  }
  nav a {
    padding: 4px 8px;
    text-align: center;
  }
</style>
