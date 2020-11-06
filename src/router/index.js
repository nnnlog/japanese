import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/Main';
import Spell from '../views/Spell';
import NotFound from '../views/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/spell/',
      name: 'Spell',
      component: Spell
    },
    {
      path: '/*',
      name: '404',
      component: NotFound
    }
  ]
});
