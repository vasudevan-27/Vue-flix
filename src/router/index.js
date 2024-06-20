import LandingPage from "@/components/LandingPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("@/components/LoginPage.vue"),
  },
  {
    path: "/home/:username",
    name: "HomePage",
    component: () => import("@/components/HomePage.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
