<style>
  header {
    height: 450px;
    width: 100%;
    padding-top: 100px;
  }

  .content {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 400px;
    background: crimson;
  }

  .img {
    border-radius: 100%;
    height: 200px;
    width: 200px;
  }

  @media (min-width: 650px) {
    header {
      height: 650px;
    }

    .content {
      height: 560px;
      flex-flow: row nowrap;
      justify-content: space-around;
    }
    .content {
      width: 100%;
    }

    .img {
      border-radius: 100%;
      height: 400px;
      width: 400px;
    }
  }
</style>

<header id="typescript">
  <div class="content">
    <div class="content">
      <div>
        <div>Full Stack Software Engineer</div>
        <div>
          I design and develop wonderful
          <sup>∞</sup>
          apps
        </div>
      </div>
    </div>
    <div class="content">
      <div>
        <picture>
          <img class="img" src="./assets/img/me.png" alt="me" />
        </picture>
      </div>
    </div>
  </div>
</header>
