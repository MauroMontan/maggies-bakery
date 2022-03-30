import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home_view.vue";
import Shop from "../views/shop_view.vue";
import Cart from "../views/cart_view.vue";
import NotFound from "../views/notFound.vue";

const _beforeEnter = (_to: any, _from: any, next: (arg0?: string) => void) => {
  if (!localStorage.getItem("token")) {
    next("/");
  } else {
    next();
  }
};

const routes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
  { path: "/cart", component: Cart, beforeEnter: _beforeEnter },
  { path: "/:pathMatch(.*)*", component: NotFound },
  // { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export const goTo = (path: string): void => {
  router.replace({ path: path });
};

export default router;
