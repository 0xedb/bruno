<script>
  import Navbar from "../components/Navbar.svelte";
</script>

<style>
  :global(html) {
    height: 100vh;
  }
</style>

<Navbar />
<main>
  <slot />
</main>
