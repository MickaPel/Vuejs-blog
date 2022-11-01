<template>
  <header class="p-6 border-b-2 border-slate-900 text-slate-900">
    <div class="container mx-auto  block lg:flex justify-between items-center">
      <h3 class="font-bold text-2xl text-center">{{titre}}</h3>
      <nav>
        <ul class="flex gap-10">
          <li class="text-lg">
            <router-link to="/" class-active="active" exact>
              Accueil
            </router-link>
            </li>

            <li class="text-lg">
            <router-link to="/blog" class-active="active" exact>
              Nos Articles
            </router-link>
            </li>

            <li class="text-lg" v-show="!currentUser">
            <router-link :to='{name: "About", params: {titre: "TEST"}}' class-active="active" exact>
              A propos
            </router-link>
            </li>

            <li class="text-lg" v-show="!currentUser">
            <router-link to="/contact" class-active="active" exact>
             Contact
            </router-link>
            </li>
          <li class="text-lg" v-show="currentUser">
            <router-link to="/profil" class-active="active" exact>
              Mon profil
            </router-link>
          </li>
            <li class="text-lg" v-show="currentUser">
              <router-link to="/todo" class-active="active" exact>
                TodoVuex
              </router-link>
            </li>
            <button class="bg-slate-900 text-white py-1 px-4" v-show="currentUser" @click="logout">Deconnexion</button>
            <li class="text-lg" v-show="!currentUser">
              <router-link to="/register" class-active="active" exact>
                Inscription
              </router-link>
            </li>
            <li class="text-lg" v-show="!currentUser">
              <router-link to="/login" class-active="active" exact>
                Connnexion
              </router-link>
            </li>

            <!--
                <a href=""> Accueil</a>
                </li>
                <li class="text-lg font-semibold">
                <a href=""> Nos Articles</a>
                </li>
                <li class="text-lg font-semibold">
                <a href=""> A propos</a>
                </li>
                <li class="text-lg font-semibold">
                <a href=""> Contact</a>
                </li>
                -->

        </ul>
      </nav>
    </div>
  </header>
</template>
<script>

export default {
  name: "MyMenu",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
 computed : {
   currentUser() {
     return this.$store.state.isLogged
   }
 },
   props: {
        titre: {
            type: String,
            default: 'Dawan'
        }
    }
};
</script>
<style>
.router-link-active {
    border-bottom: 3px solid #3f51b5;
    color: #3f51b5;
    font-weight: 600;
}
</style>