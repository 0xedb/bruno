<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import ColoMode from "../components/ColorMode.svelte";
</script>

<style>
  :global(html) {
    @import url("https://fonts.googleapis.com/css?family=Caveat&display=swap");
    height: 100vh;
    transition: all 0.5s ease;
    scroll-behavior: smooth;
  }
  :global(.flex-center) {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(.dark) {
    background: #151515 !important;
  }

  :global(.light) {
    background: unset !important;
  }
</style>

<div id="js">
  <main>
    <Navbar />
    <ColoMode />
    <slot />
  </main>
  <Footer />
</div>
