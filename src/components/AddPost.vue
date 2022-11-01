<template lang="">
     <form class="absolute top-10 bg-indigo-100 w-full p-10 shadow-2xl" v-show="modalOpen">
                <div>
                    <button 
                    @click.prevent="toggleModal()"
                    class="bg-slate-800 p-2 text-white absolute right-5 top-5">X</button>
                </div>
                <h2 class="text-3xl text-center">Ajouter un article</h2>
                <div class="flex flex-col mb-4">
                    <label for="" class="text-lg font-semibold">Titre de l'article</label>
                    <input
                     v-bind:value="data.title"
                     v-on:input="$emit('input', $event.target.value)"
                        type="text" 
                        placeholder="Mon super titre"
                        class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
                </div>

                <div class="flex flex-col mb-4">
                    <label for="" class="text-lg font-semibold">Sommaire</label>
                    <input 
                     v-bind:value="data.summary"
                     v-on:input="$emit('input', $event.target.value)"
                    type="text"
                     placeholder="Mon super titre"
                        class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
                </div>

                <div class="flex flex-col mb-4">
                    <label for="" class="text-lg font-semibold">Contenu de l'article</label>
                    <input
                     v-bind:value="data.content"
                     v-on:input="$emit('input', $event.target.value)"
                     type="text"
                      placeholder="Mon super titre"
                        class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
                </div>

                <div class="flex flex-col mb-4">
                    <label for="" class="text-lg font-semibold">Categorie</label>
                    <select
                     v-bind:value="data.category"
                     v-on:input="$emit('input', $event.target.value)"
                        class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
                        <option value="Programmning" selected> Programmation</option>
                        <option value="Design"> Design</option>
                        <option value="Politics"> Politique</option>
                        <option value="Cuisine"> Cuisine</option>
                    </select>
                </div>

                <div class="flex flex-col mb-4">
                    <label for="" class="text-lg font-semibold">Auteur</label>
                    <input
                     v-bind:value="data.author"
                     v-on:input="$emit('input', $event.target.value)"
                      type="text" placeholder="Mon super titre"
                        class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
                </div>

                <div class="flex flex-col mb-4">
                    <label for="" class="text-lg font-semibold">Image</label>
                    <input
                     v-bind:value="data.image"
                     v-on:input="$emit('input', $event.target.value)"
                        type="text" placeholder="copier l'url de l'image"
                        class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
                </div>
            </form>
</template>
<script>
export default {
    name: 'AddPost',
    props: ['modalOpen', 'data'],
    methods: {
        toggleModal() {
            this.$emit("toogle-modal")
        }
    }

    
}
</script>
<style lang="">
    
</style>