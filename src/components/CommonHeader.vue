<template>
    <div class="header-container">
        <div class="l-content">
            <el-button style="margin-right: 20px" @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <!--面包屑-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" :src="imgPath" alt="" />
                </span>
                <el-dropdown-menu slot="dropdown">
 <el-dropdown-item @click.native="personal" v-if="user.role!=='系统管理员'"
 style="font-size: 0.07rem;height: 0.15rem;display: flex;align-items: center;">个人中心</el-dropdown-item>
 <el-dropdown-item @click.native="exit"
 style="font-size: 0.07rem;height: 0.15rem;display: flex;align-items: center;">退出后台</el-dropdown-item>
 </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
// import Cookie from 'js-cookie'
export default {
    data() {
        return { 
            user:'',
            imgPath: '' };

    },
    methods: {
        handleMenu() {
            this.$store.commit("collapseMenu");
        },
        exit() {
            console.log('1111')
            this.$router.push({ path: "/home" });
        },
        personal() {
            this.$router.push({ path: "/personal" });
        },
    },
    computed: {
        ...mapState({
            tags: (state) => state.tab.tabsList,
        }),

    },
     created() {
        let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
        this.user = user
        this.request.get("/userInfo/" + user.id).then(res => {
            // console.log(res)
            if (res.code === '200') {
                this.form = res.data;
                this.imgPath = res.data.imgPath
            }
        })
    },
    mounted() {
        console.log(this.tags, "tags");
    },
};
</script>

<style lang="less" scoped>
.header-container {
    padding: 0 20px;
    background-color: rgb(51, 51, 51);
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.2rem;

    .text {
        color: #fff;
        font-size: 0.2rem;
        margin-left: 10px;
    }
}

.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}

.l-content {
    display: flex;
    align-items: center;
    color: rgb(199, 29, 29);
    // .el-breadcrumb_item {
    //     .el-breadcrumb_inner {
    //         font-weight: normal;
    //         &.is-link {
    //             color: white !important;
    //         }
    //     }

    //     &:last-child {
    //         .el-breadcrumb_inner {
    //             color: white !important;
    //         }
    //     }
    // }
}

/* 不被选中时的颜色 */
.el-breadcrumb ::v-deep .el-breadcrumb__inner {
    color: #ca7910 !important;
    font-weight: 400 !important;
}

/* 被选中时的颜色 */
.el-breadcrumb__item:last-child ::v-deep .el-breadcrumb__inner {
    color: #fc9105 !important;
    font-weight: 800 !important;
    font-size: 0.09rem;
}
</style>
