<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.childern" :key="subItem.path">
                <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{subItem.label}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
import router from '@/router';

export default {
    data() {
        return {
            menuData: [
                {
                    path: "/deviceorderhome/deviceorder",
                    name: "deviceorder",
                    label: "设备预约",
                    icon: "menu",
                    // url: "BackEnd/BackHome",
                },
                {
                    path: "/deviceorder/deviceorder",
                    name: "deviceorder",
                    label: "我的预约",
                    icon: "setting",
                    // url: "backend/Document",
                },
            ],
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        //点击菜单
        clickMenu(item) {
            //当前页面的路由与跳转的路由不一致才允许跳转
            if (this.$route.path !== item.path) {
                this.$router.push(item.path)
            }
            this.$store.commit('selectMenu',item)
        }
    },
    computed: {
        //没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.childern)
        },
        //有子菜单
        hasChildren() {
            return this.menuData.filter(item => item.childern)
        },
        isCollapse(){
            return this.$store.state.tab.isCollapse
        }
    },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100vh;
    border-right:none;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400px;
    }
}
</style>