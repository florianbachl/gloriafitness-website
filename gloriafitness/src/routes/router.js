import { createWebHistory, createRouter } from "vue-router";

import dashboard from '@/views/dashboard'
import login from '@/views/login'
import contact from '@/views/contact'
import legal from '@/views/legal'
import dataprotection from '@/views/dataprotection'


import { store } from '@/store/index'

async function requireAuth(to, from, next) {
    if (await !store.getters.getUser) {
       // console.log("Not True?")
        next({
            path: "login"
        })
    } else {
        next();
    }
}

const routes = [
  {
    path: '/contact',
    name: 'contact',
    component: contact ,
  },
  {
    path: '/login',
    name: 'login',
    component: login ,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard ,
    beforeEnter: requireAuth,
  },
  {
    path: '/legal',
    name: 'legal',
    component: legal ,
  },
  {
    path: '/dataprotection',
    name: 'dataprotection',
    component: dataprotection ,
  },
  ]

  
export const router = createRouter({
    history: createWebHistory(),
    routes,
  });