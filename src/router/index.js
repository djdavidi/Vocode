import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";

Vue.use(Router);
// show id example, going to user profile here.
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
