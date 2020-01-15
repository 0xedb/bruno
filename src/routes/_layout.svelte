<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import ColoMode from "../components/ColorMode.svelte";
</script>

<style>
  :global(html) {
    height: 100vh;
  }
</style>

<main>
  <Navbar />
  <ColoMode />
  <slot />
</main>
<Footer />
