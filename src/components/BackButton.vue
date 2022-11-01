<template>
<div>
 <button class="bg-slate-800 p-4 my-5 text-white" @click="back">Retour </button>
</div>
</template>
<script>
export default {
    name: 'BackButton',
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
    
}
</script>
<style>
    
</style>