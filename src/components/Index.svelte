<script>
  import Navaid from "../components/Navaid.svelte";
</script>

<style>
  #index {
    margin-top: 60px;
    height: 100%;
  }

  @media (min-width: 750px) {
    .content {
      background: wheat;
    }

    .description {
      font-size: 34px;
      padding: 0px 10px;
      font-family: 'Fira Code', monospace;
    }
  }
</style>

<Navaid />
<div id="index">
  <section class="content flex-center">
    <div class="description">
      <p>
        Full Stack Developer &lt;-
        <img src="/assets/img/verify.svg" alt="verified" />
      </p>
    </div>
    <div>
      <img src="/assets/img/bruno_edoh_small.png" alt="bruno edoh" />
    </div>
  </section>
</div>
