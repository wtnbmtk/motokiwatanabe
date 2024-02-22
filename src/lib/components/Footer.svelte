<footer>
	<section>
		<div>
			<nav id="under-nav">
				<ul>
					<li class="link1">
						<a href="https://github.com/wtnbmtk">Github</a>
					</li>
				</ul>
			</nav>
		</div>
	</section>
	<small class="copyright">© 2024 Motoki Watanabe</small>
</footer>

<style>
	/* FOOTER*/
	footer {
	}
	nav {
		padding: 0;
		width: fit-content;
		margin: auto;
	}
	ul {
		padding: 0;
		list-style: none;
	}
	a {
		position: relative;
		display: block;
		width: 100px;
		color: #333;
		text-decoration: none;
		text-align: center;
		transition: all 0.5s;
		height: 50px;
		line-height: 50px;
	}
	a::before,
	a::after {
		position: absolute;
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		transition: all 0.5s;
		z-index: -1;
	}
	a::before {
		top: 0;
		left: 0;
		border-top: 2px solid #333;
		border-left: 2px solid #333;
	}
	a::after {
		right: 0;
		bottom: 0;
		border-right: 2px solid #333;
		border-bottom: 2px solid #333;
	}
	a:hover {
		background-color: #333;
		color: white;
		transition: all 0.7s;
	}
	a:hover::before,
	a:hover::after {
		width: 0;
		height: 0;
		opacity: 0;
		transition: all 0.5s;
	}
	a {
		display: block;
		color: #333;
		cursor: pointer;
	}
	.copyright {
		display: block;
		text-align: center;
		margin-bottom: 8px;
	}
	@media (width >= 600px) {
		li {
			display: inline-block;
		}
		li:first-child {
			margin-left: 0;
		}
		li:last-child {
			margin-right: 0;
		}
	}
</style>
