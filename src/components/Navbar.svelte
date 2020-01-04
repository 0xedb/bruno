<script>
  import Overlay from "./Overlay.svelte";
  $: toggleMenu = false;
  const LOGO = `<bruno />`;
  const handleMenuClick = () => {
    toggleMenu = !toggleMenu;
    console.log(toggleMenu);
  };
</script>

<style> 
  nav {
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    min-width: 300px;
    background: #fffffffb;
    box-shadow: 0px 6px 20px #0000000f;
  }

  .nav-content {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    align-items: center;
    padding: 0px 20px;
  }

  span {
    width: 100%;
  }

  span:nth-child(2) {
    display: flex;
    flex-flow: row-reverse nowrap;
  }

  #logo-text {
    font-family: "Caveat", cursive;
    font-size: 30px;
  }

  .menu {
    width: 30px;
    transition: all 0.5s ease;
  }

  .animate {
    transform: rotate(90deg) scale(1.2);
    transition: all 0.5s ease;
  }

  @media (min-width: 750px) {
    .nav-content {
      padding: 0px 50px;
    }
  }
</style>

<nav>
  <div class="nav-content">
    <span id="logo-text">{LOGO}</span>
    <span>
      <img
        src="./assets/img/menu.svg"
        alt="menu"
        on:click={handleMenuClick}
        class={`menu ${toggleMenu ? 'animate' : ''}`} />
    </span>
    <Overlay show={toggleMenu} />
  </div>
</nav>
