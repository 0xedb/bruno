<script>
  import Overlay from "./Overlay.svelte";
  $: toggleMenu = false;

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
    background: linear-gradient(45deg, #ce5c5c, #ffeb3b);
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

  #logo {
    width: 100px;
  }

  .menu {
    width: 30px;
    transition: all 0.5s ease;
  }

  .animate {
    transform: rotate(90deg) scale(1.2);
    transition: all 0.5s ease;
  }

  @media (min-width: 650px) {
    .nav-content {
      padding: 0px 50px;
    }

    #logo {
      width: 130px;
    }

    .menu {
      width: 42px;
    }
  }
</style>

<nav>
  <div class="nav-content">
    <span>
      <img id="logo" src="./assets/img/bruno.svg" alt="logo" />
    </span>
    <span>
      <img
        src="./assets/img/menu.svg"
        alt="menu"
        on:click={handleMenuClick}
        class={`menu ${toggleMenu ? 'animate' : null}`} />
    </span>
    <Overlay show={toggleMenu} />
  </div>
</nav>
