import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home.vue';
import CidadeList from '@/views/cidade-list.vue';
import ClienteList from '@/views/cliente-list.vue';
import AgenciaList from '@/views/agencia-list.vue';
import CidadeForm from '@/views/cidade-form.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cidades',
      component: CidadeList
    },
    {
      path: '/cidade-form',
      component: CidadeForm
    },
    {
      path: '/clientes',
      component: ClienteList
    },
    {
      path: '/agencias',
      component: AgenciaList
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
});
