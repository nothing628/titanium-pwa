import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("./pages/home.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
