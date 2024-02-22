<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const pages = [
		{
			name: 'HOME',
			path: '/',
			style: '--index: 0;',
			d: 'M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z'
		},
		{
			name: 'ABOUT',
			path: '/about',
			style: '--index: 1;',
			d: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z'
		},
		{
			name: 'ARTICLE',
			path: '/article',
			style: '--index: 2;',
			d: 'M7.25 3.688a8.035 8.035 0 0 0-4.872-.523A.48.48 0 0 0 2 3.64v7.994c0 .345.342.588.679.512a6.02 6.02 0 0 1 4.571.81V3.688ZM8.75 12.956a6.02 6.02 0 0 1 4.571-.81c.337.075.679-.167.679-.512V3.64a.48.48 0 0 0-.378-.475 8.034 8.034 0 0 0-4.872.523v9.268Z'
		},
		{
			name: 'CONTACT',
			path: '/contact',
			style: '--index: 0;',
			d: 'M1 8.74c0 .983.713 1.825 1.69 1.943.764.092 1.534.164 2.31.216v2.351a.75.75 0 0 0 1.28.53l2.51-2.51c.182-.181.427-.286.684-.294a44.298 44.298 0 0 0 3.837-.293C14.287 10.565 15 9.723 15 8.74V4.26c0-.983-.713-1.825-1.69-1.943a44.447 44.447 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482ZM5.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
		},
		{
			name: 'INFO',
			path: '/information',
			style: '--index: 1;',
			d: 'M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z'
		}
	];

	export let dialog: HTMLDialogElement;
	const dispatch = createEventDispatcher();
	function clickClose() {
		dispatch('closeDialog');
	}
</script>

<dialog bind:this={dialog}>
	<div class="inner">
		<h2>MENU</h2>
		<nav>
			{#each pages as a}
				{#if a.path === $page.url.pathname}
					<a on:click={clickClose} class="active" href={a.path} style={a.style}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4"
						>
							<path fill-rule="evenodd" d={a.d} /></svg
						>{a.name}</a
					>
				{:else}
					<a on:click={clickClose} class="passive" href={a.path} style={a.style}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4"
						>
							<path fill-rule="evenodd" d={a.d} /></svg
						>{a.name}</a
					>
				{/if}
			{/each}
		</nav>
		<form method="dialog">
			<button on:click={clickClose} class="close"
				><span />
				<span /></button
			>
		</form>
	</div>
</dialog>

<style>
	button.close {
		position: relative;
		margin: auto;
		font-size: small;
		color: white;
		height: 40px;
		width: 40px;
	}
	button.close span {
		position: absolute;
		display: block;
		height: 2px;
		width: 30px;
		background: #fff;
	}
	button.close span:first-child {
		inset: 0;
		margin: auto;
		transform: rotate(45deg);
	}
	button.close span:last-child {
		inset: 0;
		margin: auto;
		transform: rotate(135deg);
	}
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
		animation: fade-in 0.7s ease-out;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(5px);
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
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(100%);
			opacity: 0;
		}
	}
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.inner {
		padding: 1rem 2rem;
		background: #29323c;
	}
	h2 {
		width: 100%;
		text-align: center;
		color: white;
	}
	nav {
		display: grid;
		gap: 1rem;
	}
	a {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: auto 1fr;
		color: white;
		text-decoration: none;
		text-align: center;
		padding: 0 8px;
		cursor: pointer;
		transition: all 0.5s;
		font-size: 1rem;
		place-self: baseline;
	}
	a:hover {
		background: #96aadc;
	}
	.active {
		background: #96aadc;
	}
	.passive {
		background: #29323c;
	}
	.active svg,
	.passive svg {
		width: 1rem;
		height: 1rem;
		margin: auto 8px auto 0;
	}
	form {
		margin: 1rem 0 0;
	}
	@media (width >= 600px) {
		dialog {
			display: none;
		}
	}
</style>
