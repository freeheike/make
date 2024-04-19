<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#333" text-color="#fff" active-text-color="#ffd04b" style="font-size: 2rem;">
        <h3>{{ isCollapse ? '后台' : '三方电气有限公司' }}</h3>
        <!-- <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.id" :index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.id" :index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.name }}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.childern" :key="subItem.id">
                <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.name }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu> -->
        <div v-for="item in menuData" :key="item.id" style="font-size: 2rem;">
      <div v-if="item.path">
        <el-menu-item :index="item.path" @click="clickMenu(item)" style="font-size: 0.08rem; height: 0.25rem;  display: flex; align-items: center; justify-content:left;" >
          <i :class="item.icon" style="font-size: 0.08rem; width: 0.2rem; "></i>
          <span slot="title" style="font-size: 0.08rem; height: 0.25rem;  display: flex; align-items: center; justify-content:left;">{{ item.name }}</span>
        </el-menu-item>
      </div>
      <div v-else style="font-size: 0.08rem; ">
        <el-submenu :index="item.id + ''" >
            
          <template slot="title" style="font-size: 0.08rem; height: 0.25rem;">
            <i :class="item.icon" style="font-size: 0.08rem; width: 0.2rem; "></i>
            <span slot="title" style="font-size: 0.08rem; height: 0.25rem; ">{{ item.name }}</span>
          </template>
          <div  v-for="subItem in item.children" :key="subItem.id" style="font-size: 0.08rem; height: 0.25rem;">
            <el-menu-item :index="subItem.path" @click="clickMenu(subItem)" style="font-size: 0.08rem; height: 0.25rem;  display: flex; align-items: center; justify-content:left;">
              <i :class="subItem.icon" style="font-size: 0.08rem; width: 0.1rem; "></i>
              <span slot="title"  style="font-size: 0.08rem; height: 0.25rem;  display: flex; align-items: center; justify-content:left;">{{ subItem.name }}</span>
            </el-menu-item>
          </div>
        </el-submenu>
      </div>
    </div>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            menuData: [
                // {
                //     path: "/backend/backhome",
                //     name: "backhome",
                //     label: "首页",
                //     icon: "s-home",
                //     // url: "BackEnd/BackHome",
                // },
                // {
                //     label: "权限管理",
                //     icon: "right",
                //     childern: [
                //         {
                //             path: "/backend/project",
                //             name: "project",
                //             label: "项目管理",
                //             icon: "s-home",
                //             // url: "Jurisdiction/Project",
                //         },
                //         {
                //             path: "/backend/role",
                //             name: "role",
                //             label: "角色管理",
                //             icon: "s-home",
                //             // url: "Jurisdiction/Role",
                //         },
                //         {
                //             path: "/backend/user",
                //             name: "user",
                //             label: "用户管理",
                //             icon: "user",
                //             // url: "Jurisdiction/User",
                //         },
                //     ],
                // },
                // {
                //     path: "/backend/document",
                //     name: "document",
                //     label: "文件管理",
                //     icon: "files",
                //     // url: "backend/Document",
                // },
                // {
                //     path: "/backend/notice",
                //     name: "notice",
                //     label: "公告管理",
                //     icon: "tickets",
                //     // url: "Notice/Notice",
                // },
                // {
                //     path: "/backend/record",
                //     name: "record",
                //     label: "操作记录",
                //     icon: "thumb",
                //     // url: "/backend/record",
                // },
                // {
                //     label: "设备管理",
                //     icon: "s-tools",
                //     childern: [
                //         {
                //             // path: "/backend/devicemanagement",
                //             // name: "devicemanagement",
                //             path: "/backend/devicemanagement",
                //             name: "devicemanagement",
                //             label: "固定资产",
                //             icon: "s-home",
                //             // url: "Jurisdiction/Project",
                //         },
                //         {
                //             // path: "/backend/devicemanagement",
                //             // name: "devicemanagement",
                //             path: "/backend/equipledger",
                //             name: "equipledger",
                //             label: "设备台帐",
                //             icon: "s-home",
                //             // url: "Jurisdiction/Project",
                //         },
                //         {
                //             path: "/backend/equipmentInspectionPlan",
                //             name: "equipmentiInspectionPlan",
                //             label: "设备送检计划",
                //             icon: "s-home",
                //             // url: "Jurisdiction/Role",
                //         },
                //         {
                //             path: "/backend/periodVerificationPlan",
                //             name: "periodVerificationPlan",
                //             label: "期间核查计划",
                //             icon: "user",
                //             // url: "Jurisdiction/User",
                //         },
                //     ],
                //     // url: "/backend/devicemanagement",
                // },
                // {
                //     label: "预约管理",
                //     icon: "s-comment",
                //     childern: [
                //         {
                //             path: "/backend/deviceappointment",
                //             name: "deviceappointment",
                //             label: "设备预约",
                //             icon: "s-home",
                //             // url: "Jurisdiction/deviceappointment",
                //         },
                //         {
                //             path: "/backend/area",
                //             name: "area",
                //             label: "场地管理",
                //             icon: "area",
                //             // url: "backend/Document",
                //         },
                //         {
                //             path: "/backend/guestreservation",
                //             name: "role",
                //             label: "客餐预约",
                //             icon: "s-home",
                //             // url: "Jurisdiction/guestreservation",
                //         },
                //     ],
                // },

            ],
        };
    },
    created(){
        let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
        this.menuData = user.backMenus
        // console.log( 111)
        // console.log(  this.menuData )
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
            
            if (!item.path.includes("/backend")) {
                item.path = "/backend" + item.path;
            }

            //当前页面的路由与跳转的路由不一致才允许跳转
            if (this.$route.path !== item.path) {
                // this.$router.push("/backend"+item.path)
                this.$router.push(item.path)

            }
            this.$store.commit('selectMenu', item)
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
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    },
};
</script>

<style lang="less" scoped>
html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-size: 2rem;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 1.2rem;
    height: 7rem;
    font-size: 2rem;
}

.el-menu {
    height: 100%;
    border-right: none;
    font-size: 2rem;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 0.1rem;
        font-size: 0.09rem;
        font-weight: 400;
    }
}

/* Set background color for the entire screen */
body {
    background-color: #333;
    height: 2rem;
}

/* Set background color for el-menu when it's collapsed */
.el-menu--collapse {
    background-color: #333;
    font-size: 2rem;
}

/* Set background color for el-menu when it's not collapsed */
.el-menu:not(.el-menu--collapse) {
    background-color: #333;
    font-size: 2rem;
}
</style>