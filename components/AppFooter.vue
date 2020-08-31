<template >
  <div class="container is-widescreen is-fullhd">
    <div class="columns is-centered">
      <div class="column is-6">
        <section class="section">
          <h1 class="title">
            <nuxt-link to="/" class="nav-item">
              <img src="@/assets/logo.png" alt="Rumsan Tech" width="300px" height="94px" />
            </nuxt-link>
          </h1>
          <h2
            class="subtitle is-size-6"
          >Rumsan Group is a diversified multi-business company. We are committed to supporting promising start-ups and investing in digital innovation.</h2>
        </section>
      </div>
      <div class="column is-3">
        <section class="section">
          <h1 class="title is-uppercase is-size-4 has-text-weight-light">Company</h1>
          <a
            class="navbar-item is-uppercase is-size-6 pl-0 has-text-weight-light"
            v-for="(nav,index) in navItems"
            :key="index"
          >{{ nav }}</a>
        </section>
      </div>
      <div class="column is-3">
        <section class="section has-text-weight-light">
          <h1 class="title is-uppercase is-size-4 has-text-weight-light">Our Business</h1>
          <p class="is-uppercase is-size-6">
            <a href="#">Rumsan Tech</a>
          </p>
          <p class="is-uppercase is-size-6">
            <a href="#">LoneTree Nepal</a>
          </p>
          <p class="is-uppercase is-size-6">
            <a href="#">eSatya</a>
          </p>
          <p class="is-uppercase is-size-6">
            <a href="#">
              <i>Hamro</i> LifeBank
            </a>
          </p>
          <p class="is-uppercase is-size-6">
            <a href="#">AgriClear</a>
          </p>
          <p class="is-uppercase is-size-6">
            <a href="#">Ask Bhunte</a>
          </p>
          <p class="is-uppercase is-size-6">
            <a href="#">Edushala</a>
          </p>
        </section>
      </div>
    </div>
    <footer class="footer pb-4 pt-4">
      <div class="content has-text-centered">
        <p>
          Copyright © 2018
          <strong>Rumsan Group of Companies</strong> | All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  props: ["navItems"],
};
</script> 

<style scoped>
.columns {
  margin: auto;
}
.container {
  background: #181828;
}
.subtitle {
  color: azure;
}

.title {
  color: yellow;
}

a {
  text-transform: uppercase;
  color: azure;
}
</style>