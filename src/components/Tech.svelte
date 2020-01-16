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
    width: 35px;
    height: 35px;
    padding: 3px;
  }

  .tech:hover{
    transform: scale(1.2)
  }

  @media (min-width: 750px) {
    .tech {
      width: 50px;
      height: 50px;
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
