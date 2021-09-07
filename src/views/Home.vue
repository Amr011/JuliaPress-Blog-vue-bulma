<template>
  <div>
    <Header />
    <Cover />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="mt-6 mb-6">
      <div class="container">
        <div class="columns is-multiline">
          <post /><post /><post /><post /><post /><post /><post /><post /><post /><post />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import post from "../components/post";
import Cover from "../components/Cover";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    post,
    Header,
    Footer,
    Cover,
  },
};
</script>

<style>
.card-image img {
  filter: brightness(60%);
}
.divider {
  /* minor cosmetics */
  display: table;
  font-size: 24px;
  text-align: center;
  width: 75%; /* divider width */
  margin: 40px auto; /* spacing above/below */
}
.divider span {
  display: table-cell;
  position: relative;
}
.divider span:first-child,
.divider span:last-child {
  width: 50%;
  top: 17px; /* adjust vertical align */
  -moz-background-size: 100% 6px; /* line width */
  background-size: 100% 6px; /* line width */
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
}
.divider span:first-child {
  /* color changes in here */
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(transparent),
    to(#000)
  );
  background-image: -webkit-linear-gradient(180deg, transparent, #000);
  background-image: -moz-linear-gradient(180deg, transparent, #000);
  background-image: -o-linear-gradient(180deg, transparent, #000);
  background-image: linear-gradient(90deg, transparent, #000);
}
.divider span:nth-child(2) {
  color: #000;
  padding: 0px 5px;
  width: auto;
  white-space: nowrap;
}
.divider span:last-child {
  /* color changes in here */
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#000),
    to(transparent)
  );
  background-image: -webkit-linear-gradient(180deg, #000, transparent);
  background-image: -moz-linear-gradient(180deg, #000, transparent);
  background-image: -o-linear-gradient(180deg, #000, transparent);
  background-image: linear-gradient(90deg, #000, transparent);
}
</style>
