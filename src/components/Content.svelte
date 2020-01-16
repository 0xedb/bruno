<script>
  import { onMount } from "svelte";
  import Swiper from "swiper";

  onMount(() => {
    new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      direction: "vertical",
      slidesPerView: 1,
      paginationClickable: true,
      mousewheel: true,
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
  }

  ::-webkit-scrollbar {
    display: none;
  }
  .swiper-pagination {
    height: 20px;
    width: 20px;
    background: blue;
    position: fixed;
    top: 42%;
    right: 2%;
  }
</style>

<section class="swiper-container">
  <div class="swiper-wrapper">
    <slot />
  </div>
  <div class="swiper-pagination" />
</section>
