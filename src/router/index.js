import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import AticleDetail from '@/pages/article_detail'
import Timeaxis from '@/pages/time_axis'
import Message_Board from '@/pages/message_board'
import About_Me from '@/pages/about_me'
import Writing_Work from '@/pages/writing_work'
import Writing_Life from '@/pages/writing_life'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
    	path: '/article_detail',
    	name: "artdetail",
    	component: AticleDetail
    },
    {
    	path: "/time_axis",
    	name: "time_axis",
    	component: Timeaxis
    },
    {
      path: "/message_board",
      name: "message_board",
      component: Message_Board
    },
    {
      path: "/about_me",
      name: "about_me",
      component: About_Me
    },
    {
      path: "/writing_work",
      name: "writing_work",
      component: Writing_Work
    },
    {
      path: "/writing_life",
      name: "writing_life",
      component: Writing_Life
    }
  ]
})
