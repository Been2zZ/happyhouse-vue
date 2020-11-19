import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Board from '@/views/Board.vue';
import Write from '@/views/Write.vue';
import DetailBoard from '@/components/DetailBoard.vue';
import Mod from '@/views/Mod.vue';
import HouseSearch from '@/views/HouseSearch.vue';
import SignUp from '@/components/SignUp.vue';
import CoronaSearch from '@/views/CoronaSearch.vue';
import Login from '@/components/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/board',
    name: 'Board',
    component: Board,
  },
  {
    path: '/housesearch',
    name: 'HouseSearch',
    component: HouseSearch,
  },
  {
    path: '/coronasearch',
    name: 'CoronaSearch',
    component: CoronaSearch,
  },
  {
    path: '/write',
    name: 'Write',
    component: Write,
  },
  {
    path: '/mod/:num',
    name: 'Mod',
    component: Mod,
    props: true,
  },
  {
    path: '/detailboard/:num',
    name: 'DetailBoard',
    component: DetailBoard,
    props: true,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
