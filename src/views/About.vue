<template>
    <div>
       <h1>About PAGE</h1>
       <!--Pour afficher le paramètre affiché dans l'url, on peux y avoir accès on utilise this.$route.params-->
       <p>Params: {{param}}</p>
        
    </div>
</template>
<script>
export default {
    name: 'About',
  methods : {


  },
  mounted() {
    // capsules dispo ?
    let capsuleDispo = true

    let demandeDeCapusle = new Promise((resolve, reject) => {
// on ajoute un timer de 5 seconds avant de le resulat
      setTimeout(() => {
        if(capsuleDispo) {
          resolve("Voila vos capsules !")
        } else {
          reject("Désolé nous ne pouvons donner suite a votre commande !")
        }
      }, 3000)

    })
    console.log(demandeDeCapusle)
  },
  computed: {
        param() {
            return this.$route.params.titre
        }
    },
    
}
</script>
<style lang="">
    
</style>