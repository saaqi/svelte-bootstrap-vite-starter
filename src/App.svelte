<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import saaqiLogo from "./assets/logo.svg";
  import Counter from "./lib/Counter.svelte";

  const logoLinks = [
    {
      link: "https://vite.dev",
      img: viteLogo,
      alt: "Vite Logo",
      className: "vite",
    },
    {
      link: "https://svelte.dev",
      img: svelteLogo,
      alt: "svelte Logo",
      className: "svelte",
    },
    {
      link: "https://saqibtech.com",
      img: saaqiLogo,
      alt: "Saqib Islam - UI/UX Desginer & Full Stack Developer",
      className: "saaqi",
    },
  ].map((item, index) => {
    return {
      ...item,
      id: `logos-${index}`,
    };
  });
</script>

<main>
  <div class="container vh-100 d-flex align-items-center">
    <div class="row">
      <div>
        {#each logoLinks as { link, img, alt, className, id }, index (id)}
          <a href={link} target="_blank" rel="noreferrer">
            <img src={img} class="logo {className}" alt={alt} />
          </a>
        {/each}
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

      <p>
        Written by
        <a
          class="text-decoration-underline"
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
  .logo.saaqi:hover {
    filter: drop-shadow(0 0 2em #374162);
  }
  .read-the-docs {
    color: #888;
  }
</style>
