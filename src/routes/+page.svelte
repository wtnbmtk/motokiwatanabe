<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import Logo from '$lib/components/Logo.svelte';
	import profile from '$lib/assets/profile.png';
</script>

<section class="cover">
	<div class="wrap">
		<hgroup>
			<h1>My<br />Portfolio</h1>
		</hgroup>
	</div>
</section>
<section>
	<div class="inner">
		<h2>About</h2>
		<div class="about">
			<div>
				<img src={profile} alt="" />
				<Logo />
			</div>
			<p>
				東京工芸大学卒。同大学在学中からプログラミングスキル、デザインスキルを身に着けてきました。プログラミングは特にWebのフロントエンド領域を得意としていて、コーディングによる様々なデザイン手法に関心があります。その為、フロントエンドのライブラリやフレームワークの扱いに幅広い経験があります。バックエンドにも注力していて、ブログサイトの開発を通じてデータのやり取りの手法について学んでいます。Webプログラミング以外ではVBAを用いた業務効率化ツールの開発や、Pythonを用いたOCRツールの開発経験があります。
			</p>
		</div>
	</div>
</section>
<section>
	<div class="inner">
		<h2>Works</h2>
		<p>Webサイト</p>
		<ul class="work">
			{#each data.articles as article (article._id)}
				<li>
					{article.title}
					<a href={`works/${article.slug}`}
						><img src={article.coverImage.src} alt="" /><svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" /></svg
						></a
					>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.cover {
		position: relative;
		margin: 0 auto 8px;
		padding: 0;
		max-width: revert;
		height: 400px;
		background-image: linear-gradient(
			58.2deg,
			rgba(40, 91, 212, 0.73) -3%,
			rgba(171, 53, 163, 0.45) 49.3%,
			rgba(255, 204, 112, 0.37) 97.7%
		);
	}
	.wrap {
		height: 352px;
		position: relative;
		inset: 48px 0 0;
		display: grid;
	}
	.wrap > * {
		display: grid;
		place-content: center;
	}
	h1 {
		margin: 0;
		font-size: xxx-large;
		text-align: revert;
		color: white;
	}
	h2 {
		text-align: center;
	}
	.about > div {
		display: grid;
		grid-auto-flow: row;
		place-content: center;
	}
	.about img {
		width: 100px;
		border-radius: 50%;
		margin: auto;
	}
	.about :global(svg) {
		height: 50px;
		margin: 16px auto 0;
		fill: #333;
	}
	/* .canvas {
		position: relative;
		margin: auto;
	}
	.canvas::before,
	.canvas::after {
		position: absolute;
		content: '';
		display: block;
		width: 100%;
		height: 100%;
	}
	.canvas::before {
		height: 100%;
		background: repeating-radial-gradient(transparent, #bfcdb2 150px);
		transform: scale(1.1);
	}
	canvas {
		border-radius: 50%;
	} */
	.work {
		display: grid;
		place-content: center;
		grid-template-columns: repeat(auto-fit, minmax(250px, auto));
		gap: 16px;
		list-style: none;
		padding: 0;
		max-width: 782px;
		margin: 0 auto 8px;
	}
	.work li {
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 2;
		gap: 0;
		max-width: 250px;
		place-items: end center;
	}
	.work a {
		display: block;
		max-width: 250px;
		max-height: 250px;
		position: relative;
		overflow: hidden;
		margin: 8px auto 0;
		color: white;
		box-shadow: 2px 2px 4px 0px #ccc;
	}
	.work a::before {
		content: '';
		display: block;
	}
	.work img {
		width: 250px;
		height: 250px;
		object-fit: cover;
		transition: 0.5s ease-in-out;
		transform: scale(1);
	}
	.work a:hover img {
		cursor: pointer;
		transform: scale(1.3);
	}
	.work svg {
		position: absolute;
		inset: auto auto 0 0;
		margin: auto;
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(2px);
	}
	@media (width >= 600px) {
	}
	@media (width >= 800px) {
	}
</style>
