import Vue from "vue"
import Router from "vue-router"
import Food from "@/pages/food/Food"
import Movie from "@/pages/movie/Movie"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/food",
      name: "Food",
      component: Food
    },
    {
      path: "/movie",
      name: "Movie",
      component: Movie
    }
  ]
})
