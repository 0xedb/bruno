<script>
  import { mode } from "../util/store.js";

  const changeColorMode = () => {
    $mode = $mode === "light" ? "dark" : "light";
    console.log($mode);
  };

  $: img = $mode === "light" ? "dark" : "light";
</script>

<style>
:global(body) {
 
}
  div {
    position: relative;
    top: 70px;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    padding: 0px 20px;
  }

  div img {
    height: 30px;
  }

  @media (min-width: 750px) {
    div {
      padding: 0px 50px;
    }
  }
</style>

<div>
  <img src={`/assets/img/${img}.svg`} alt="light" on:click={changeColorMode} />
</div>
