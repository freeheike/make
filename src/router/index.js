import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";


Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
    //修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
    }
    //解决vue路由重复导航错误
    //获取原型对象上的push函数

const routes = [
  { path: "/login", name:'login',component: Login },
 
];


const router = new VueRouter({
  mode: 'hash',
  routes,
  // routes: [
    // { path: "/login", name:'login',component: Login },
    // { path: "/home",name:'home', component: Home },
    // { path:"/personal",component: Personal},
    // { path:"/update",name:'update',component: Update},
    // { path:"/news",name:'news',component: News},
    // { path:"/newsdetails", name:'newsdetails',component: NewsDetails },
    // { path:"/myproject",component: MyProject},
    // { path:"/projectdetail",name:'projectdetail',component: ProjectDetail},
    // { path: "/backend", component: BackEnd , redirect:'/backend/backhome',
    //   children:[
    //     { path: "backhome", name:'backhome',component: BackHome },
    //     { path: "document",  name:'document',component: Document },
    //     { path: "notice", name:'notice', component: Notice },
    //     { path: "record", name:'record', component: Record },
    //     { path: "project",  name:'project',component: Project },
    //     { path: "user", name:'user', component: User },
    //     { path: "role",  name:'role',component: Role },
    //     { path: "devicemanagement",  name:'devicemanagement',component: DeviceManagement },
    //     { path: "equipledger",  name:'equipledger',component: EquipLedger },
    //     { path: "deviceappointment",  name:'deviceappointment',component: DeviceAppointment },
    //     { path: "guestreservation",  name:'guestreservation',component: GuestReservation },
    //     { path: "equipmentInspectionPlan",  name:'equipmentInspectionPlan',component: EquipmentInspectionPlan },
    //     { path: "periodVerificationPlan",  name:'periodVerificationPlan',component: PeriodVerificationPlan },
    //     { path: "area",  name:'area',component: Area },
    //   ]
    // },
    // { path:"/foodorderhome",component: FoodOrderHome, redirect:'/foodorderhome/foodorder',children:[
    //   { path: "foodorder", name:'foodorder',component: FoodOrder },
    //   { path: "myorder", name:'myorder',component: MyOrder },
    // ]},
    // { path:"/deviceorderhome",component: DeviceOrderHome, redirect:'/deviceorderhome/deviceorder',children:[
    //   { path: "deviceorder", name:'deviceorder',component: DeviceOrder },
    //   { path: "mydeviceorder", name:'mydeviceorder',component: MyDeviceOrder },
    // ]},
    // { path:"/devicehome",component: DeviceHome,redirect:'/devicehome/devicelist',children:[
    //   { path: "devicelist", name:'devicelist',component: DeviceList },
    //   { path: "deviceinspplan", name:'deviceinspplan',component: DeviceInspPlan },
    //   { path: "periodverificationplanf", name:'periodverificationplanf',component: PeriodVerificationPlanF },
    // ]},

  // ],
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  },

});

// 提供一个重置路由的方法
// export const resetRouter= () =>{
//   router.matcher =  new VueRouter({
//     mode: 'hash',
//     routes
//   })
// }
