<script lang="ts">
  import { page } from "$app/state";

  const pages = [
    { name: "WORKS", path: "/articles/development/1" },
    { name: "Contact", path: "/contact" },
    { name: "Infomation", path: "/information" },
  ];
</script>

<nav>
  {#each pages as a}
    {#if a.path === page.url.pathname}
      <a class="active" href={a.path}>{a.name}</a>
    {:else}
      <a class="passive" href={a.path}>{a.name}</a>
    {/if}
  {/each}
</nav>

<style>
  nav {
    display: none;
    position: absolute;
    inset: 0 16px 0 auto;
    text-transform: uppercase;
  }
  a:hover::after {
    position: relative;
    content: "";
    display: block;
    border-bottom: solid 2px;
    top: -6px;
  }
  /* .active::after {
		position: relative;
		content: '';
		display: block;
		border-bottom: solid 2px;
		top: -6px;
	} */
  .mail {
    width: 30px;
    position: relative;
  }
  .mail svg {
    position: absolute;
    inset: 0;
    margin: auto;
  }

  @media (width >= 600px) {
    nav {
      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
      width: fit-content;
    }
  }
</style>
