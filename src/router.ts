import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("./pages/home.vue");
const Login = () => import("./pages/login.vue");
const Upload = () => import("./pages/upload.vue");
const UploadPage = () => import("./pages/upload-page.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/upload",
    component: Upload,
  },
  {
    path: "/upload-page/:id",
    component: UploadPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
