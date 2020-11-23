import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Home from '../views/Home.vue';
import Board from '@/views/Board.vue';
import Write from '@/views/Write.vue';
import Mod from '@/views/Mod.vue';
import About from '@/views/About.vue';
import HouseSearch from '@/views/HouseSearch.vue';
import CoronaSearch from '@/views/CoronaSearch.vue';

import DetailBoard from '@/components/Board/DetailBoard.vue';
import SignUp from '@/components/Login/SignUp.vue';
import Login from '@/components/Login/Login.vue';
import MyPage from '@/components/Login/MyPage.vue';
import MemberList from '@/components/Login/MemberList.vue';
import UpdateInfo from '@/components/Login/UpdateInfo.vue';
import StarApt from '@/components/Login/StarAptList.vue';

Vue.use(VueRouter);

const requireAuth = () => (to, from, next) => {
  const nextRoute = to.path;
  if (store.getters.getAccessToken) {
    return next();
  } else next('/login' + nextRoute);
};

// 현재 페이지 갱신시 오류 처리 -> 로그인 유지 안됌 !!!
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(() => {
    return window.location.reload();
  });
};

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
    beforeEnter: requireAuth(),
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
    beforeEnter: requireAuth(),
  },
  {
    path: '/mod/:num',
    name: 'Mod',
    component: Mod,
    beforeEnter: requireAuth(),
    props: true,
  },
  {
    path: '/detailboard/:num',
    name: 'DetailBoard',
    component: DetailBoard,
    beforeEnter: requireAuth(),
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
  {
    path: '/login/:nextRoute',
    name: 'LoginNextRoute',
    component: Login,
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
    beforeEnter: requireAuth(),
    props: true,
  },
  {
    path: '/memberlist',
    name: 'MemberList',
    component: MemberList,
    beforeEnter: requireAuth(),
  },
  {
    path: '/updateinfo',
    name: 'UpdateInfo',
    component: UpdateInfo,
    props: true,
    beforeEnter: requireAuth(),
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/starapt',
    name: 'StarApt',
    component: StarApt,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
