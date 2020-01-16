<script>
  import { onMount } from "svelte";
  import Swiper from "swiper";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
        // type: "progressbar"
      },
      direction: "vertical",
      slidesPerView: 1,
      paginationClickable: true,
      keyboard: { enabled: true },
      mousewheel: {
        releaseOnEdges: true
      },
      parallax: true,
      speed: 700
    });
  });
</script>

<style>
  .swiper-container {
    width: 100%;
    height: calc(100vh - 60px);
    padding-top: 60px;
    -ms-overflow-style: none;
    overflow: hidden;
    position: relative;
    z-index: 2;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  /* .swiper-pagination {
    height: 20px;
    width: 20px;
    background: blue;
  
    top: 42%;
    right: 2%;
  } */
</style>

<section class="swiper-container">
  <div class="swiper-wrapper">
    <slot />
    <Footer />
  </div>
  <div class="swiper-pagination" />
</section>
