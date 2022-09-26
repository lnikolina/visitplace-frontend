import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({

// Core Concepts (state, getters, mutations, actions)	
	state: {
		bearerToken: localStorage.getItem("token"),
		currentUser: null,
		userLoading: true,
	},
	getters: {
		currentUser(state) {
			return state.currentUser;
		},
	},
	mutations: {  // jedini nacin za stvarno izmijenim stanje u vuex-u
		setCurrentUser(state, payload) {
			state.currentUser = payload;
		},
		setUserLoading(state, payload) {
			state.userLoading = payload;
		},
		logout(state) {
			state.currentUser = null;
			state.bearerToken = null;
			localStorage.removeItem("token");
		},
		setBearerToken(state, payload) {
			console.log("PAYLOAD", payload);
			if (payload) {
				axios.defaults.headers["Authorization"] = `Bearer ${payload}`;
			} else {
				delete axios.defaults.headers["Authorization"];
			}
			state.bearerToken = payload;
		},
	},
	actions: { // umjesto mutacije stanja, akcije izvrsavaju mutaciju
		async fetchCurrentUser({ commit }) {
			console.log(localStorage.token);
			if (localStorage.token) {
				commit("setBearerToken", localStorage.token);
			}
			try {
				const res = await axios.get("/user");
				commit("setCurrentUser", res.data);
				commit("setUserLoading", false);
			} catch (error) {
				console.log(error);
				localStorage.removeItem("token");
				commit("setBearerToken", null);
				commit("setCurrentUser", null);
			}
		},
	},
});
