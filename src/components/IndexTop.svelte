<script>
  import { useLozad } from "../utils/lozad";
  useLozad("myself");
</script>

<style>
  header {
    width: 100%;
    height: 460px;
    background: wheat;
    padding-top: 60px;
  }

  .content {
    padding: 30px;
  }

  .me {
    width: 300px;
    height: 300px;
    background: rgb(179, 245, 225);
  }

  #myself { 
    width: 300px;
    height: 300px;
    object-fit: contain;
    object-position: center;
    clip-path: circle(50% at 50% 50%);
  }

  @media (min-width: 650px) {
    header {
      height: 800px;
    }

    #myself {
      width: 450px;
      height: 450px;
    }

    .content {
      padding: 50px;
    }
  }
</style>

<header id="typescript">
  <section class="content">
    <div>
      <div>Full Stack Software Engineer</div>
      <div>
        I design and develop wonderful∞ apps
        <img src="./assets/img/verify.svg" alt="verified" />
      </div>
    </div> 
      <picture class="lozad" data-alt="bruno image">
        <source
          srcset="./assets/img/personal_desk.png"
          media="(min-width: 650px)" />
        <source
          srcset="./assets/img/personal_mob.png"
          media="(min-width: 0px)" />
        <img id="myself" src="" alt="bruno image" />
      </picture>
    

  </section>
</header>
