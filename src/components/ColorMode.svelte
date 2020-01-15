<script>
  let isDarkMode = false;
  let imageSrc = "light";
  const changeColorMode = () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      imageSrc = "dark";
    } else {
      imageSrc = "light";
    }
    console.log(isDarkMode);
  };
</script>

<style>
  div {
    position: relative;
    top: 70px;
    z-index: 0;
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
  <img
    src={`/assets/img/${imageSrc}.svg`}
    alt="light"
    on:click={changeColorMode} />
</div>
