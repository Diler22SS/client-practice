import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/TestView.vue"),
  },
  {
    path: "/result_true",
    name: "ResultTrue",
    component: () => import("@/views/ResultTrueView.vue"),
  },
  {
    path: "/result_false",
    name: "ResultFalse",
    component: () => import("@/views/ResultFalseView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
