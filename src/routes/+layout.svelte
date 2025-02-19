<script lang="ts">
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import Menu from "$lib/components/Menu.svelte";
  let { data, children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<Header />

<main>
  {@render children?.()}
  <Menu />
</main>

<Footer categories={data.categories} />
