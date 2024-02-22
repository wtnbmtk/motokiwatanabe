<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.article?.title}</title>
	<meta name="description" content="投稿詳細ページです" />
</svelte:head>

<section>
	<h1>WORKS</h1>
	<img src={data.article?.coverImage.src} alt="" />
	<h2>{data.article?.title}</h2>
	<div>{@html data.article?.body}</div>
</section>

<style>
	img {
		box-shadow: 2px 2px 4px 0px #ccc;
	}
</style>
