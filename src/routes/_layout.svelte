<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  :global(html) {
    height: 100vh;
  }
</style>

<main>
  <Navbar />
  <slot />
  <Footer />
</main>
