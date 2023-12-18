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
			<ul>
				{#each pages as a}
					{#if a.path === $page.url.pathname}
						<li class="active"><a href={a.path} on:click={clickClose}>{a.name}</a></li>
					{:else}
						<li><a data-sveltekit-reload href={a.path} on:click={clickClose}>{a.name}</a></li>
					{/if}
				{/each}
			</ul>
		</nav>
		<nav>
			<ul>
				<li>
					<a href="mailto:wtnbmtk7@gmail.com"><span class="material-icons">mail</span></a>
				</li>
			</ul>
		</nav>
		<form method="dialog">
			<button class="close" on:click={() => dialog.close()}>CLOSE</button>
		</form>
	</div>
</dialog>

<style>
	ul {
		margin: 0;
		padding: 0;
	}
	dialog {
		color: #333333;
		margin: auto;
		padding: 0;
		pointer-events: none;
		opacity: 0;
		transition: opacity 1s;
	}
	dialog[open] {
		opacity: 1;
		pointer-events: inherit;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}
	h2 {
		width: 100%;
		text-align: center;
	}
	li {
		list-style: none;
		margin: 1rem;
	}
	a {
		display: block;
		color: black;
		text-decoration: none;
		text-align: center;
		padding: 0 4rem;
		cursor: pointer;
	}
	a:hover {
		text-decoration: underline;
	}
	.active {
		background-color: black;
	}
	.active a {
		color: white;
	}
	.close {
		display: block;
		margin: 1rem auto;
		cursor: pointer;
		background-color: transparent;
		border: none;
		font-family: inherit;
	}
</style>
