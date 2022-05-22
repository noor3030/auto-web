import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/AutoView.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import Terms from "../views/Terms.vue"
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/privacy_policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
   
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
   
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
