import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import count from '@/components/count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/hi',
      component:Hi,
      children:[
        {path:'/',component:Hi, name: 'hi'},
        {path:'hi1',component:Hi1, name: 'hi1'},
        {path:'hi2',component:Hi2, name: 'hi2'}
      ]
    },{
      path:'/muilti-view-area',
      components:{
        default:HelloWorld,
        left:Hi1,
        right:Hi2
      }
    },{
      path:'/vuex',
      name:'vuex',
      component:count
    }
  ]
})
