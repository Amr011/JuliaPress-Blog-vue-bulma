<template>
  <div class="column container is-4 ">
    <div class="card is-horizontal">
      <div class="card-image">
        <figure class="image ">
          <img
            src="https://images7.alphacoders.com/303/303995.jpg"
            alt="Placeholder image"
          />
        </figure>
      </div>

      <div class="card-content">
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post2",
};
</script>

<style>
.is-horizontal {
  display: flex;
}
</style>
