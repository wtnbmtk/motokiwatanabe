<script lang="ts">
	export const prerender = true;
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<slot />
<Footer />

<nav>
	<button>MENU</button>
	<div>
		<a href="https://webdachi.com/" target="_blank" style="--index: 0;"
			><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
				><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" /></svg
			>a</a
		>
		<a href="https://webdachi.com/" target="_blank" style="--index: 1;"
			><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
				><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" /></svg
			>b</a
		>
		<a href="https://webdachi.com/" target="_blank" style="--index: 2;"
			><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
				><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" /></svg
			>c</a
		>
		<a href="https://webdachi.com/" target="_blank" style="--index: 3;"
			><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
				><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" /></svg
			>d</a
		>
		<a href="https://webdachi.com/" target="_blank" style="--index: 4;"
			><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
				><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" /></svg
			>e</a
		>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		inset: auto 0 8px;
		z-index: 1;
	}
	nav button {
		position: absolute;
		inset: auto 0 0;
		margin: auto;
		font-size: 0.5em;
		width: 40px;
		height: 40px;
		border: none;
		border-radius: 50%;
		color: white;
		background: #29323c;
	}
	nav > div {
		position: absolute;
		inset: auto 0 0;
		margin: auto;
		width: fit-content;
	}
	nav > div a {
		position: absolute;
		margin: auto;
		text-align: center;
		color: white;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		display: grid;
		place-content: center;
		cursor: pointer;
		transition: background-color 0.3s;
		--angle: calc(200deg + calc(140deg / 4 * var(--index)));
		--x: calc(cos(var(--angle)) * 100px);
		--y: calc(sin(var(--angle)) * 100px);
		translate: calc(var(--x) - 50%) calc(var(--y) - 50%);
	}
	nav > div a:hover {
		background-color: #dcc9f7;
	}
</style>
