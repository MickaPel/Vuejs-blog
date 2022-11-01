<template>
  <main>
    <h1 class="text-center text-5xl uppercase font-bold ">Espace Inscription</h1>
    <div class="flex justify-center">
      <Spinner  v-if="loading"/>
      <form class="my-6 w-2/3 bg-slate-800 text-white p-7 shadow-md " @submit.prevent="register" v-else>
        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Prénom:</label>
          <input
              v-model="credentials.fName"
              type="text"
              placeholder="John"
              class="leading-none text-white text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-4 border-white bg-slate-800">

        </div>
        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Nom:</label>
          <input
              v-model="credentials.lName"
              type="text"
              placeholder="DOE"
              class="leading-none text-white text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-4 border-white bg-slate-800">

        </div>
        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Email:</label>
          <input
              v-model="credentials.email"
              type="email"
              placeholder="john@doefr"
              class="leading-none text-white text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-4 border-white bg-slate-800">

        </div>
        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Mot de passe:</label>
          <input
              v-model="credentials.password"
              type="password"
              placeholder="*******"
              class="leading-none text-white text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-4 border-white bg-slate-800">

        </div>

        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Avatar:</label>
          <input
              v-model="credentials.avatar"
              type="text"
              placeholder="DOE"
              class="leading-none text-white text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-4 border-white bg-slate-800">

        </div>

        <div class="flex justify-center">
          <button class="bg-white text-slate-800 px-4 py-2 mt-5">S'inscrire</button>
        </div>

      </form>

    </div>

  </main>
</template>

<script>
import Spinner from "@/components/Spinner";
export default {
  name: "Register",
  components: {Spinner},
  methods: {
    register() {
      if (this.credentials.email && this.credentials.fName && this.credentials.lName) {
        this.$store.dispatch("register", this.credentials);
      } else {
        console.log("erreur")
      }

    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  data() {
    return {
      credentials : {
        fName: '',
        lName: '',
        email: '',
        password: '',
        avatar: ''
      }
    }
  }
}
</script>

<style scoped>

</style>