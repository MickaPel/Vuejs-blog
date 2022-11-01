<template>
  <div id="app" >
    <div class=" flex flex-col justify-between min-h-screen">
        <MyMenu :titre="siteTitle" />
        <div class="container mx-auto">
          <router-view></router-view>
        </div>
    <Footer />
    </div>
    <!--Si le composant ne va prendre aucune balise à l'intérieur 
    alors on la declare comme <Component /> sinon <Component> <div> </Component>  -->
  </div>
</template>

<script>
import MyMenu from "./components/MyMenu.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    MyMenu,
    Footer,
  },
  data() {
    return {
      siteTitle: "DaBlog"
    }
  },
}
</script>

<style>

  .container {
    padding: 0 20px
  }

</style>
