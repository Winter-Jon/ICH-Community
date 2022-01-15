import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入各个页面对应的组件
const homepage = () => import("../views/homepage/homepage")

const community = () => import("../views/community/community")
const com_note1 = () => import("../views/community/notes/com_note1")
const com_note2 = () => import("../views/community/notes/com_note2")
const com_search = () => import("../views/community/search")
const com_stories = () => import("../views/community/stories")
const com_activities = () => import("../views/community/activities")


const games = () => import("../views/games/games")

const shopping = () => import("../views/shopping/shopping")

const profile = () => import("../views/profile/profile")
const profile_note1 = () => import('../views/profile/notes/profile_note1')
const profile_note2 = () => import('../views/profile/notes/profile_note2')
const modify_information = () => import('../views/profile/modify/infomation')
const modify_signature = () => import('../views/profile/modify/signature')
const more_messages = () => import('../views/profile/more/messages')
const more_stars = () => import('../views/profile/more/stars')
const more_wallet = () => import('../views/profile/more/wallet')
const follow = () => import('../views/profile/follow')
const fans = () => import('../views/profile/fans')
const wallet_withdraw = () => import('../views/profile/more/wallet_withdraw')


const routes = [
  {
    // 默认跳转页面为首页
    path: '',
    redirect:'/homepage'
  },
  
  //具体各个页面路径配置
  
  // 首页
  {
    path:'/homepage',
    component:homepage
  },
  
  // 社区
  {
    path:'/community',
    component:community
  },
  // 社区笔记
  {
    path: '/community/note1',
    component:com_note1
  },
  {
    path: '/community/note2',
    component:com_note2
  },
  // 社区搜索
  {
    path: '/community/search',
    component:com_search
  },
  // 社区：说出你的故事
  {
    path: '/community/stories',
    component:com_stories
  },
  {
    path: '/community/activities',
    component:com_activities
  },
  
  
  // 游戏
  {
    path: '/games',
    component:games
  },
  
  // 商城
  {
    path: '/shopping',
    component:shopping
  },
  
  // 我的
  {
    path: '/profile',
    component:profile
  },
  {
    path: '/profile/modify/information',
    component:modify_information
  },
  {
    path: '/profile/modify/signature',
    component:modify_signature
  },
  {
    path:"/profile/note1",
    component:profile_note1
  },
  {
    path: "/profile/note2",
    component:profile_note2
  },
  {
    path:'/profile/more/messages',
    component:more_messages
  },
  {
    path:'/profile/more/stars',
    component:more_stars
  },
  {
    path:'/profile/more/wallet',
    component:more_wallet
  },
  {
    path: '/profile/fans',
    component:fans
  },
  {
    path: '/profile/follow',
    component:follow
  },
  {
    path: '/profile/more/wallet/withdraw',
    component:wallet_withdraw
  }
  
  
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
