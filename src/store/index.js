//const API_URL = "https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10";
import Vue from "vue";
import VueX from 'vuex'
import axios from "axios";
import router from "@/router/index"
import VsToast from "@vuesimple/vs-toast";

Vue.use(VueX)

const state = {
    todos : [],
    users : [
        {fName: "John", lName: "DOE", email: "john@doe.fr", password: "secret", avatar: "https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png"},
        {fName: "Jane", lName: "DOE", email: "john@doe.fr", password: "secret", avatar: "https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png"},
        {fName: "Johnny", lName: "DOE", email: "johnny@doe.fr", password: "secret", avatar: "https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png"},
        {fName: "JoJo", lName: "DOE", email: "jojo@doe.fr", password: "secret", avatar: "https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png"},
    ],
    currentUser: null,
    isLogged: false,
    loading: false,
}

const store = new VueX.Store({
    state,
    getters: {
        allTodos(state) {
            return state.todos
        },
        todoNotCompleted(state) {
            return state.todos.filter((t) => t.completed)
        },
        todoCompleted(state) {
            return state.todos.filter((t) => !t.completed)
        },
        allUsers(state) {
            return state.users
        },
        currentUser(state){
            return state.currentUser
        },
        loading() {
            return state.loading
        }
    }

    ,
    mutations: {
        SET_TODOS(state, todos) {
            this.state.todos = todos
        },
        ADD_TODO(state, newTodo) {
            this.state.todos.push(newTodo)
        },
        DELETE_TODO(state, todo) {
            let todos = state.todos;
            todos.splice(todos.indexOf(todo), 1);
        },
        COMPLETE_TODO(state, todo){
            todo.completed = !todo.completed
        },

        LOGIN(state) {
            state.isLogged = true
        },
        LOGOUT(state) {
            state.isLogged = false
        },

        ADD_USER(state, user){
            state.users.push(user)
        },
        SET_CURRENT_USER(state, user){
            state.currentUser = user
        },
        LOADING_BEGIN(state) {
            state.loading = true
        },
        LOADING_END(state) {
            state.loading = false
        }


    },
    actions: {

        login({state, commit}, credentials) {
            commit("LOADING_BEGIN")
            commit("LOGIN")
            let cu = state.users.find((u) => u.email === credentials.email || u.password === credentials.password)
            if(cu != undefined) {
                setTimeout(() => {
                    commit("SET_CURRENT_USER", cu)
                    router.push("/profil")
                    commit("LOADING_END")
                    VsToast.show({
                        title: 'Connexion réussie',
                        variant: 'info',
                        message: `Ravi de vous revoir ${cu.fName} ${cu.lName}`,
                        position: 'top-right',
                        showClose: true
                    });

                }, 2000)
            } else {
                VsToast.show({
                    title: 'Identifiants incorrect',
                    variant: 'error',
                    message: `Une erreur s'est produite !`,
                    position: 'top-right',
                    showClose: true
                });
                commit("LOADING_END")
            }

        },
        logout({commit}) {
            commit("LOGOUT")
            router.push("/")
        },

        register({commit}, newUser) {
            commit("LOADING_BEGIN")
            setTimeout(() => {
                commit("ADD_USER", newUser)
                console.log(newUser)
                router.push("/login")
                VsToast.show({
                        title: 'Inscription réussie',
                    variant: 'info',
                    message: `Merci pour votre inscription ${newUser.fName} ${newUser.lName}`,
                    position: 'top-right',
                    showClose: true
                });
                commit("LOADING_END")
            }, 2000)
        },

        async loadTodos({commit}) {
            await axios.get("https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10").then((res) => {
                commit("SET_TODOS", res.data)
            }).catch((e) => {
                console.log(e)
            })
        },

        deleteTodo({commit}, todo) {
            commit("DELETE_TODO", todo)
        },
        completeTodo({commit}, todo) {
         commit("COMPLETE_TODO", todo)
        },
        addTodo({commit}, title) {
            const newTodo = {
                userId: 1,
                id: Math.floor(Math.random() * 100),
                title: title,
                completed: false
            }
            commit("ADD_TODO", newTodo)
        },

    }
});

export default store;