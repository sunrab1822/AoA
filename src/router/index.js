import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BidView from "../views/BidView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/bidding",
      name: "bid",
      component: BidView,
    },
  ],
});

export default router;
