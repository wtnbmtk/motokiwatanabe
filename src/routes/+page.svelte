<script lang="ts">
	import profile from '$lib/assets/2tone_profile.png';
	import Logo from '$lib/components/Logo.svelte';
</script>

<main>
	<div class="cover">
		<section>
			<div class="wrap">
				<hgroup>
					<h1>This<br />Creativity<br />Is True.</h1>
				</hgroup>
				<div class="canvas">
					<canvas id="glcanvas" width="300px" height="300px" />
				</div>
			</div>
		</section>
	</div>
	<section>
		<div class="contain">
			<h2>PROFILE</h2>
			<div class="wrap">
				<div class="profile-left">
					<img class="profile-img" src={profile} alt="profile" />
					<div class="name"><Logo /></div>
				</div>
				<div>
					<h4>Webエンジニア：モトキ</h4>
					<p>
						東京工芸大学卒。同大学在学中にWeb開発のスキルを身に付け始める。現在では、HTML、CSS、JavaScriptをはじめ、Next.jsやGitなどのスキルを身に付け、効率的なWeb開発を得意としている。また、UI/UXデザインやSEOの知識を持っており、ユーザーが使いやすく、魅力的なWebサイト制作が行える。実績としては制作依頼を通して実践的なWeb開発の経験を積んでおり、ユーザーファーストな開発で評価されてきた。
					</p>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="contain">
			<h2>PORTFOLIO</h2>
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
	</section>
</main>

<style>
	.cover {
		background-image: linear-gradient(
			58.2deg,
			rgba(40, 91, 212, 0.73) -3%,
			rgba(171, 53, 163, 0.45) 49.3%,
			rgba(255, 204, 112, 0.37) 97.7%
		);
	}
	.wrap {
		display: grid;
		gap: 2rem;
	}
	.wrap > * {
		display: grid;
		place-content: center;
	}
	h1 {
		margin: 0;
		font-size: xxx-large;
		color: white;
	}
	canvas {
		position: relative;
		aspect-ratio: 1/1;
		width: 100%;
		height: auto;
		max-width: 400px;
		max-height: 400px;
		border-radius: 50%;
	}
	.profile-left {
		width: 200px;
		margin: auto;
	}
	.profile-img {
		width: 150px;
		margin: 0 auto 1rem;
	}
	a {
		color: #000;
	}
	@media (width >= 800px) {
		.wrap {
			grid-template-columns: auto auto;
		}
	}
</style>
