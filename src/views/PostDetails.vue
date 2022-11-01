<template lang="">
   <main>
      <div class="mt-16" v-if="currentPost">
       <h2 class="text-5xl font-semibold">{{ currentPost[0].title}}</h2>
       <h3 class="text-xl font-semibold text-indigo-500 my-4">{{ currentPost[0].category}}</h3>
       <img :src="currentPost[0].image" :alt="currentPost[0].title">
       <p class="text-lg">{{currentPost[0].summary}}</p>
       <div class="my-8">
        <p class="font-thin">{{currentPost[0].content}}</p>
       </div>
       <div>
        <p class="text-lg">Ecrit par {{currentPost[0].author}} le {{currentPost[0].date}}</p>
       </div>
       <BackButton />
    </div>  
    <div v-else>
        une erreur est survenu
    </div>
  </main>
</template>
<script>
import { posts } from '../data';
import BackButton from '../components/BackButton.vue';

export default {
    name: 'PostDetails',
    components: {
        BackButton
    },
    data() {
        return{
            currentPost: null
        }
    },
   async mounted() {
        const {id} = this.$route.params
        this.currentPost = posts.filter((p) => {
          return p.id === id;
        })
    }
    /*
    
    */
    
}
</script>
<style>
    
</style>