<script lang="ts">
  import LightBulb from "$lib/components/LightBulb.svelte";
  import Logo from "$lib/components/Logo.svelte";
  let { categories } = $props();
</script>

<footer>
  <LightBulb />
  <nav>
    {#each categories as { slug, name }}
      <a href={`/articles/${slug}/1`}>{name}</a>
    {/each}
  </nav>
  <a class="logo" href="/"><Logo /></a>
  <small class="copyright">© 2025 Motoki Watanabe</small>
</footer>

<style>
  /* FOOTER*/
  footer {
    padding: 0 8px;
  }
  .logo {
    display: block;
    width: fit-content;
    margin: 16px auto 0;
  }
  nav {
    display: flex;
    flex-flow: wrap;
    gap: 16px;
    width: fit-content;
    margin: 0 auto;
    text-transform: uppercase;
  }

  .copyright {
    display: block;
    text-align: center;
    margin-bottom: 8px;
  }
  @media (width >= 600px) {
    li {
      display: inline-block;
    }
    li:first-child {
      margin-left: 0;
    }
    li:last-child {
      margin-right: 0;
    }
  }
</style>
