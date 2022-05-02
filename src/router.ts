import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("./pages/home.vue");
const Login = () => import("./pages/login.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
