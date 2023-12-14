<script lang="ts">
	export const prerender = true;
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import Logo from '$lib/components/Logo.svelte';

	let dialog: HTMLDialogElement;

	function openDialog() {
		dialog.showModal();
		dialog.addEventListener('click', function (/** @type {{ target: any; }} */ event) {
			if (event.target === dialog) {
				dialog.close();
			}
		});
	}

	function closeDialog() {
		dialog.close();
	}

	// @ts-ignore
	import Headroom from 'svelte-headroom';

	const onPin = () => console.log('pin');
</script>

<div id="headroom">
	<Headroom on:pin={onPin} duration="350ms" offset={50} tolerance={0}>
		<header>
			<div>
				<a href="/"><div class="logo"><Logo /></div></a>
				<button class="btn" type="button" on:click={openDialog}>MENU</button>
				<Nav />
			</div>
		</header>
	</Headroom>
</div>

<Dialog bind:dialog on:closeDialog={closeDialog} />
<div class="margin" />
<div class="bg" />
<slot />

<footer>
	<section>
		<div>
			<nav id="under-nav">
				<ul>
					<li class="link1">
						<a href="https://lin.ee/VTOX579">LINE</a>
					</li>
					<li class="link2">
						<a href="https://twitter.com/webdachi">𝕏</a>
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
		margin: 4px 4px 0;
	}
	header > div {
		max-width: 800px;
		background: rgba(255, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		height: 50px;
		line-height: 50px;
		border-radius: 25px;
		margin: auto;
		box-shadow: 2px 4px 4px 0px #222;
	}
	header > div > a {
		display: block;
		height: 50px;
		width: fit-content;
	}
	.btn {
		display: block;
		position: absolute;
		inset: 0 8px 0 auto;
		height: 50px;
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: #000;
		font-family: inherit;
	}
	.margin {
		height: 50px;
		background: black;
	}

	@media (width >= 800px) {
		.btn {
			display: none;
		}
	}
</style>
