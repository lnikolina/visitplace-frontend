import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/upload",
		name: "Upload",
		meta: {
			needsAuth: true,
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Upload.vue"),
	},
	{
		path: "/registracija",
		name: "Registracija",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Registracija.vue"),
	},
	{
		path: "/main",
		name: "Main",
		meta: {
			needsAuth: true,
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Main.vue"),
	},
	{
		path: "/myposts",
		name: "MyPosts",
		meta: {
			needsAuth: true,
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/MyPosts.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeResolve((to, from, next) => {
	const user = store.getters.currentUser;
	const loading = store.getters.userLoading;
	if (to.meta.needsAuth && !user && !loading) {
		console.log("user", user);
		next({ name: "Home" });
		return;
	} else if (!to.meta.needsAuth && user && !loading) {
		next("/main");
		return;
	} else {
		next();
		return;
	}
});

export default router;
