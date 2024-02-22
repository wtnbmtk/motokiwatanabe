<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import icon from '$lib/assets/name-square-logo.svg';
</script>

<svelte:head>
	<link rel="icon" href={icon} />
</svelte:head>

<Header />
<main>
	<slot />
	<Menu />
</main>
<Footer />
