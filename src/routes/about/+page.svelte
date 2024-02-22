<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import profile from '$lib/assets/profile.png';
</script>

<section>
	<div class="inner">
		<h1>ABOUT</h1>
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

<style>
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
</style>
