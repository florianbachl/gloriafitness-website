import { createWebHistory, createRouter } from "vue-router";

import landingPage from "@/views/landingPage";
import adminLogin from "@/views/adminLogin";
//import contactForm from "@/views/contactForm";
import legalAndRights from "@/views/legalAndRights";
import dataProtection from "@/views/dataProtection";
import adminDashboard from "@/views/adminDashboard";

import { store } from "@/store/index";

async function requireAuth(to, from, next) {
  if (await !store.getters.getUser) {
    // console.log("Not True?")
    next({
      path: "login",
    });
  } else {
    next();
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: landingPage,
  },
  // {
  //   path: "/contact",
  //   name: "contact",
  //   component: contactForm,
  // },
  {
    path: "/login",
    name: "login",
    component: adminLogin,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: adminDashboard,
    beforeEnter: requireAuth,
  },
  {
    path: "/impressum",
    name: "legal",
    component: legalAndRights,
  },
  {
    path: "/datenschutz",
    name: "dataprotection",
    component: dataProtection,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
