<template>
    <nav class="navbar is-transparent" style="background: #212331; height: 109px; position: sticky; top: 0;">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link to="/" class="nav-item">
                    {{ logo.toUpperCase() }}
                </nuxt-link>
            <a role="button" class="navbar-burger burger is-vcentered" aria-label="menu" aria-expanded="false" data-target="navMenu" @click="isOpen = !isOpen" :class="{'is-active':isOpen}">
                <span aria-hidden='true'></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navMenu" class="navbar-menu" :class="{'is-active': isOpen}">
            <div class="navbar-end">
                <a class="navbar-item navItem" v-for="(nav,index) in navItems" :key="index">
                    {{ nav.toUpperCase() }}
            </a>
            </div> 
        </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "AppHeader",
    data(){
        return{
            isOpen: false,
            navItems: [
                'about us',
                'our businesses',
                'collaborations',
                'leadership',
                'contact us'
            ],
            logo: 'rumsan'
        }
    },

}
</script>

<style scoped>
.navItem{
    line-height: 25px;
    font-weight: bold;
    font-size: 14px;
    font-family: 'Montserrat';
    color: #3c3950 !important;
    padding: 0 15px !important;
}
</style>