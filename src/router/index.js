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
    path: "/home",
    name: "HomePage",
    component: () => import("@/components/HomePage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:pathmatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({ name: "LoginPage", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

function isLoggedIn() {
  return !!localStorage.getItem("username");
}

export default router;
