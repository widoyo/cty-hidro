
<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
    import "../app.pcss";
</script>
<NavBar />
<div class="container bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700 px-2 sm:px-4 py-2">
    <slot></slot>
</div>  
  <Footer class="my-5">
    <FooterCopyright href="/" by="BBWS Citanduy" year={2024} />
  </Footer>
