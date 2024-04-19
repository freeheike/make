import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./plugins/element.js";
//导入字体图标
import "./assets/fonts/iconfont.css";
//导入全局样式表
import "./assets/css/global.css";
import Cookie from "js-cookie";
import request from "./utils/request";
import 'highlight.js/styles/monokai-sublime.css'
import "lib-flexible"
// import "../src/api/mockServeData/user"
// import store from './store'
// VueAxios 与 axios 的位置不能交换，否则出现 TypeError: Cannot read property 'protocol' of undefined
Vue.use(VueAxios, axios);
// 配置请求的根路径
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
Vue.prototype.request = request
Vue.prototype.$baseUrl = process.env.VUE_APP_BASEURL
Vue.use(ElementUI)
//添加全局前置导航守卫
router.beforeEach((to, from, next) => {
    // // 检查localStorage中是否有用户数据
    // const data = sessionStorage.getItem("data");
  
    // if (!data && to.name !== 'login') {
    //   // 如果用户未登录且目标路由不是登录页面，重定向到登录页面
    //   next({ name: 'login' });
    // } else if (data && to.name === 'login') {
    //   // 如果用户已登录且目标路由是登录页面，重定向到其他页面，如首页
    //   next({ name: 'home' });
    // } else {
    //   // 其他情况，允许访问目标路由
    //   next();
    // }
 
  //data存不存在
  const data = sessionStorage.getItem("data")
  //data不存在，说明当前用户未登录,应该跳转至登陆页面
  if (!data && to.name !== 'login') {
    next({name:'login'})
    
  }else if(data && to.name === 'login'){//data存在,说明用户已登陆，跳转至首
    next({name:'home'})
  }else{
    next()
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
