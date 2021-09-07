<template>
  <div>
    <div class="hero-body">
      <img class="MainImg" src="https://unsplash.it/1200/900?random" alt="" />
      <div class="darkThemeImg"></div>
      <div class="container has-text-centered mt-6">
        <div class="column is-6 is-offset-3 margtop">
          <h1 class="title is-1 has-text-dark mt-6">Getting Started</h1>
          <h2 class="subtitle has-text-dark mt-3 is-4">
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

<style>
.hero-body .MainImg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 65%;

  filter: brightness(100%);
  filter: blur(30%);
  box-shadow: 0px 4px 8px rgba(255, 0, 0, 0.137);
  border-radius: 100%/0 0 60px 60px;
}
.margtop {
  margin-top: 7%;
}
.darkThemeImg {
  background: rgba(253, 63, 63, 0.089);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 65%;
  border-radius: 100%/0 0 60px 60px;
}
</style>
