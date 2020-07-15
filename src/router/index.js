import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '@/views/ListView.vue'
import DetailView from '@/views/DetailView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'list',
		component: ListView,
	},
	{
		path: '/detail',
		name: 'detail',
		component: DetailView,
	},
]

const router = new VueRouter({
	routes,
})

export default router
