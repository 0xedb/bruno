<style>
  .nav-aid,
  .nav-aid a {
    visibility: hidden;
    opacity: 0;
    display: none;
    transition: all 0.5s ease;
  }

  @media (min-width: 650px) {
    .nav-aid,
    .nav-aid a {
      visibility: unset;
      opacity: 1;
      display: block;
    }
    .nav-aid {
      position: fixed;
      top: 42%;
      right: 2%;
    }
    .nav-aid a {
      width: 25px;
      height: 25px;
      border-radius: 100%;
      background: #c7c7c7;
      margin: 8px;
    }

    .aid:hover {
      background: #111010;
      clip-path: polygon(
        50% 0%,
        90% 20%,
        100% 60%,
        75% 100%,
        25% 100%,
        0% 60%,
        10% 20%
      );
      transform: scale(1.2);
      transition: all 0.5s ease;
    }
  }
</style>

<div class="nav-aid">
  <a class="aid" href="#typescript" />
  <a class="aid" href="#" />
  <a class="aid" href="#" />
  <a class="aid" href="#" />
</div>
