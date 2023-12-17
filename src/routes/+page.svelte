<script>
	import profile from '$lib/assets/2tone_profile.png';
	import Logo from '$lib/components/Logo.svelte';
</script>

<main>
	<section class="cover">
		<canvas id="glcanvas" width="100vw" height="100vh" tabindex="1" />
		<div class="filter">
			<hgroup class="text">
				<h1>This<br />Creativity<br />Is True.</h1>
				<p>この創造性は真実である。<br />作品は一人の感性から生み出された。</p>
			</hgroup>
			<div />
		</div>
	</section>
	<section class="contain">
		<div>
			<h2>PROFILE</h2>
			<img class="profile-img" src={profile} alt="profile" />
			<div class="name"><Logo /></div>
			<div>
				<h4>Webエンジニア：モトキ</h4>
				<p>
					東京工芸大学卒。同大学在学中にWeb開発のスキルを身に付け始める。現在では、HTML、CSS、JavaScriptをはじめ、Next.jsやGitなどのスキルを身に付け、効率的なWeb開発を得意としている。また、UI/UXデザインやSEOの知識を持っており、ユーザーが使いやすく、魅力的なWebサイト制作が行える。実績としては制作依頼を通して実践的なWeb開発の経験を積んでおり、ユーザーファーストな開発で評価されてきた。
				</p>
			</div>
		</div>
	</section>
	<section class="contain">
		<div>
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
		background-image: url('lib/assets/bg-img-1.jpeg');
		background-size: cover;
		padding: 0;
		color: white;
		max-width: unset;
		margin: 0;
	}
	.filter {
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(2px);
		display: grid;
		place-content: center;
		padding: 1rem;
	}
	.profile-img {
		width: 200px;
		margin: auto;
	}
	.name {
		width: 200px;
		margin: auto;
	}
	a {
		color: #fff;
	}
	@media (width >= 800px) {
		.filter {
			padding: 1rem 2rem;
			grid-template-columns: 1fr 1fr;
		}
		.filter > * {
			display: grid;
			place-content: center;
		}
	}
</style>
