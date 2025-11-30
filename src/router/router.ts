import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import CollectionsView from "../views/CollectionsView.vue";
import MenView from "@/views/MenView.vue";
import WomenView from "@/views/WomenView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactsView from "@/views/ContactsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/collections", component: CollectionsView },
  { path: "/men", component: MenView },
  { path: "/women", component: WomenView },
  { path: "/about", component: AboutView },
  { path: "/contacts", component: ContactsView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
