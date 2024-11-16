<script>
  import Logos from './components/Logos.svelte';
  import Counter from './components/Counter.svelte';
  import Modal from './components/Modal.svelte';
</script>

<main class="bg-dark text-bg-dark">
  <div class="container svh-100 d-flex align-items-center py-5">
    <div class="row text-center text-md-start">
      <div class="mb-5 d-flex gap-3 justify-content-md-start justify-content-center">
        <Logos />
      </div>

      <div class="mb-3">
        <h1 class="h2">Vite + Svelte + Bootstrap</h1>
      </div>

      <div class="mb-5">
        <Counter />
        <Modal />
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
