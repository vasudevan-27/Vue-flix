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

  {
    path: "/moviecarditem/:imdbID",
    name: "MovieCardItem",
    component: () => import("@/components/MovieCardItem.vue"),
    props: (route) => ({
      ...route.params,
      imdbID: route.params.imdbID,
    }),
    // props: true,

    // beforeEnter: async (to, from, next) => {
    //   try {
    //     const imdbID = to.params.imdbID;

    //     //Fetch data from API
    //     const response = await fetch(`https://calf-live-bucket.s3.ap-south-1.amazonaws.com/Film.JSON`);
    //     var data = await response.json();
    //     const movies = data.movies;

    //     //check params with API id

    //     const exist = movies.some(
    //       (movie) => imdbID === movie.imdbID

    //     );

    //     if (!exist) {
    //       next({
    //         name: "NotFoundPage",
    //         params: { pathMatch: to.path.split("/").slice(1) },
    //         query: to.query,
    //         hash: to.hash,
    //       });
    //     } else {
    //       next();
    //     }
    //   } catch (error) {
    //     console.log("Error fetching destinations:", error);
    //     next(false);
    //   }
    // },
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

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !isLoggedIn()) {
//     next({ name: 'LoginPage', query: { redirect: to.fullPath } });
//   } else {
//     next();
//   }
// });

function isLoggedIn() {
  return !!localStorage.getItem("username");
}

export default router;
