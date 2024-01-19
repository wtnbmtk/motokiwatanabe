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
			<div class="profile">
				<div>
					<img class="profile-img" src={profile} alt="profile" />
					<div>
						<small>web engineer</small>
						<p class="name">Motoki Watanabe</p>
					</div>
				</div>
				<p>
					私はWebエンジニアリングのスキルを有した個人開発者です。ルーツは大学時代に取り組んだヒューマンインターフェースの研究活動で、研究はWebサイトのインターフェース最適化を行っていました。この活動から私のWebエンジニアリングが始まり、現在の個人開発に繋がっていきました。得意としているのはフロントエンド領域で、開発では人間の五感に響くインターフェース構築を心掛けています。また、最先端の技術を使用することでハイパフォーマンスな成果物を得ることにも注力しています。私が目指している目標は、ユーザーファーストな成果物を生み出すことで社会に貢献することです。その為に私はWebエンジニアリングのスキルを磨いています。
				</p>
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
		display: grid;
		gap: 2rem;
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
	.name {
		margin: 0;
		font-size: 1.4rem;
	}
	.profile-img {
		width: 50px;
		height: 50px;
		object-fit: cover;
		border-radius: 50%;
		margin: auto;
	}
	a {
		color: #fff;
	}
	@media (width >= 800px) {
		.wrap {
			grid-template-columns: auto auto;
		}
		.profile > div {
			grid-template-columns: repeat(2, auto);
			place-content: start;
		}
	}
</style>
