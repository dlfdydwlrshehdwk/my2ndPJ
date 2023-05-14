import { createWebHistory, createRouter } from "vue-router";
import Project from './components/Project.vue';
import Index from './components/Index.vue';

const routes = [
  {
    path: "/project",
    component: Project,
  },
  {
    path : "/",
    component:Index,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 