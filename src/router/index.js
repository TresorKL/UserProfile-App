import { createRouter, createWebHistory } from "@ionic/vue-router";
// import HomePage from "../views/HomePage";
import UsersPage from "../pages/UsersPage";

const routes = [
  {
    path: "/",
    redirect: "/users",
  },
  {
    path: "/users",

    component: UsersPage,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import("../pages/UserDetailsPage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
