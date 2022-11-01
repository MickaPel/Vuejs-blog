<template>
<main v-if="currentUser">
  <div class="my-5">
    <div class="flex justify-center">
      <img class="rounded-full" :src="currentUser.avatar" alt="" width="100" height="100">
    </div>
    <h2 class="text-center text-2xl font-semibold">{{currentUser.fName}} {{currentUser.lName}}</h2>
  </div>
  <p class="text-center mt-6">Email : {{currentUser.email}}</p>
  <p class="text-center mt-6">Mot de passe: {{currentUser.password}}</p>
</main>

  <main v-else>
    <h1>Vous devez etre connecté !!!</h1>
  </main>
</template>

<script>
export default {
  name: "Profil",
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  }
}
</script>

<style scoped>

</style>