<script>
	import { page } from '$app/stores';

	const pages = [
		{ name: 'Home', path: '/' },
		{ name: 'Contact', path: '/contact' },
		{ name: 'Infomation', path: '/information' }
	];
</script>

<nav id="global-nav">
	<ul>
		{#each pages as a}
			{#if a.path === $page.url.pathname}
				<li class="active"><a href={a.path}>{a.name}</a></li>
			{:else}
				<li><a data-sveltekit-reload href={a.path}>{a.name}</a></li>
			{/if}
		{/each}
	</ul>
</nav>
<nav id="headerSNS">
	<ul>
		<li>
			<a href="mailto:wtnbmtk7@gmail.com"><span class="material-icons">mail</span></a>
		</li>
	</ul>
</nav>

<style>
	ul {
		margin: 0;
		padding: 0;
	}
	a {
		text-decoration: none;
		display: inline-block;
		padding: 0 1rem;
		color: #fff;
	}
	a:hover {
		filter: brightness(1.4); /* ホバー時に少し明るくする */
		text-decoration: underline;
	}
	.active a {
		position: relative;
	}
	.active a::after {
		position: relative;
		content: '';
		display: block;
		border-bottom: solid 2px;
		top: -6px;
	}
	#global-nav,
	#headerSNS {
		display: none;
		position: absolute;
	}
	#global-nav {
		inset: 0;
		margin: auto;
	}
	#global-nav ul {
		margin: 0;
	}
	#headerSNS {
		inset: 0 0 0 auto;
	}
	#headerSNS a {
		padding: 0 8px;
	}
	@media (width >= 800px) {
		#global-nav,
		#headerSNS {
			display: block;
			width: fit-content;
		}
		#global-nav ul li,
		#headerSNS ul li {
			display: inline-block;
		}
		#global-nav ul li {
			padding: 0 1rem;
		}
		#headerSNS ul li {
			padding-right: 8px;
		}
	}
</style>
