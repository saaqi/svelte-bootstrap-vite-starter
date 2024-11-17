<script>
  import svelteLogo from '../assets/svelte.svg';
  import viteLogo from '../assets/vite.svg';
  import saaqiLogo from '../assets/logo.svg';
  import bootstrap from '../assets/bootstrap.svg';

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

<!-- This block iterates over an array of logoLinks and generates an anchor (<a>) element for each item. -->
{#each logoLinks as { link, img, alt, className }, index ('logo#' + index)}
  <a href={link} target="_blank" rel="noreferrer">
    <img src={img} class="logo {className}" {alt} height="50px" width="50px" />
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
