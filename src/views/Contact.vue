<template>
  <div>
    <Header />

    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-8 is-variable">
            <div class="column is-two-thirds has-text-left">
              <h1 class="title is-1">Contact Us</h1>
              <p class="is-size-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eligendi soluta voluptate facere molestiae consequatur.
              </p>
              <div class="social-media">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  class="button is-light is-large"
                  ><i class="fab fa-facebook-square" aria-hidden="true"></i
                ></a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  class="button is-light is-large"
                  ><i class="fab fa-instagram" aria-hidden="true"></i
                ></a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  class="button is-light is-large"
                  ><i class="fab fa-whatsapp" aria-hidden="true"></i
                ></a>
              </div>
            </div>
            <div class="column is-one-third has-text-left">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input is-medium" type="text" />
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input is-medium" type="text" />
                </div>
              </div>
              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea is-medium"></textarea>
                </div>
              </div>
              <div class="control">
                <button
                  type="submit"
                  class="button is-danger is-fullwidth has-text-weight-medium is-medium"
                >
                  Send Message
                </button>
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

export default {
  name: "Contact",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.input-icon-active-color {
  background-color: rgb(255, 0, 0);
}
.social-media {
  margin-top: 30px;
}

.social-media a {
  margin-right: 10px;
}

.field:not(:last-child) {
  margin-bottom: 20px;
}

@media screen and (min-width: 768px) {
  body {
    padding-top: calc(3.25rem + 20px);
  }

  .navbar {
    padding: 10px 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .hero.is-fullheight {
    min-height: calc(100vh - 6.5rem - 40px);
  }
}
</style>