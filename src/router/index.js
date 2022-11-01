import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'
import NotFound from '../views/NotFound.vue'
import PostDetails from '../views/PostDetails.vue'
import TodoList from "@/views/TodoList";
import Register from "@/views/Register";
import Login from "@/views/Login";
import Profil from "@/views/Profil";

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home, alias: '/home'},
  {path: '/about/:titre', name: 'About', component: About},
  {path: '/blog', name: 'Blog', component: Blog},
  {path: '/login', name: 'Login', component: Login},
  {path: '/profil', name: 'Profil', component: Profil},
  {path: '/register', name: 'Register', component: Register},
  {path: '/contact', name: 'Contact', component: Contact},
  {path: '/blog/:id', name: 'PostDetails', component: PostDetails},
  {path: '/todo', name: 'TodoList', component: TodoList},
  {path: '*', name: 'NotFound', component: NotFound},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
