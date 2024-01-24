<script lang="ts">
	import profile from '$lib/assets/2tone_profile.png';
	import Logo from '$lib/components/Logo.svelte';
	import Wave8 from '$lib/components/Wave8.svelte';
	import Wave4 from '$lib/components/Wave4.svelte';
</script>

<main>
	<div class="cover">
		<section>
			<div class="wrap">
				<hgroup>
					<h1>Sound<br />Capsule</h1>
				</hgroup>
				<div class="canvas">
					<canvas id="glcanvas" width="300px" height="300px" />
				</div>
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
					<a href="https://gamers-world.pages.dev/" target="_blank"> Gamers World </a>
					<span class="material-icons">open_in_new</span>
				</li>
				<li>
					<a href="https://gallery-site.pages.dev/" target="_blank"> Photo Gallery </a>
					<span class="material-icons">open_in_new</span>
				</li>
				<li>
					<a href="https://utsunomiya-apartment-brillante.pages.dev/" target="_blank">
						宇都宮アパートメント「ブリランテ」
					</a>
					<span class="material-icons">open_in_new</span>
				</li>
				<li>
					<a href="https://webdachi.com/" target="_blank"> Webdachi </a>
					<span class="material-icons">open_in_new</span>
				</li>
			</ul>
		</div>
		<div class="wave">
			<Wave4 />
			<Wave8 />
		</div>
	</section>
</main>

<style>
	.wave {
		position: relative;
		display: grid;
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
	.profile {
	}
	.profile > div {
		width: fit-content;
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
	@media (width >= 800px) {
		.wrap {
			grid-template-columns: auto auto;
		}
		.profile > div {
		}
	}
</style>
