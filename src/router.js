import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import AddRouterClasses from "@/assets/js/AddRouterClasses";
import ExtendedRouteInformation from "@/assets/js/ExtendedRouteInformation";
import LoginView from "@/views/LoginView";
import GalleryOverview from "@/views/GalleryOverview";
import Config from "@/assets/js/Config";

//  TODO: research code splitting (especially css splitting) -> hundreds of css rules get doubled with splitting ....

Vue.use(Router);

//const loadView = function(view) {
//  return () =>
//    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
//};

const addRouterClassInstance = new AddRouterClasses(document.documentElement);
const extendedRouteInfo = new ExtendedRouteInformation(
  store,
  Config.HISTORY_MAX
);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/login",
      meta: {
        bodyClass: ""
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        bodyClass: "login",
        navPointName: "Login"
      }
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryOverview,
      meta: {
        bodyClass: "gallery-overview",
        navPointName: "Gallerie"
      }
    },
    {
      path: "*",
      name: "fallback",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  addRouterClassInstance.updateClassFromRoute(to, from);
  extendedRouteInfo.addToRouteHistory(to);
  next();
});

export default router;
