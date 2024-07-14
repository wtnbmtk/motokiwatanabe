<script lang="ts">
  import "../app.css";
  import icon from "$lib/assets/name-square-logo.svg";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import Menu from "$lib/components/Menu.svelte";
  export let data;
</script>

<svelte:head>
  <link rel="icon" href={icon} />
</svelte:head>

<Header />

<main>
  <slot />
  <Menu />
</main>

<Footer categories={data.categories} />
