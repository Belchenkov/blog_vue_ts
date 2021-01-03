import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import i18n from "../i18n";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import LoginPage from "../views/auth/LoginPage.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage
  },
  {
    path: "*",
    name: "404",
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  let lang = to.params.lang;

  if (!lang) {
    lang = "en";
  }

  i18n.locale = "en";

  if (to.matched.some(record => record.meta.requiresAuth)) {
    const authUser = JSON.parse(
      window.localStorage.getItem("currentUser") || "{}"
    );
    if (authUser && authUser.accessToken) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
