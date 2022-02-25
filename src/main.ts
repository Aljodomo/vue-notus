import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// mouting point for the whole app

import App from "@/App.vue";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
import {routes} from "@/router";


const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
