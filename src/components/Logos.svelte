<script>
  import svelteLogo from '$lib/assets/svelte.svg';
  import viteLogo from '$lib/assets/vite.svg';
  import saaqiLogo from '$lib/assets/logo.svg';
  import bootstrap from '$lib/assets/bootstrap.svg';

  const logoLinks = [
    {
      link: 'https://vite.dev',
      src: viteLogo,
      alt: 'Vite Logo',
      className: 'vite'
    },
    {
      link: 'https://svelte.dev',
      src: svelteLogo,
      alt: 'svelte Logo',
      className: 'svelte'
    },
    {
      link: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
      src: bootstrap,
      alt: 'Bootstrap Logo',
      className: 'bs'
    },
    {
      link: 'https://saqibtech.com',
      src: saaqiLogo,
      alt: 'Saqib Islam - UI/UX Desginer & Full Stack Developer',
      className: 'saaqi'
    }
  ];
</script>

<!-- This block iterates over an array of logoLinks and generates an anchor (<a>) element for each item. -->
{#each logoLinks as { link, src, alt, className }, index ('logo#' + index)}
  <a href={link} target="_blank" rel="noreferrer">
    <img {src} {alt} class="logo {className}" height="50" />
  </a>
{/each}

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
