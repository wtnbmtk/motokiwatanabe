<svelte:head>
	<title>Newt・SvelteKitフォーム</title>
	<meta name="description" content="NewtとSvelteKitを利用した問い合わせフォームです" />
</svelte:head>

<section>
	<div class="inner">
		<h1>CONTACT</h1>
		<form action="https://webdachi.form.newt.so/v1/pTA-JbU2n" method="post">
			<label for="name">Name</label>
			<input id="name" name="name" size={80} />
			<label for="email">Email</label>
			<input id="email" name="email" type="email" size={80} />
			<label for="message">Message</label>
			<textarea id="message" name="message" rows={10} cols={100} />
			<button type="submit">Submit</button>
		</form>
	</div>
</section>

<style>
	label:nth-child(n + 2) {
		display: block;
		margin: 1rem 0 0;
	}
	button {
		position: relative;
		font-size: 1rem;
		margin: 1rem 0 8px;
	}
	button::before {
		content: '';
		display: block;
		position: absolute;
		bottom: -2px;
		height: 1px;
		width: 100px;
		background-color: #000;
	}
	button::after {
		content: '';
		display: block;
		position: absolute;
		bottom: -3px;
		left: 100px;
		height: 1px;
		width: 30px;
		background-color: #000;
		transform-origin: 0% 0%;
		transform: rotate(-150deg);
	}
	.mail {
		color: #333;
	}
	.mail svg {
		position: relative;
		inset: 2px 0;
		margin: auto;
	}
</style>
