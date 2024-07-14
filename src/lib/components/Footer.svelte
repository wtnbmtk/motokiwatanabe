<script lang="ts">
  import LightBulb from "$lib/components/LightBulb.svelte";
  import Logo from "$lib/components/Logo.svelte";
  export let categories;
</script>

<footer>
  <LightBulb />
  <a class="logo" href="/"><Logo /></a>
  <small class="copyright">© 2024 Motoki Watanabe</small>
</footer>

<style>
  /* FOOTER*/
  footer {
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
