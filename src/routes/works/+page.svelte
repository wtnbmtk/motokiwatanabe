<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Newt・SvelteKitブログ</title>
	<meta name="description" content="NewtとSvelteKitを利用したブログです" />
</svelte:head>

<section>
	<h1>WORKS</h1>
	<ul>
		{#each data.articles as article (article._id)}
			<li>
				<a href={`works/${article.slug}`}>{article.title}</a>
			</li>
		{/each}
	</ul>
</section>

<style>
</style>
