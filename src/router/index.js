import { createRouter, createWebHistory } from "vue-router";

import "@fortawesome/fontawesome-free/css/all.css";
import Home from "../views/Home.vue";
import postDetails from "../views/postDetails.vue";
import Contact from "../views/Contact";
import About from "../views/About";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/postdetails",
    name: "postDetails",
    component: postDetails,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
