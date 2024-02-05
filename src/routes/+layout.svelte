<script lang="ts">
	export const prerender = true;
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<slot />

<footer>
	<section>
		<div>
			<nav id="under-nav">
				<ul>
					<li class="link1">
						<a href="https://github.com/wtnbmtk">Github</a>
					</li>
					<li class="link2">
						<a href="https://www.wantedly.com/id/wtnbmtk">Wantedly</a>
					</li>
				</ul>
			</nav>
		</div>
	</section>
	<small class="copyright">© 2023 Motoki Watanabe</small>
</footer>

<style>
</style>
