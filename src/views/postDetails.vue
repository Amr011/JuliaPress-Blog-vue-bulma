<template>
  <div>
    <Header />
    <PostDetailsCover />
    <section class="hero myHero">
      <div class="hero-body">
        <div class="container">
          <section class="section">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <div class="content is-medium">
                  <h2 class="subtitle is-5 has-text-danger mt-1">Technology</h2>
                  <h1 class="title">Getting Started</h1>
                  <p>
                    This is a starter template for creating a beautiful,
                    customizable blog with minimal effort. You’ll only have to
                    change a few settings and you’re ready to go. As with all
                    Jigsaw sites, configuration settings can be found in config
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="column mb-2">
            <div class="column is-8 is-offset-2">
              <figure class="image is-16by9">
                <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="" />
              </figure>
              <div class="mt-6 mb-6">
                <p class="title">Lorem ipsum dolor sit.</p>
                <div class="">
                  <p class="subtitle">
                    Lorem <small>ipsum dolor sit amet,</small> consectetur
                    adipisicing elit. Enim, exercitationem?Lorem
                    <q><u>ipsum dolor</u></q> sit amet consectetur adipisicing
                    elit. Ab, perspiciatis?Lorem ipsum dolor sit amet
                    consectetur <i>adipisicing elit.</i> Dolore unde atque
                    incidunt optio adipisci excepturi nostrum nulla magnam sequi
                    maiores ab, a perspiciatis
                    <a><u>laborum delectus neque nobis!</u></a> Molestias, odio
                    porro?Lorem
                    <strong
                      >ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                      qui repellendus</strong
                    >
                    non asperiores dolorem placeat rem. Dolor qui doloremque
                    officiis, aspernatur similique consectetur perferendis quam
                    quas, reprehenderit, aut ducimus saepe reiciendis
                    <code
                      >perspiciatis iure ipsam? Culpa tempore quod esse
                      inventore totam?</code
                    >
                  </p>
                  <figure class="image is-16by9">
                    <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="" />
                  </figure>
                  <Share />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostDetailsCover from "../components/PostDetailsCover";
import Share from "../components/Share";
export default {
  name: "postDetails",
  components: { PostDetailsCover, Header, Footer, Share },
};
</script>

<style>
.myHero {
  margin-top: 300px;
}
.postDetailsImg {
  left: 0;
  top: 0;
  width: 100%;
  height: 67%;
  background: rgba(3, 0, 0, 0.418);
  filter: brightness(70%);
}
@media (min-width: 375 x 812) {
  .postDetailsImg {
    height: 67%;
  }
}
</style>
