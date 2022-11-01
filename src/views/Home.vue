<template>
    <main> 
        <!-- Presentation rapide -->
        <section class="my-20 lg:flex block gap-10 items-center">
            <div class="w-full lg:w-1/2">
              <h1 class="text-5xl font-bold mb-5">Restez Informer avec DaBlog</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam enim velit itaque placeat totam voluptatibus sunt quasi excepturi culpa, aut amet laborum maxime, deserunt fugit laboriosam fuga minus quia delectus. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt itaque autem nisi maxime tempore qui mollitia! Reprehenderit perferendis 
                inventore placeat illum aperiam ratione ipsam officiis, magni modi est voluptatem.</p>
                <button class="text-xl py-3 px-5 bg-indigo-500 mt-5 font-semibold text-white mb-7 lg:mb-0" >
                    <router-link to="contact">Nous contacter</router-link>
                </button>
            </div>
            <div class="w-full lg:w-1/2">
            <img src="https://mediablog.cdnpk.net/sites/9/2021/12/N4X8jH0f-1570x820-2-min.png" alt="">
            </div>
        </section>
        <!-- Quelques chiffres--> 

        <section class="my-20">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Quelques chiffres</h2>
                <div class="h-1 w-40 bg-indigo-500 rounded"></div>
            </div>
            <div class='my-10 gap-5 sm:grid md:grid-cols-2 xl:grid-cols-3'>
                <!-- Pour un unique 
                <Stat :number="stat.number" :title="stat.title" :description="stat.description"/>
                -->
                <!-- Pour une liste -->
                <Stat 
                v-for="(stat, index) in stats" :key="index"
                :number="stat.number"
                 :title="stat.title" 
                 :description="stat.description"/>
                
             
            </div>
        </section>

        <!-- 4 derniers articles -->
        <section class="my-20">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Les derniers posts</h2>
                <div class="h-1 w-40 bg-indigo-500 rounded"></div>
            </div>
            <div class='my-10 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4'>
                <Post :post="post" v-for="post in latestPost" :key="post.id" />
                  
            </div>
        </section>
    </main>
</template>
<script>

import Stat from '../components/Stat/Stat.vue'
import { posts } from '../data'
import Post from '../components/Card/Post.vue'
export default {
  components: { Stat,  Post },
    name: 'Home',
    data() {
        return {
            stat: {number: 1, title:'Site Francophone', description: 'Plus de 1400 réferences dans le monde de informatique'},
            stats: [
                {number: 1, title:'Site Francophone', description: 'Plus de 1400 réferences dans le monde de informatique'},
                {number: 100, title:'Articles', description: 'Plus de 1400 réferences dans le monde de informatique'},
                {number: 1400, title:'Références', description: 'Plus de 1400 réferences dans le monde de informatique'},
            ],

        }
    },
    computed: {
        latestPost(){
           let latest = posts.length + 1;
            return posts.slice(latest - 4, latest)
        }
    },
    
}
</script>
<style lang="">
    
</style>