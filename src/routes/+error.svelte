<script lang="ts">
	import { page } from '$app/state';
	import { emojis } from './emojis';
	// Reactive statement to set the URL on the client side
	let pageURL = '';
	$: if (typeof window !== 'undefined') {
    pageURL = `${window.location.origin}`;
	}
</script>

<svelte:head>
	<title>{page.status} {page.error?.message ?? 'Unknown error'}</title>
	<meta name="description" content="{page.status} {page.error?.message ?? 'Unkonw error'}" />
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<div id="notfound">
	<div class="notfound">
		<div class="notfound-404">
			<h1>Oops!</h1>
		</div>
		<span style="font-size: 3em">
			{emojis[page.status as keyof typeof emojis] ?? emojis[500]}
		</span>
		<h2>{page.status} {page.error?.message ?? 'Unknown error'}</h2>
		<p>
			Uh-oh! It seems the page you're looking for has either been removed, relocated, or may not
			exist at all. Before you venture further, double-check the URL in your browser. If all seems
			well, consider navigating back to our homepage to explore anew. Thanks for your understanding!
		</p>

		<a href={pageURL}>Go To Homepage</a>
	</div>
</div>

<style>
	* {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	#notfound {
		height: 100svh;
		display: grid;
		place-content: center;
	}

	.notfound {
		max-width: 600px;
		width: 100%;
		text-align: center;
	}

	.notfound-404 h1 {
		font-size: 4rem;
		margin: 0 0 1rem 0;
	}

	.notfound p {
		line-height: 1.5rem;
		font-size: 1rem;
	}

	.notfound a {
		font-size: 1rem;
		text-decoration: none;
		text-transform: uppercase;
		background: #333;
		display: inline-block;
		padding: 1rem 2rem;
		border-radius: 1rem;
		color: #fff;
		font-weight: 700;
		box-shadow: 0 4px 15px -5px #333;
	}
</style>
