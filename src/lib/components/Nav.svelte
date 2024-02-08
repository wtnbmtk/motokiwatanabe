<script>
	import { page } from '$app/stores';

	const pages = [
		{ name: 'About', path: '/about' },
		{ name: 'Article', path: '/ariticle' },
		{ name: 'Contact', path: '/contact' },
		{ name: 'Infomation', path: '/information' }
	];
</script>

<nav>
	{#each pages as a}
		{#if a.path === $page.url.pathname}
			<a class="active" href={a.path}>{a.name}</a>
		{:else}
			<a class="passive" href={a.path}>{a.name}</a>
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

<style>
	nav {
		display: none;
		position: absolute;
		inset: 0 16px 0 auto;
	}
	a {
		color: #fff;
	}
	a:not(:last-child):hover::after {
		position: relative;
		content: '';
		display: block;
		border-bottom: solid 2px;
		top: -6px;
	}
	.active::after {
		position: relative;
		content: '';
		display: block;
		border-bottom: solid 2px;
		top: -6px;
	}
	.mail svg {
		position: relative;
		inset: 2px 0;
		margin: auto;
	}

	@media (width >= 600px) {
		nav {
			display: grid;
			grid-auto-flow: column;
			gap: 1rem;
			width: fit-content;
		}
	}
</style>
