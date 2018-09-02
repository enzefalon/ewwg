import Vue from "vue";
import Router from "vue-router";
import AddRouterClasses from "@/assets/js/AddRouterClasses";

Vue.use(Router);


const addRouterClassInstance = new AddRouterClasses();

const loadView = function(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
};

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
      path: "*",
      name: "fallback",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  let additionalClassName = addRouterClassInstance.updateClassFromRoute(to);
  document.documentElement.className = (document.documentElement.className + additionalClassName).trim();
  next();
});

export default router;
