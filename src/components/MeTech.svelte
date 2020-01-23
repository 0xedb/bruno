<script>
  import Tech from "../components/Tech.svelte";
  import { CONSTANTS } from "../util/constants.js";
  const { technologies } = CONSTANTS;
</script>

<style>
  .all {
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    overflow: visible;
  }
</style>

<div id="typescript" class="swiper-slide all" data-hash="typescript">
  <Tech title="Languages + Core" technology={technologies.languages} />
  <Tech title="Frameworks + Libraries" technology={technologies.frameworks} />
  <Tech title="Tools++" technology={technologies.tools} />
</div>
