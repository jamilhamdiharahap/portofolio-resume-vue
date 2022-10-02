import { createRouter, createWebHistory } from "vue-router";

import Contact from "../pages/Contact.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.url.BASE_URL),
  routes,
});

export default router;
