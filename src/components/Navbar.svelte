<script>
  $: toggleMenu = false;

  const handleMenuClick = () => {
    toggleMenu = !toggleMenu;
    console.log(toggleMenu);
    import('./App.svelte').then(res => console.log(res))
  };
</script>

<style>
  nav {
    height: 100px;
    background: #f5deb3;
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
    width: 40px;
    transition: all 0.5s ease;
  }

  .animate {
    transform: rotate(90deg) scale(1.3);
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
      width: 52px;
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
  </div>
</nav>
