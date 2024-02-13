<script lang="ts">
	export const prerender = true;
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import Menu from '$lib/components/Menu.svelte';

	let y = 0;
</script>

<Header />
<slot />
<Footer />
<div class="relative">
	<Dialog />
</div>
{#if y > 48}
	<div class:fixed={y > 48}>
		<Dialog />
	</div>
{/if}
<svelte:window bind:scrollY={y} />
<Menu />

<style>
	.relative,
	.fixed {
		inset: 8px 32px auto auto;
	}
	.relative {
		position: absolute;
	}
	.fixed {
		position: fixed;
		z-index: 1;
	}
</style>
