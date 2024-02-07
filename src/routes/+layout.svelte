<script lang="ts">
	export const prerender = true;
	import '../app.css';
	import { createEventDispatcher } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';

	let dialog: HTMLDialogElement;
	let anchor: HTMLAnchorElement;
	let btn: HTMLButtonElement;

	const openDialog = () => {
		dialog.showModal();
		dialog.addEventListener('click', (event) => {
			if (event.target === dialog) {
				dialog.close();
				btn.innerHTML = 'MENU';
			}
		});
		if (btn.innerHTML === 'MENU') {
			btn.innerHTML = 'CLOSE';
		}
	};

	const closeDialog = () => {
		dialog.close();
	};
</script>

<Header />
<slot />
<Footer />
<button bind:this={btn} on:click={openDialog}>MENU</button>
<Menu bind:dialog on:closeDialog={closeDialog} />

<style>
	button {
		position: fixed;
		inset: auto 0 8px;
		z-index: 1;
		margin: auto;
		font-size: 0.5rem;
		width: 40px;
		height: 40px;
		border: none;
		border-radius: 50%;
		color: white;
		background: #29323c;
	}
</style>
