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
	/* FOOTER*/
	footer {
		container: footer / inline-size;
	}
	#under-nav {
		padding: 0;
		width: fit-content;
		margin: auto;
	}
	#under-nav li {
		display: inline-block;
		width: 110px;
		text-align: center;
	}
	footer #under-nav a {
		position: relative;
		display: block;
		color: black;
		text-decoration: none;
		outline: none;
		overflow: hidden;
		transition: all 0.5s;
		height: 50px;
		line-height: 50px;
	}
	footer #under-nav a::before,
	footer #under-nav a::after {
		position: absolute;
		display: block;
		content: '';
		width: 100%;
		height: 100%;
		transition: all 0.5s;
	}
	footer #under-nav a::before {
		top: 0;
		left: 0;
		border-top: 2px solid black;
		border-left: 2px solid black;
	}
	footer #under-nav a::after {
		right: 0;
		bottom: 0;
		border-right: 2px solid black;
		border-bottom: 2px solid black;
	}
	footer #under-nav .link1 a:hover {
		background-color: #000;
		color: white;
		transition: all 0.7s;
	}
	footer #under-nav .link2 a:hover {
		background-color: #21bddb;
		color: white;
		transition: all 0.7s;
	}
	footer #under-nav .link3 a:hover {
		background-color: #7215ec;
		color: white;
		transition: all 0.7s;
	}
	footer #under-nav a:hover::before,
	footer #under-nav a:hover::after {
		width: 0;
		height: 0;
		opacity: 0;
		transition: all 0.7s;
	}
	.copyright {
		display: block;
		text-align: center;
		margin-bottom: 8px;
	}
	@container footer (min-width: 400px) {
		.contain {
			max-width: 400px;
		}
		#under-nav li {
			display: inline-block;
		}
		#under-nav li:first-child {
			margin-left: 0;
		}
		#under-nav li:last-child {
			margin-right: 0;
		}
	}
	@container footer (min-width: 800px) {
		.contain {
			max-width: 800px;
		}
	}
</style>
