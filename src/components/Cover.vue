<template>
  <div>
    <div class="hero-body">
      <img class="MainImg" src="https://unsplash.it/1200/900?random" alt="" />
      <div class="darkThemeImg"></div>
      <div class="container has-text-centered mt-6">
        <div class="column is-6 is-offset-3 margtop">
          <h1 class="title is-1 has-text-white mt-6">JuliaPress</h1>
          <h2 class="subtitle has-text-white mt-3 is-4">
            A purposeful blog that works on proposing scientific ideas and
            topics under the supervision of a team of professional bloggers
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cover",
};
</script>

<style scoped>
.hero-body .MainImg {
  left: 0;
  top: 0;
  width: 100%;
  height: 75%;

  filter: brightness(50%);
  filter: blur(30%);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.37);
  border-radius: 100%/0 0 60px 60px;
}
.margtop {
  margin-top: 7%;
}
.darkThemeImg {
  background: rgba(0, 0, 0, 0.089);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 75%;
  border-radius: 100%/0 0 60px 60px;
}
</style>
