<script>
  import Navbar from "./Navbar.svelte";
  import Page from "./Page.svelte";
  import IndexTop from "./IndexTop.svelte";
  import Navaid from "./Navaid.svelte";
</script>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>

<svelte:head>
  <title>theBashShell::Bruno Edoh</title>
</svelte:head>
<Page>
  <Navbar />
  <IndexTop />
  <Navaid />
</Page>
