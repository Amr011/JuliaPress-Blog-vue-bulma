<template>
  <div class="">
    <footer class="myFooter footer has-background-dark">
      <div class="content has-text-centered has-text-white">
        <h1 class="has-text-white title mb-2">JuliaPress</h1>
        <div class="columns mt-6">
          <div class="column">
            <h6>About Us</h6>
            <p class="has-text-center has-text-white subtitle">
              A purposeful blog that works on proposing scientific ideas and
              topics under the supervision of a team of professional bloggers
            </p>
          </div>
          <div class="column">
            <h2 class="subtitle has-text-white">Important</h2>
            <ul>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
          <div class="column">
            <h2 class="subtitle has-text-white">Important</h2>
            <ul>
              <li><a href="#">Link21321</a></li>
              <li><a href="#">Linksadas</a></li>
              <li><a href="#">Link12321</a></li>
              <li><a href="#">Link1</a></li>
            </ul>
          </div>
          <div class="column">
            <h2 class="subtitle has-text-white">Subscribe</h2>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" />
              <span class="icon is-left">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <a class="button is-danger mt-5 is-outlined">Subscribe</a>
          </div>
        </div>
      </div>
    </footer>
    <div class="has-background-danger has-text-white bottom">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column">
            <p>copyright ©2021</p>
          </div>
          <div class="column has-text-right mr-2 fa-lg">
            <i class="fab fa-facebook mr-2 fa-lg"></i>
            <i class="fab fa-twitter mr-2 fa-lg"></i>
            <i class="fab fa-instagram mr-2 fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.myFooter {
  border-radius: 100%/30px 30px 0 0;
}
.content ul li {
  list-style-type: none;
  text-align: center;
  margin-right: 32px;
}
.content ul li a {
  color: #fff;
  font-size: 18px;
}
.content ul li a:hover {
  color: #ddd;
}
h6 {
  color: #fff !important;
  font-size: 30px !important;
  margin-bottom: 25px !important;
}

.control.has-icons-left .icon.is-left {
  left: 5px;
}

@media (max-width: 768px) {
  .bottom p,
  .has-text-right {
    text-align: center !important;
  }
}
</style>
