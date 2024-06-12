import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Prueba from "../components/Prueba.vue"



const routes = [
  { path: "/", component: HelloWorld },
  { path: "/prueba", component: Prueba },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
