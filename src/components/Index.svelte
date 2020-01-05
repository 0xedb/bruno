<script>
  import Navaid from "../components/Navaid.svelte";
</script>

<style>
  #index {
    margin-top: 60px;
    height: 100%;
    font-family: "Fira Code", monospace;
  }

  .content {
    flex-flow: column nowrap;
  }

  .description {
    font-size: 24px;
    text-align: center;
  }

  .info {
    font-size: 14px;
  }

  .myself {
    border-radius: 100%;
  }

  .push {
    flex-flow: column wrap;
    max-width: 950px;
    width: 90%;
  }

  .push-title {
    width: 100%;
  }

  @media (min-width: 750px) {
    .content {
      flex-flow: row nowrap;
    }

    .description {
      font-size: 34px;
      padding: 0px 10px;
      font-family: "Fira Code", monospace;
    }

    .info {
      font-size: 18px;
    }
  }
</style>

<Navaid />
<div id="index">
  <section class="content flex-center">
    <div class="description">
      <p>
        Full Stack Developer
        <img src="/assets/img/verify.svg" alt="verified" />
      </p>
      <p class="info">I design and develop wonderful∞ apps</p>
    </div>
    <div>
      <picture>
        <source
          srcset="/assets/img/bruno_edoh_large.png"
          media="(min-width: 750px)" />
        <img
          class="myself"
          src="/assets/img/bruno_edoh_small.png"
          alt="bruno edoh" />
      </picture>
    </div>
  </section>
  <section class="flex-center">
    <div class="push flex-center">
      <span class="push-title">The Push</span>
      <p>
        My interest in computers was piqued at young age. I first learned about
        programming at age 12, reading about the BASIC programming language from
        the appendix of a math book. My boarding school prohibited reading
        unapproved books, so I came very early to school when no one was around
        and read as much as I could. I couldn’t use a computer for practice so I
        wrote code on paper and compiled it myself. I’d solve the programming
        questions and compare with the answers from the book. Additionally, I’d
        give myself feedback on on every question. Around that time, I read
        extensively about computers. Over a decade down the line, I’m happy my
        little self made a great decision to take a career path that gives me
        endless possibilities.
      </p>
    </div>
  </section>
</div>
