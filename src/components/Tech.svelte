<script>
  export let technology = {};
  export let title;
</script>

<style>
  .push {
    flex-flow: column wrap;
    max-width: 950px;
    width: 90%;
  }

  .push-title {
    width: 100%;
  }

  .tech {
    width: 25px;
    height: 25px;
    padding: 3px;
  }

  @media (min-width: 750px) {
    .tech {
      width: 40px;
      height: 40px;
      padding: 4px;
    }
  }
</style>

<section class="flex-center">
  <div class="push">
    <p class="push-title">{title}</p>
    <div class="technologies">
      {#each technology as { id, url }, _ (id)}
        <img class="tech" src={url.trim()} alt={id} title={id} />
      {/each}
    </div>
  </div>
</section>
