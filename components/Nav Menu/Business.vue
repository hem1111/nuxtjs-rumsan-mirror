<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-full has-text-centered px-6 py-6">
      <h1 class="title is-uppercase">Our Businesses</h1>
      <h2
        class="subtitle has-text-weight-light"
      >We specialize in various business sectors to optimize processes using efficient and cutting-edge technology. We simplify processes with digital innovation and a consumer-centric approach at its core. Since 2010, we have started, supported, invested and partnered with digital innovators. Meet our companies and initiatives below.</h2>
    </div>
    <div
      class="column is-one-third-desktop is-half-tablet is-full-mobile has-text-centered"
      v-for="business in businessList"
      :key="business"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image is-128x128 box">
            <img :src="business.img" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ business.name }}</p>
            </div>
          </div>

          <div class="content">{{business.desc}}</div>
        </div>
      </div>
      <span class="button is-warning is-uppercase">
        <a href="#">Learn More</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Business",
  props: ["businessList"],
};
</script>

<style scoped>
.card-image {
  margin: auto;
}
</style>