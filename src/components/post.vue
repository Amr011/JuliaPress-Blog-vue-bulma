<template>
  <div class="column is-4">
    <div class="card is-shady  ">
      <div class="card-image">
        <div class="category-el level level-left">
          <span class="tag is-danger"><b>Technology</b></span>
        </div>
        <figure class="image  is-4by3">
          <img
            src="https://source.unsplash.com/6Ticnhs1AG0"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content ">
        
          <h2>
            <router-link to="/postdetails" class="has-text-black">
              <strong> Orci Dapibus Faber In. </strong> 
            </router-link>
          </h2>
          

          <p class="has-text-grey">
            <i>Posted in December 25, 2018 by </i
            ><router-link to="" class="has-text-grey"
              ><i><u> Amr Aboras </u></i></router-link
            >
          </p>
          <p class="subtitle is-5">
            Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing
            elit pellentesque. Sed arcu non odio euismod lacinia at...
          </p>
          <router-link
            to="/postdetails"
            class="button is-danger is-outlined mt-4"
            data-target="modal-card"><b><i class="far fa-eye"></i> Read More</b >
         </router-link>
          <button
            class="mr-2 button is-danger is-outlined mt-4"
            data-target="modal-card"
          >
            <i class="far fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
};
</script>

<style>
.card-image > .fa {
  font-size: 8rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #209cee;
}
.card-content .content {
  font-size: 14px;
  margin: 1rem 1rem;
}
.card-content .content h4 {
  font-size: 16px;
  font-weight: 700;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 2rem;
  margin: auto;
}
.category-el {
  z-index: 999999;
  position: absolute;
  left: 0%;
  top: 0%;
}
.category-el span {
  font-size: 13px;
}
.button:hover {
  transition: 0.3s;
}
.button {
  transition: 0.3s;
}
</style>
