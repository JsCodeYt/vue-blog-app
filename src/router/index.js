import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import Single from "../views/SingleView.vue"
import Write from "../views/WriteView.vue"
import Settings from "../views/SettingsView.vue"
import Register from "../views/RegisterView.vue"
import Login from "../views/LoginView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: localStorage.getItem("user") ? HomeView : Register
    },
    {
      path: "/single/:id",
      name: "single",
      component: localStorage.getItem("user") ? Single : Register
    },
    {
      path: "/write",
      name: "write",
      component: localStorage.getItem("user") ? Write : Register
    },
    {
      path: "/set",
      name: "set",
      component: localStorage.getItem("user") ? Settings : Register,
    },
    {
      path: "/register",
      name: "register",
      component: localStorage.getItem("user") ? HomeView : Register,
    },
    {
      path: "/login",
      name: "login",
      component: localStorage.getItem("user") ? HomeView : Login
    }
  ]
})

export default router
