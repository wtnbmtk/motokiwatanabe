<script lang="ts">
	import { fade } from 'svelte/transition';
	import Logo from '$lib/components/Logo.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Dialog from '$lib/components/Dialog.svelte';

	let dialog: HTMLDialogElement;

	const openDialog = () => {
		dialog.showModal();
		dialog.addEventListener('click', (event) => {
			if (event.target === dialog) {
				dialog.close();
			}
		});
	};

	const closeDialog = () => {
		dialog.close();
	};

	let y = 0;
</script>

<header>
	<div>
		<a data-sveltekit-reload href="/"><div class="logo"><Logo /></div></a>
		<button id="menu-btn" class="btn" type="button" on:click={openDialog}>MENU</button>
		<Nav />
	</div>
</header>
{#if y > 48}
	<header transition:fade class:fixed={y > 48}>
		<div>
			<a data-sveltekit-reload href="/#top"><Logo /></a>
			<button id="menu-btn" class="btn" type="button" on:click={openDialog}>MENU</button>
			<Nav />
		</div>
	</header>
{/if}
<svelte:window bind:scrollY={y} />

<Dialog bind:dialog on:closeDialog={closeDialog} />

<style>
	header {
		position: relative;
		top: 0;
		width: 100%;
		padding: 8px 8px 0;
		transition: 0.5s;
	}
	header.fixed {
		position: fixed;
		top: 0;
	}
	header > div {
		position: relative;
		max-width: 800px;
		height: 40px;
		line-height: 40px;
		border-radius: 20px;
		margin: auto;
		background-color: #29323c;
	}
	header.fixed > div {
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
	.btn {
		display: block;
		position: absolute;
		inset: 0 16px 0 auto;
		height: 40px;
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: #fff;
		font-family: inherit;
	}
	.margin {
		height: 50px;
	}

	@media (width >= 600px) {
		.btn {
			display: none;
		}
	}
</style>
