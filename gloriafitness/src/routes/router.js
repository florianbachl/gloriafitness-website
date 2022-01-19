import { createWebHistory, createRouter } from "vue-router";

import dashboard from '@/views/dashboard'
import login from '@/views/login'
import landing1 from '@/views/landingpages/landing1'
import blog from '@/views/blog'
import contact from '@/views/contact'
import quiz from '@/views/quiz'
import projects from '@/views/projects'
import about from '@/views/about'
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
    path: '/',
    name: 'landing1',
    component: landing1,
  },
  {
    path: '/about',
    name: 'about',
    component: about ,
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog ,
  },
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
    path: '/quiz',
    name: 'quiz',
    component: quiz ,
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects ,
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