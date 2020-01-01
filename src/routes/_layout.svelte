<script>
  import Navbar from "../components/Navbar.svelte";
</script>

<style>
  :global(html) {
    height: 100vh;
  }
 
</style>

<main>
  <Navbar />
  <slot />
</main>
