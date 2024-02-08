<script lang="ts">
	import { fade } from 'svelte/transition';
	import Logo from '$lib/components/Logo.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Dialog from '$lib/components/Dialog.svelte';

	let y = 0;
</script>

<header>
	<div>
		<a href="/"><Logo /></a>
		<Nav />
	</div>
</header>
<Dialog />
{#if y > 48}
	<div transition:fade class:fixed={y > 48}>
		<header>
			<div>
				<a href="/"><Logo /></a>
				<Nav />
			</div>
		</header>
		<Dialog />
	</div>
{/if}
<svelte:window bind:scrollY={y} />

<style>
	header,
	.fixed header {
		width: 100%;
		padding: 8px 8px 0;
		transition: 0.5s;
	}
	header {
		position: relative;
		top: 0;
	}
	.fixed header {
		position: fixed;
		top: 0;
	}
	header > div,
	.fixed header > div {
		position: relative;
		max-width: 800px;
		height: 40px;
		line-height: 40px;
		border-radius: 20px;
		margin: auto;
	}
	header > div {
		background-color: #29323c;
	}
	.fixed header > div {
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(2px);
	}
	header > div > a {
		position: absolute;
		left: 16px;
		display: block;
		height: 40px;
		width: fit-content;
	}
	header > div > a :global(svg) {
		margin: 0;
		padding: 8px 0;
		height: 40px;
		width: auto;
	}
</style>
