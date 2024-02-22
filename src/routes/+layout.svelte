<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
</script>

<Header />
<main>
	<slot />
	<Menu />
</main>
<Footer />
