<template>
  <div>
    <h1 class="text-5xl font-bold my-7">TodoList avec  <span class="text-indigo-500">VueX</span></h1>
    <main class="bg-slate-200 p-4 w-1/2">
      <form @submit.prevent="addTodo" >
        <div class="lg:flex items-center gap-3 block mb-5">
          <input v-model="newTodo"
                 class="text-slate-900 p-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-4 border-slate-900 lg:w-1/2 text-lg w-full"
                 type="text" placeholder="Ajouter une tache">
          <button class="bg-slate-900 py-2 px-4 text-white">Ajouter +</button>
        </div>
      </form>
      <h2 class="text-xl text-emerald-600">A faire</h2>
      <div class="bg-emerald-300" v-for="t in todoCompleted" :key="t.id">
        <div class="flex gap-2">
          <p @click="completeTodo(t)"
             class="text-slate-900 text-lg mb-2"
             :style="t.completed ? 'text-decoration:line-through;' : null ">
            {{t.title}}</p>
          <button class="hover:text-indigo-500" @click="deleteTodo(t)">X</button>
        </div>
      </div>

      <h2  class="text-xl text-red-600 mt-4">Terminés</h2>
        <div class="bg-red-300" v-for="t in todoNotCompleted" :key="t.id">
          <div class="flex gap-2">
            <p @click="completeTodo(t)"
               class="text-slate-900 text-lg mb-2"
               :style="t.completed ? 'text-decoration:line-through;' : null ">
              {{t.title}}</p>
            <button class="hover:text-indigo-500" @click="deleteTodo(t)">X</button>
          </div>

      </div>

    </main>

  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      newTodo: ''
    }
  },
mounted() {
    this.$store.dispatch("loadTodos")
},
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.newTodo)
      this.newTodo = ''
    },
    deleteTodo(todo) {
      this.$store.dispatch("deleteTodo", todo)

    },
    completeTodo(todo){
      this.$store.dispatch("completeTodo", todo)

    }
  },
  computed: {
   todos() {
      return this.$store.getters.allTodos;
    },
    todoCompleted() {
      return this.$store.getters.todoCompleted;
    },
    todoNotCompleted() {
      return this.$store.getters.todoNotCompleted;
    }
  }
}
</script>

<style scoped>

</style>