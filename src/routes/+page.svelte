<script lang="ts">
	import profile from '$lib/assets/2tone_profile.png';
	import Logo from '$lib/components/Logo.svelte';
	import WavePerpendicular from '$lib/components/WavePerpendicular.svelte';
	import WaveLines from '$lib/components/WaveLines.svelte';
</script>

<main id="top">
	<div class="cover">
		<section>
			<div class="wrap">
				<hgroup>
					<h1>Sound<br />Capsule</h1>
				</hgroup>
				<div />
			</div>
		</section>
	</div>
	<section>
		<div class="contain">
			<h2>About</h2>
			<div class="profile">
				<div>
					<div class="profile-img"><Logo /></div>
				</div>
				<p>
					Dig &
					Gatherは世界に溢れる様々な音楽を探索、収集して紹介するサイトです。幅広い年代、ジャンルの音楽を届けることがDig
					&
					Gatheのミッションです。アーティストの歴史や楽曲の情報を整理して紹介する記事を作成していきます。
				</p>
			</div>
		</div>
	</section>
	<section>
		<div class="contain">
			<h2>Article</h2>
			<p>Webサイト</p>
			<ul>
				<li>
					<a href="https://gamers-world.pages.dev/" target="_blank">
						Gamers World<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" /></svg
						></a
					>
				</li>
				<li>
					<a href="https://gallery-site.pages.dev/" target="_blank">
						Photo Gallery<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" /></svg
						></a
					>
				</li>
				<li>
					<a href="https://utsunomiya-apartment-brillante.pages.dev/" target="_blank">
						宇都宮アパートメント「ブリランテ」<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" /></svg
						></a
					>
				</li>
				<li>
					<a href="https://webdachi.com/" target="_blank">
						Webdachi<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" /></svg
						></a
					>
				</li>
			</ul>
		</div>
		<div class="wave">
			<WavePerpendicular />
			<WaveLines />
		</div>
		<div class="to-open">
			<span />
			<span />
			<span />
			<span />
			<span />
		</div>
		<div class="to-close">
			<span />
			<span />
		</div>
	</section>
</main>

<style>
	.wave {
		height: 200px;
	}
	.wave :global(svg) {
		width: 100%;
	}

	/* .cover {
		background-image: linear-gradient(
			58.2deg,
			rgba(40, 91, 212, 0.73) -3%,
			rgba(171, 53, 163, 0.45) 49.3%,
			rgba(255, 204, 112, 0.37) 97.7%
		);
	} */
	.wrap {
		display: grid;
		gap: 2rem;
	}
	.wrap > * {
		display: grid;
		place-content: center;
	}
	.profile > div {
		width: fit-content;
		margin: auto;
	}
	.profile > div :global(svg) {
		width: 100%;
		height: auto;
		height: 60px;
		object-fit: cover;
		margin: auto;
	}
	h1 {
		margin: 0;
		font-size: xxx-large;
		color: white;
	}
	.canvas {
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
	}
	.name {
		margin: 0;
		font-size: 1.4rem;
	}
	.profile-img {
		width: fit-content;
		height: 60px;
	}
	a {
		color: #fff;
	}
	a:hover {
		text-decoration: underline;
	}
	a svg {
		position: relative;
		inset: 4px 0;
		margin: auto;
	}
	.to-open,
	.to-close {
		position: relative;
		height: 26px;
		width: 30px;
	}
	.to-open span,
	.to-close span {
		position: absolute;
		display: block;
		height: 2px;
		width: 30px;
		background: #000;
	}
	.to-open span:nth-child(2),
	.to-open span:nth-child(4) {
		transform: rotate(25deg);
		right: 0px;
		border-radius: 1px;
	}
	.to-open span:first-child,
	.to-open span:nth-child(3),
	.to-open span:last-child {
		width: 28px;
	}
	.to-open span:first-child {
		right: 0;
	}
	.to-open span:nth-child(2) {
		top: 6px;
	}
	.to-open span:nth-child(3) {
		inset: 0;
		width: 26px;
		margin: auto;
	}
	.to-open span:nth-child(4) {
		bottom: 6px;
	}
	.to-open span:last-child {
		bottom: 0;
	}
	.to-close span:first-child {
		inset: 0;
		margin: auto;
		transform: rotate(45deg);
	}
	.to-close span:last-child {
		inset: 0;
		margin: auto;
		transform: rotate(135deg);
	}
	@media (width >= 800px) {
		.wrap {
			grid-template-columns: auto auto;
		}
		.profile > div {
		}
	}
</style>
