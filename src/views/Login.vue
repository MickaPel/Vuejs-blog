<template>
<main>
  <vue-toastr ref="toastr"></vue-toastr>
  <h1 class="text-center text-5xl uppercase font-bold ">Espace connexion</h1>
  <div class="flex justify-center">
    <Spinner  v-if="loading"/>


    <form class="my-6 w-2/3 bg-slate-800 text-white p-7 shadow-md " @submit.prevent="login" v-else >
      <div class="flex flex-col">
        <label class="text-lg font-semibold" for="">Email:</label>
        <input
            v-model="credentials.email"
            type="email"
            placeholder="john@doefr"
            class="leading-none text-white text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-4 border-white bg-slate-800">

      </div>
      <div class="flex flex-col mt-4" >
        <label class="text-lg font-semibold" for="">Mot de passe:</label>
        <input
            v-model="credentials.password"
            type="password"
            placeholder="***********"
            class="leading-none text-white text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-4 border-white bg-slate-800">
      </div>

      <div class="flex justify-center">
        <button class="bg-white text-slate-800 px-4 py-2 mt-5">Se Connecter</button>
      </div>

    </form>

  </div>

</main>
</template>

<script>
import Spinner from "@/components/Spinner";

export default {
  name: "Login.vue",
  components: {Spinner},
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    login() {
      if (this.credentials.email && this.credentials.password) {
        this.$store.dispatch("login", this.credentials);
      } else {
        console.log("une erreur est survenu")
      }

    }
  },
  data() {
    return {
      credentials : {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>

</style>