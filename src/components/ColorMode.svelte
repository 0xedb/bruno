<script>
  import { mode } from "../util/store.js";
  import { CONSTANTS } from "../util/constants";
  import { onMount } from "svelte";

  onMount(() => {
    const userMode = window.localStorage.getItem(CONSTANTS.mode_key);
    $mode = userMode ? userMode : CONSTANTS.mode;
  });

  const changeColorMode = () => {
    $mode = $mode === "light" ? "dark" : "light";
    window.localStorage.setItem(CONSTANTS.mode_key, $mode);
  };

  $: img = $mode === "light" ? "dark" : "light";
</script>

<style>
  div {
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
  <img
    src={`/assets/img/${img}.svg`}
    alt="light"
    on:click={changeColorMode}
    title={`${img} mode`} />
</div>
