import Vue from 'vue'
import Router from 'vue-router'
import All from '../components/all.vue'
import Active from '../components/active.vue'
import Completed from '../components/completed.vue'

//解决连续点击多次路由报错（必须加在use前）
const originalPush =Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

Vue.prototype.$goRoute = function(path){
  this.$router.push(path)
}

export default new Router({
  routes: [
    {
      path: '/all',
      component: All
    },
    {
      path: '/active',
      component: Active
    },
    {
      path: '/completed',
      component: Completed
    }
  ]
})
