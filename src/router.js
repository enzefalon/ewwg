import Vue from "vue";
import Router from "vue-router";
import AddRouterClasses from "@/assets/js/AddRouterClasses";

Vue.use(Router);

const loadView = function(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
};

const addRouterClassInstance = new AddRouterClasses(document.documentElement);

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
      component: loadView("LoginView"),
      meta: {
        bodyClass: "login"
      }
    },
    {
      path: "/test",
      name: "test",
      component: loadView("LoginView"),
      meta: {
        bodyClass: "test"
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
  next();
});

export default router;
