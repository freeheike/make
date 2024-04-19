<template>
  <body>
    <div style="background-color: #01743b; width: 100%; background-position: left; height: 2vh;">
      &emsp;
    </div>
    <div class="logo"></div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      menu-trigger="hover" style="width: 20%; height: 5vh;background-position: center bottom;">
      <el-menu-item index="1" @click="home" style="width: 80%; height: 5vh; font-size: 0.08rem;padding-left: 0.5rem; ">首页</el-menu-item>
   
      <el-submenu index="4" style=" text-align: center ;display: flex;align-items: center;width: 80%; height: 5vh;font-size: 0.08rem;">
        <template slot="title" style=" text-align: center;align-items: center;width: 80%; height: 5vh;font-size: 0.08rem;"><span style="font-size: 0.08rem;">个人中心</span></template>
        <el-menu-item @click="clickMenu(item)" v-for="item in menuData" :key="item.name" :index="item.name" style="font-size: 0.08rem;height: 0.2rem;align-items: center; ">
          <template slot="title"  style="font-size: 0.08rem;height: 5rem; width: 0.1rem;">
            <span slot="title"  style="font-size: 0.08rem; height: 5rem;width: 0.3rem;">{{ item.label }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </body>
</template>

<script>
import Cookie from 'js-cookie'
import { resetRouter } from '@/router';
export default {
  data() {
    return {
      menuData: [],
      activeIndex: "",
    };
  },
  created() {
    //请求分页查询
    this.load()
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    home() {
      this.$router.push({ path: '/home' })
    },
    // news() {
    //   this.$router.push({ path: '/news' })
    // },
    // myproject() {
    //   this.$router.push({ path: '/myproject' })
    // },
      clickMenu(item) {
      if (item.name === 'exit') {
        Cookie.remove('data')
        sessionStorage.clear()
        localStorage.removeItem("user")
        localStorage.removeItem("issuer")
        localStorage.removeItem("projectName")
        localStorage.removeItem("projectId")
        // localStorage.clear();
        // resetRouter()
        this.$router.push({ path: '/login' })
      } else {
        this.$router.push(item.path)
      }
    },
    load() {
      this.request.get("/menu")
        .then(
          res => {
            const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
            // if ((user.role && user.role == '管理员')|| user.role && user.role == '超级管理员') {
            if (user.role && user.role.includes('管理员')) {
              this.menuData = res.data
            } else {
              this.menuData = res.data.filter(item => item.name != 'admin')
            }
            if(user.role === '系统管理员'){
    this.menuData  = this.menuData.filter(item => item.name != 'personal')
    this.menuData  = this.menuData.filter(item => item.name != 'edit')
  }
          }
        )
    },
  }
}
</script>

<style lang="less" scoped>
.logo {
  background-color: #fff;
  background-image: url("../assets/sanfangdianqi.png");
  background-size: 50% 100%;
  background-repeat: no-repeat;
  position: absolute;
  padding: 0px;
  width: 80%;
  height: 10%;
  top: 6%;
  left: 15vh;
}

.el-menu-demo {
  top: 8%;
  left:70%;
  width: 100px;
  display: flex;
  color: #000000;
  /* float: right; */
  position: absolute;
  border: 0 !important;
  border-bottom: none;
  text-decoration: none;
}

.el-menu-demo .el-menu-item {
  border-bottom-color: #ffffff !important;
  text-align: center ;
  display: flex;
  align-items: center;
}

.el-menu .el-menu-item:hover,
.el-submenu .el-submenu__title:hover,
.el-menu .el-menu-item.is-active {

  color: #000000 !important;
  background: #01743B !important;
  background-position: center bottom !important;
}



</style>