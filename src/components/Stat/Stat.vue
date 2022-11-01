<template>
    <div class="mt-8">
     <h2 class="text-6xl text-slate-900">{{number}}</h2>
     <h3 class="text-2xl text-indigo-500 my-3">{{title}}</h3>
     <p class="text-lg font-thin">{{description}}</p>     
    </div>
</template>
<script>
export default {
    name: 'Stat',
    props: ['number', 'title', 'description']
}
</script>
<style>
    
</style>