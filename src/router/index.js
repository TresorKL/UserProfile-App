import { createRouter, createWebHistory } from "@ionic/vue-router";
// import HomePage from "../views/HomePage";
import UsersPage from "../pages/UsersPage";
import UserDetails from "../pages/UserDetailsPage";

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
    path: "/detail",
    name: "Detail",
    component: UserDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
