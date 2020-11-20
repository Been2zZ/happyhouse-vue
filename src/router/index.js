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
import store from '../store';
import MyPage from '@/components/MyPage.vue';
import MemberList from '@/components/MemberList.vue';
import UpdateInfo from '@/components/UpdateInfo.vue';

Vue.use(VueRouter);

const requireAuth = () => (to, from, next) => {
  const nextRoute = to.path;
  console.log('ㅉ같은곳에 들어온거같아요..');
  if (store.getters.getAccessToken) {
    console.log('ㅉ같은곳에 들어온거같아요..2');
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
  },
  {
    path: '/updateinfo/:user',
    name: 'UpdateInfo',
    component: UpdateInfo,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
