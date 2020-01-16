<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import { mode } from "../util/store";
</script>

<style>
  :global(html) {
    /* @import url("https://fonts.googleapis.com/css?family=Caveat&display=swap"); */
    height: 100vh;
    transition: all 0.5s ease;
    scroll-behavior: smooth;
  }
  :global(.flex-center) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(.dark) {
    background: #151515;
    color: #f7f7f7;
    transition: background 0.5s ease, color 0.4s ease;
  }

  :global(.light) {
    background: #f7f7f7;
    color: #626262;
    transition: background 0.5s ease, color 0.4s ease;
  }

  #js {
    position: absolute;
    height: 100vh;
    width: 100%;
    min-width: 300px;
    min-height: 475px;
  }
</style>

<div id="js" class={$mode}>
  <Navbar />
  <slot />
  <!-- <Footer /> -->
</div>
