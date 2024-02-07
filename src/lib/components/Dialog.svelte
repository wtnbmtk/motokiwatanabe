<script lang="ts">
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	const pages = [
		{ name: 'About', path: '/' },
		{ name: 'Contact', path: '/contact' },
		{ name: 'Infomation', path: '/information' }
	];

	const dispatch = createEventDispatcher();
	function clickClose() {
		dispatch('closeDialog');
	}

	export let dialog: HTMLDialogElement;
</script>

<dialog bind:this={dialog}>
	<div class="inner">
		<h2>MENU</h2>
		<nav>
			{#each pages as a}
				{#if a.path === $page.url.pathname}
					<a class="active" href={a.path} on:click={clickClose}>{a.name}</a>
				{:else}
					<a class="passive" href={a.path} on:click={clickClose}>{a.name}</a>
				{/if}
			{/each}
			<a class="mail" href="mailto:wtnbmtk7@gmail.com"
				><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
					/></svg
				></a
			>
		</nav>
		<form method="dialog">
			<button on:click={clickClose}>CLOSE</button>
		</form>
	</div>
</dialog>

<style>
	dialog {
		position: fixed;
		inset: 0;
		margin: auto;
		border: none;
		animation: slide-down 0.7s ease-out;
		pointer-events: none;
	}
	dialog[open] {
		animation: slide-up 0.7s ease-out;
		pointer-events: inherit;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}
	@keyframes slide-up {
		from {
			transform: translateY(100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-down {
		from {
			display: block;
		}
		to {
			transform: translateY(100%);
			opacity: 0;
		}
	}
	.inner {
		padding: 1rem 2rem;
	}
	h2 {
		width: 100%;
		text-align: center;
	}
	nav {
		display: grid;
		gap: 1rem;
	}
	a {
		display: block;
		color: black;
		text-decoration: none;
		text-align: center;
		padding: 0 2rem;
		cursor: pointer;
	}
	a:hover {
		text-decoration: underline;
	}
	.active {
		background-color: black;
		color: white;
	}
	.mail svg {
		position: relative;
		inset: 2px 0;
		margin: auto;
	}
	form {
		margin: 1rem 0 0;
	}
	button {
		display: block;
		margin: auto;
		cursor: pointer;
		background-color: transparent;
		border: none;
		font-family: inherit;
		font-size: inherit;
	}
	@media (width >= 600px) {
		dialog {
			display: none;
		}
	}
</style>
