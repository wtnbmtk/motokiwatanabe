<script lang="ts">
  export let categories;
  export let name;

  let menuOpen = false;

  function handleMenuOpen() {
    menuOpen = !menuOpen;
    window.addEventListener("click", handleMenuClose);
  }
  function handleMenuClose() {
    menuOpen = false;
    window.removeEventListener("click", handleMenuClose);
  }
</script>

<div class="dropdown">
  <div>
    <button class="dropbtn" on:click|stopPropagation={handleMenuOpen}
      >{name}
      {#if menuOpen}<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
          />
        </svg>
      {:else}<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
          />
        </svg>{/if}</button
    >
  </div>
  {#if menuOpen}
    <nav>
      <a href={`/articles/latest/1`}>Latest</a>
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
  }
  nav {
    position: absolute;
    display: grid;
    z-index: 1;
    width: 200px;
  }
  nav a {
    padding: 4px 8px;
    text-align: center;
  }
</style>
