import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import dangerr from "../components/danger/dangerr";
import danger from "../components/danger/danger";
export default new VueRouter({
  routes: [
    { path: "/dangerr", name: "dangerr", component: dangerr },
    {
      path: "/danger",
      name: "danger",
      component: danger
    },
    {
      path: "/",
      redirect: "/danger"
    }
  ]
});
