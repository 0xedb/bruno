<script>
  export let show = false;
</script>

<style>
  .overlay {
    position: absolute;
    height: 0px;
    width: 0px; 
    background: #fffffffb; 
    top: 60px;
    right: 0px;
    z-index: -3;
    margin: 0px 0px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
  }

  .show {
    width: 100%;
    height: 100vh;
    opacity: 1;
    visibility: unset;
  }

  @media (min-width: 750px) { 
    .show {
      width: 40%;
      height: 40vh;
    }
  }
</style>

<section class={`overlay ${show ? 'show' : null}`}>dasf</section>
