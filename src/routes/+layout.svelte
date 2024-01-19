<script lang="ts">
	export const prerender = true;
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import Logo from '$lib/components/Logo.svelte';

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

	// @ts-ignore
	import Headroom from 'svelte-headroom';

	const onPin = () => console.log('pin');
</script>

<div id="headroom">
	<Headroom on:pin={onPin} duration="350ms" offset={40} tolerance={0}>
		<header>
			<div>
				<a data-sveltekit-reload href="/"><div class="logo"><Logo /></div></a>
				<button class="btn" type="button" on:click={openDialog}>MENU</button>
				<Nav />
			</div>
		</header>
	</Headroom>
</div>

<Dialog bind:dialog on:closeDialog={closeDialog} />
<slot />

<footer>
	<section>
		<div>
			<nav id="under-nav">
				<ul>
					<li class="link1">
						<a href="https://github.com/wtnbmtk">Github</a>
					</li>
					<li class="link2">
						<a href="https://www.wantedly.com/id/wtnbmtk">Wantedly</a>
					</li>
				</ul>
			</nav>
		</div>
	</section>
	<small class="copyright">© 2023 Motoki Watanabe</small>
</footer>

<style>
	#headroom {
		position: relative;
		z-index: 999;
	}
	header {
		container: header / inline-size;
		margin: 8px 8px 0;
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
		margin-right: 16px;
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
