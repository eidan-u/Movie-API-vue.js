import Vue from 'vue'
import Router from 'vue-router'


import blog from './../views/blog.vue'
import film from './../views/film.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: blog },
        { path: '/film', component: film }
    
    ]
})