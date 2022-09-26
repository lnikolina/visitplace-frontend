import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		bearerToken: localStorage.getItem("token"),
		currentUser: null,
	},
	mutations: {
		setCurrentUser(state, payload) {
			state.currentUser = payload;
		},
		setBearerToken(state, payload) {
			if (payload) {
				axios.defaults.headers["Authorization"] = `Bearer ${payload}`;
			} else {
				delete axios.defaults.headers["Authorization"];
			}
			state.bearerToken = payload;
		},
	},
	actions: {
		async fetchCurrentUser({ commit }) {
			if (localStorage.token) {
				commit("setBearerToken", localStorage.token);
			}
			try {
				const res = await axios.get("/user");
				commit("setCurrentUser", res.data);
			} catch (error) {
				console.log(error);
				localStorage.removeItem("token");
				commit("setBearerToken", null);
				commit("setCurrentUser", null);
			}
		},
	},
});
