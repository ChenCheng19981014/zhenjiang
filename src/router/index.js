import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const routes = [
  {
    name: "index",
    path: "/",
    meta: {
      keepAlive: true, //设置页面是否需要使用缓存
    },
    component: () => import("./../views/index.vue"),
    redirect: "/park",
    children: [
      {
        path: "/park",
        name: "park",
        meta: {
          keepAlive: true, //设置页面是否需要使用缓存
        },
        component: () => import("./../views/park/index.vue"),
      },
    ],
  },
];

let router = new Router({
  routes
})

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
