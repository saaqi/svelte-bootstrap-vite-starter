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
