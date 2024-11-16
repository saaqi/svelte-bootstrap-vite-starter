<script>
  import Logos from './components/Logos.svelte';
  import Counter from './components/Counter.svelte';
  import Modal from './components/Modal.svelte';
</script>

<main>
  <div class="container svh-100 d-flex align-items-center py-5">
    <div class="row text-center text-md-start">
      <div class="mb-5 d-flex gap-3 justify-content-md-start justify-content-center">
        <Logos />
      </div>

      <div class="mb-3">
        <h1 class="h2">Vite + Svelte + Bootstrap</h1>
      </div>

      <div class="mb-5 col-xl-4 col-md-6">
        <div class="mb-3 d-flex justify-content-between gap-3">
          <Counter />
          <Modal />
        </div>

        <div>
          <a
            href="https://pagespeed.web.dev/report?url={window.location.href}"
            target="_blank"
            class="btn btn-light w-100"
            rel="noreferrer"
          >
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
