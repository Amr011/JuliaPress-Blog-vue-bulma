<template>
  <div class="is-transparent">
    <nav
      class="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </router-link>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item"> Home </router-link>

          <a class="navbar-item"> Technology </a>
          <a class="navbar-item"> Sience </a>
          <a class="navbar-item"> Random </a>
          <router-link to="/contact" class="navbar-item">
            Contact Us
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item mr-5">
            <a href="#">
              <i class="fab fa-facebook fa-lg has-text-danger"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram fa-lg has-text-danger"></i>
            </a>
            <a href="#">
              <i class="fab fa-discord fa-lg has-text-danger"></i>
            </a>
            <a href="#">
              <i class="fab fa-telegram fa-lg has-text-danger"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter fa-lg has-text-danger"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.navbar {
  border-radius: 100%/0 0 14px 14px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.137);
}

.navbar-end .navbar-item a {
  margin-left: 1rem;
  color: rgb(77, 77, 77);
}
.navbar-menu {
  margin-left: 3rem;
  color: rgb(77, 77, 77);
}
.navbar-start .navbar-item {
  border-radius: 8px;
  color: black;
  font-size: 18px;
}
.navbar-start a:hover {
  color: rgb(231, 32, 32);
}
.navbar {
  z-index: 9999999999;
}
</style>
