import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/index"
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const BaseRouter = [
	{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/profile/Profile')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/auth/Login')
  }
]

const routes = new Router({
	mode: 'history',
	routes: BaseRouter
})


routes.beforeEach((to, before, next) => {
    console.log(store.state.isLogin, to.path);
    // console.log(store.state.token);
    if(to.path != '/login'){
        if (store.state.isLogin == true){
            next();
        }else{
            next({
                path: '/login'
            })
        }
    }else{
        next()
    }
    next()
})

export default routes
