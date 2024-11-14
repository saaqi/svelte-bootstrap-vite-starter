<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div class="container vh-100 d-flex align-items-center">
    <div class="row">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} class="logo" alt="Vite Logo" />
        </a>
        <a href="https://svelte.dev" target="_blank" rel="noreferrer">
          <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
        </a>
      </div>

      <div class="col-12 mb-3">
        <h1>Vite + Svelte</h1>
      </div>

      <div class="col-12 mb-5">
        <Counter />
      </div>

      <p>
        Check out <a
          href="https://github.com/sveltejs/kit#readme"
          target="_blank"
          rel="noreferrer">SvelteKit</a
        >, the official Svelte app framework powered by Vite!
      </p>

      <p class="read-the-docs">
        Click on the Vite and Svelte logos to learn more
      </p>

      <p>Written by 
        <a class="text-decoration-underline" href="https://saqibtech.com" title="Saqib Islam - UI/UX Desginer &amp; Full Stack Developer">
          Saaqi
        </a>
      </p>

    </div>
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
