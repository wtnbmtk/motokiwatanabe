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

	let y: number;
</script>

{#if y > 100}
	<header transition:fade id="header">
		<div>
			<a data-sveltekit-reload href="/"><div class="logo"><Logo /></div></a>
			<button id="menu-btn" class="btn" type="button" on:click={openDialog}>MENU</button>
			<Nav />
			<Dialog bind:dialog on:closeDialog={closeDialog} />
		</div>
	</header>
{/if}

<svelte:window bind:scrollY={y} />

<style>
	header {
		position: fixed;
		width: 100%;
		padding: 8px 8px 0;
		transition: 0.5s;
	}
	header > div {
		max-width: 800px;
		background-color: #29323c;
		backdrop-filter: blur(5px);
		height: 40px;
		line-height: 40px;
		border-radius: 20px;
		margin: auto;
	}
	header > div > a {
		display: block;
		height: 40px;
		width: fit-content;
	}
	.btn {
		display: block;
		position: absolute;
		inset: 0 8px 0 auto;
		height: 40px;
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: #fff;
		font-family: inherit;
		margin-right: 8px;
	}
	.margin {
		height: 50px;
	}

	@media (width >= 800px) {
		.btn {
			display: none;
		}
	}
</style>
