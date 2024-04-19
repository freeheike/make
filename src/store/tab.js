// import { indexOf } from "core-js/core/array"

export default {
    state:{
        isCollapse:false,//控制菜单的展开还是收起
        tabsList:[
            {
                path: "/backend/backhome",
                name: "主页",
                label: "主页",
                icon: "s-home",
                // url: "BackEnd/BackHome",
            },
        ]
    },
    mutations:{
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        //更新面包屑数据
        selectMenu(state,val){
            // console.log(val,'val')
            //判断添加的数据是否为首页
            // console.log(state.tabsList)
            
            // if (!val.path.includes("/backend")) {
            //     val.path = "/backend" + val.path;
            // }

            if (val.name !== '主页'){
               
                const index = state.tabsList.findIndex(item => item.name === val.name )
                // console.log(index)
                //如果不存在
                if(index === -1){
                    state.tabsList.push(val)
                }
            }

        },
        //删除指定的tag数据
        closeTag(state,item){
            // console.log(item,'item')
            // console.log(item.name)
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index,1)
        },

        logout(){
            sessionStorage.clear("data")
            localStorage.clear();
            this.$router.push({ path: '/login' })
        }
    }
}