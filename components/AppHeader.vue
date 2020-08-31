<template>
  <section class="hero is-primary is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar is-fixed-top is-spaced has-background-link">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <nuxt-link to="/" class="nav-item">
                <img src="@/assets/logo.png" alt="logo" width="132px" height="64px" />
              </nuxt-link>
            </a>

            <span
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
              @click="isOpen = !isOpen"
              :class="{'is-active':isOpen}"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
          <div id="navMenu" class="navbar-menu" :class="{'is-active': isOpen}">
            <div class="navbar-end">
              <a
                class="navbar-item navItem is-uppercase"
                v-for="(nav,index) in navItems"
                :key="index"
              >{{ nav }}</a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Title</h1>
        <h2 class="subtitle">Subtitle</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHeader",
  props: ["navItems", "logo", "isOpen"],
};
</script>

<style scoped>
.navItem {
  line-height: 25px;
  font-weight: bold;
  font-size: 14px;
  font-family: "Montserrat";
  color: #3c3950 !important;
  margin-top: 10px;
}
</style>