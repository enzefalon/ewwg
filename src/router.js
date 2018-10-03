import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import DOMElemClassAdder from "@/assets/js/DOMElemClassAdder";
import ExtendedRouteInformation from "@/assets/js/ExtendedRouteInformation";
import RouteMetaChange from "@/assets/js/RouteMetaChange";
import LoginView from "@/views/LoginView";
import GalleryView from "@/views/GalleryView";
import GalleryOverview from "@/views/childViews/GalleryOverview";
import GalleryDetails from "@/views/childViews/GalleryDetails";
import AccountView from "@/views/AccountView";
import Config from "@/assets/js/Config";

//  TODO: research code splitting (especially css splitting) -> hundreds of css rules get doubled with splitting ....

Vue.use(Router);

//const loadView = function(view) {
//  return () =>
//    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
//};

const addRouterClassInstance = new DOMElemClassAdder(document.documentElement);
const extendedRouteInfo = new ExtendedRouteInformation(Config.HISTORY_MAX, store);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/login",
      meta: {
        bodyClass: "",
        isMainNav: false
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        bodyClass: "login",
        navPointName: "Login",
        isMainNav: false,
        title: "Login" + Config.TITLE_SUFFIX + Config.NAME_TO_SHOW,
        metaTags: [
          {
            name: "description",
            content: "Logge Dich ein, um fortzufahren."
          }
        ]
      }
    },
    {
      path: "/gallery",
      component: GalleryView,
      meta: {
        breadcrumb: "Gallerie"
      },
      children: [
        {
          path: "",
          name: "gallery-overview",
          component: GalleryOverview,
          meta: {
            bodyClass: "gallery-overview",
            navPointName: "Gallerie",
            isMainNav: true,
            title: "Gallerie Übersicht" + Config.TITLE_SUFFIX + Config.NAME_TO_SHOW,
            metaTags: [
              {
                name: "description",
                content:
                  "Hier findest du alle Medien im Überblick. Nutze die Filter, um die Auswahl einzuschränken."
              }
            ]
          }
        },
        {
          path: "details/:id",
          name: "gallery-details",
          component: GalleryDetails,
          meta: {
            bodyClass: "gallery-details",
            navPointName: "Details",
            breadcrumb: "Details",
            isMainNav: false,
            title: "Gallerie Details" + Config.TITLE_SUFFIX + Config.NAME_TO_SHOW,
            metaTags: [
              {
                name: "description",
                content:
                  "Hier findest du die Detailansicht eines Mediums inklusive einer Kommentarfunktion."
              }
            ]
          }
        }
      ]
    },
    {
      path: "/account",
      name: "account",
      component: AccountView,
      meta: {
        bodyClass: "account-overview",
        navPointName: "Account",
        breadcrumb: "Account",
        isMainNav: true,
        title: "Account Übersicht" + Config.TITLE_SUFFIX + Config.NAME_TO_SHOW,
        metaTags: [
          {
            name: "description",
            content: "Hier findest du alle Einstellungen rund um Deinen Account."
          }
        ]
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
  RouteMetaChange.changeMeta(to);
  next();
});

export default router;
