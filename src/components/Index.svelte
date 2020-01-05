<script>
  import Navaid from "../components/Navaid.svelte";
</script>

<style>
  #index {
    margin-top: 60px;
    height: 100%;
  }

  .content {
    flex-flow: column nowrap;
  }

  .description {
    font-size: 24px;
    text-align: center;
  }

  .info {
    font-size: 18px;
  }

  .myself {
    border-radius: 100%;
  }

  @media (min-width: 750px) {
    .content {
      flex-flow: row nowrap;
    }

    .description {
      font-size: 34px;
      padding: 0px 10px;
      font-family: "Fira Code", monospace;
    }
  }
</style>

<Navaid />
<div id="index">
  <section class="content flex-center">
    <div class="description">
      <p>
        Full Stack Developer
        <img src="/assets/img/verify.svg" alt="verified" />
      </p>
      <p class="info">I design and develop wonderful∞ apps</p>
    </div>
    <div>
      <picture>
        <source
          srcset="/assets/img/bruno_edoh_large.png"
          media="(min-width: 750px)" />
        <img
          class="myself"
          src="/assets/img/bruno_edoh_small.png"
          alt="bruno edoh" />
      </picture>
    </div>
  </section>
</div>
