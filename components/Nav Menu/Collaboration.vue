<template>
  <div class="container">
    <div class="columns is-multiline has-text-centered">
      <h1 class="title column is-full is-uppercase">Collaborations</h1>
      <div
        class="column is-one-fifth is-half-mobile has-text-centered"
        v-for="(img,index) in imgUrl"
        :key="index"
      >
        <figure class="image is-128x128 box">
          <img :src="img.url" alt="whatever" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collaboration",

  props: ["imgUrl"],
};
</script>

<style>
</style>