<script>
	import svelteLogo from './assets/svelte.svg';
	import viteLogo from './assets/vite.svg';
	import saaqiLogo from './assets/logo.svg';
	import bootstrap from './assets/bootstrap.svg';
	import Counter from './components/Counter.svelte';

	const logoLinks = [
		{
			link: 'https://vite.dev',
			img: viteLogo,
			alt: 'Vite Logo',
			className: 'vite'
		},
		{
			link: 'https://svelte.dev',
			img: svelteLogo,
			alt: 'svelte Logo',
			className: 'svelte'
		},
		{
			link: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
			img: bootstrap,
			alt: 'Bootstrap Logo',
			className: 'bs'
		},
		{
			link: 'https://saqibtech.com',
			img: saaqiLogo,
			alt: 'Saqib Islam - UI/UX Desginer & Full Stack Developer',
			className: 'saaqi'
		}
	];
</script>

<main class="bg-dark text-light">
	<div class="container svh-100 d-flex align-items-center py-5">
		<div class="row">
			<div
				class="d-flex flex-row flex-wrap justify-content-md-start justify-content-center gap-md-5 gap-3 mb-5"
			>
				<!-- This block iterates over an array of logoLinks and generates an anchor (<a>) element for each item. -->
				{#each logoLinks as { link, img, alt, className }, index ('logo#' + index)}
					<a href={link} target="_blank" rel="noreferrer">
						<img src={img} class="logo {className}" {alt} height="50px" width="50px" />
					</a>
				{/each}
			</div>

			<div class="mb-3">
				<h1 class="h2">Vite + Svelte + Bootstrap</h1>
			</div>

			<div class="mb-5">
				<Counter />
			</div>

			<p>
				Check out
				<a
					href="https://github.com/sveltejs/kit#readme"
					target="_blank"
					class="text-decoration-underline fw-bold"
					rel="noreferrer"
				>
					SvelteKit
				</a>
				, the official Svelte app framework powered by Vite!
			</p>

			<p>
				Written by
				<a
					class="text-decoration-underline link-warning"
					href="https://saqibtech.com"
					title="Saqib Islam - UI/UX Desginer &amp; Full Stack Developer"
				>
					Saaqi
				</a>
			</p>
		</div>
	</div>
</main>

<style>
	.logo {
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.logo.saaqi:hover {
		filter: drop-shadow(0 0 2em #374162);
	}
	.logo.bs:hover {
		filter: drop-shadow(0 0 2em #007bff);
	}
</style>
