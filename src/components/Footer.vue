<template>
   <footer class="bg-slate-900 text-white py-5">
       <p class="text-center text-lg uppercase">DaBlog {{date}} - Copyright - Tous droit réservé</p> 
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            date: new Date().getFullYear()
        }
    }
    
}
</script>
<style lang="">
    
</style>