import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Ejemplo1 from "../components/Ejemplo1.vue";
import Ejemplo2 from "../components/Ejemplo2.vue";
import Ejemplo3 from "../components/Ejemplo3.vue";


const routes = [
  { path: "/", component: HelloWorld },
  { path: "/ejemplo1", component: Ejemplo1 },
  { path: "/ejemplo2", component: Ejemplo2 },
  { path: "/ejemplo3", component: Ejemplo3 },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
