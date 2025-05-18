<script>
	import Logos from '../components/Logos.svelte';
	import Counter from '../components/Counter.svelte';
	import Modal from '../components/Modal.svelte';
	let pageSpeedUrl = '';

	// Reactive statement to set the URL on the client side
	$: if (typeof window !== 'undefined') {
		pageSpeedUrl = `https://pagespeed.web.dev/report?url=${window.location.href}`;
	}
</script>

<svelte:head>
	<title>Vite + Svelte + Bootstrap</title>
	<meta
		name="description"
		content="This template should help get you started developing with Svelte in Vite with bootstrap."
	/>
</svelte:head>

<main class="bg-dark text-bg-dark">
	<div class="container svh-100 d-flex align-items-center py-5">
		<div class="row text-center text-md-start">
			<div class="mb-5 d-flex justify-content-between col-xl-4 col-md-6">
				<Logos />
			</div>

			<div class="mb-3">
				<h1 class="h2">Vite + Svelte + Bootstrap</h1>
			</div>

			<div class="mb-5 col-xl-4 col-md-6">
				<div class="mb-3 d-flex justify-content-between gap-3">
					<Counter />
					<Modal modalId="modal-demo" btnTitle="Modal Demo" modalTitle="Cat's Diary" />
				</div>

				<div>
					<a href={pageSpeedUrl} target="_blank" class="btn btn-light w-100" rel="noreferrer">
						Google PageSpeed Report
					</a>
				</div>
			</div>

			<p>
				Check out
				<a
					href="https://github.com/sveltejs/kit#readme"
					target="_blank"
					class="fw-semibold"
					rel="noreferrer"
				>
					SvelteKit
				</a>
				, the official Svelte app framework powered by Vite!
			</p>

			<p>
				Written by
				<a
					class="link-secondary"
					href="https://saqibtech.com"
					title="Saqib Islam - UI/UX Desginer &amp; Full Stack Developer"
				>
					Saaqi
				</a>
			</p>
		</div>
	</div>
</main>
