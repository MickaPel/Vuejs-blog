<template>
    <div>
        <main  class="flex justify-center" v-if="loading">
            <Spinner />
        </main>
        <main class="relative" v-else>
            <div v-show="success" class="flex justify-between items-center bg-emerald-600 w-1/5 p-5">
                <p class="text-white text-xl">L'article à bien été ajouté !</p>
                <button class="text-white font-bold font-bold p-2" @click="toggleSuccess">X</button>
            </div>
mod
            <!-- Modal ajouter un article -->
             <form 
               class="absolute top-10 bg-indigo-100 w-full p-10 modal"
               v-show="modalOpen"
               @submit.prevent="handleSubmit">
                <div>
                    <button 
                    @click.prevent="toggleModal()"
                    class="p-2 text-xl font-bold text-indigo-500 absolute right-5 top-5">X</button>
                </div>
                <h2 class="text-3xl text-center mb-5 font-bold">Ajouter un article</h2>
                <div class="flex flex-col mb-4">
                    <label for="" class="text-lg font-semibold">Titre de l'article</label>
                    <input
                     v-model="newPost.title"
                        type="text" 
                        placeholder="Mon super titre"
                        class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
                </div>

                <div class="flex flex-col mb-4">
                    <label for="" class="text-lg font-semibold">Sommaire</label>
                    <input 
                      v-model="newPost.summary"
                    type="text"
                     placeholder="Mon super titre"
                        class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
                </div>

                <div class="flex flex-col mb-4">
                    <label for="" class="text-lg font-semibold">Contenu de l'article</label>
                    <textarea
                      v-model="newPost.content"
                      type="text"
                      rows="13"
                      placeholder="Mon super titre"
                        class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100"></textarea>
                </div>

                <div class="flex flex-col mb-4">
                    <label for="" class="text-lg font-semibold">Categorie</label>
                    <select
                        v-model="newPost.category"
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
                      v-model="newPost.author"
                      type="text" placeholder="Mon super titre"
                        class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
                </div>

                <div class="flex flex-col mb-4">
                    <label for="" class="text-lg font-semibold">Image</label>
                    <input
                        v-model="newPost.image"
                        type="text" placeholder="copier l'url de l'image"
                        class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
                </div>

                <button class="bg-slate-800 p-4 my-5 text-white" type="submit">Valider</button>
            </form>


            <!-- Intro -->
            <div class="my-10 lg:flex justify-between items-center block">
                <div>
                    <h2 class="text-5xl font-semibold mb-2">Tous les articles</h2>
                    <div class="h-1 w-60 bg-indigo-500 rounded"></div>
                </div>

                <button @click="toggleModal"
                    class="text-xl py-3 px-5 bg-indigo-500 mt-5 font-semibold text-white mb-7 lg:mt-0 mt-3 ">
                    Ajouter un article
                </button>


            </div>
            <!--Formuaire de recherche -->

            <form>
                <div class="lg:flex items-center block gap-6">
                    <input v-model="search"
                        class="text-slate-900 p-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-4 border-slate-900 lg:w-1/2 text-lg w-full"
                        type="text" placeholder="Tapez votre recherche..">

                    <select v-model="categoryFilter"
                        class="text-slate-900 p-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-4 border-slate-900 lg:w-1/2 w-full text-lg">
                        <option value="" selected disabled default>Selectionner une categorie</option>
                        <option value="Programmning"> Programmation</option>
                        <option value="Design"> Design</option>
                        <option value="Politics"> Politique</option>
                        <option value="Cuisine"> Cuisine</option>
                    </select>
                    <button v-if="search.length > 0 || categoryFilter.length > 0"
                        class="text-indigo-700 text-xl font-bold" @click.prevent="btnResetForm">X</button>
                </div>
            </form>
            <!-- Tout les articles -->
            <p v-show="filteredPosts.length > 0" class="text-lg font-semibold text-center my-2">Résultats : <span class="text-indigo-500">{{filteredPosts.length}}</span></p>
            <div class=' my-20 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4' v-if="filteredPosts.length > 0">
                <Post v-for="post in filteredPosts" :key="post.id" :post="post" />
            </div>

            <h3 v-else class="text-center text-indigo-700 text-2xl my-10">Pas de résultat</h3>

        </main>

    </div>
</template>
<script>
import { posts } from '../data';
import Post from '../components/Card/Post.vue';
import Spinner from '../components/Spinner.vue';


export default {
    name: 'Blog',
    components: { Post, Spinner },
    data() {
        return {
            posts: posts,
            search: "",
            categoryFilter: "",
            modalOpen: false,
            newPost: {
                id: Math.floor(Math.random() * 100),
                title: '',
                summary: '',
                content: '',
                image: '',
                author: '', 
                category: '', 
                date: '12/02/23'

            },
            success: false,
            loading: false
        }
    },
    methods: {
        btnResetForm() {
            this.search = '';
            this.categoryFilter = '';
        },
        toggleModal() {
            this.modalOpen = !this.modalOpen
        },
        toggleSuccess() {
            this.success = !this.success
        },
        handleSubmit() {
            this.loading = true
            setTimeout(() => {
                this.posts.push(this.newPost)
                this.toggleModal()
                this.success = true
                this.loading = false
                 this.newPost = {
                id: Math.floor(Math.random() * 100),
                title: '',
                summary: '',
                content: '',
                image: '',
                author: '', 
                category: '', 
                date: '12/02/23'
            }

            }, 2000)
        }
    },
    computed: {
        filteredPosts() {
            let allPosts = [...this.posts];
            if (this.categoryFilter.length > 0) {
                const result = this.posts.filter((p) => {
                    return p.category.match(this.categoryFilter);
                });
                allPosts = result;
            }

            if (this.search.length > 0) {
                const result = allPosts.filter((p) => {
                    return (
                        p.title.toLowerCase().match(this.search.toLowerCase()) ||
                        p.content.match(this.search.toLowerCase()));
                });
                allPosts = result;
            }
            return allPosts;
        }
    },

}
</script>
<style>
.modal {
    box-shadow: 0 0 0 50vmax rgba(0,0,0,.5);
}
    
</style>