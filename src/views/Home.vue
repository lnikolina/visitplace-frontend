<template>
	<div>
		<section class="image">
			<div
				class="image__bg"
				style="
					background-image: url('https://firebasestorage.googleapis.com/v0/b/visitporec-3d39f.appspot.com/o/bg-imgs%2FScreenshot%202022-09-22%20at%2019.00.54.png?alt=media&token=0cbff426-4043-4e67-91a3-76abd1534fac');
				"
			></div>
			<section class="vh-100">
				<div class="container py-5 h-100">
					<div
						class="row d-flex justify-content-center align-items-center h-100"
					>
						<div class="col-12 col-md-8 col-lg-6 col-xl-5">
							<div class="card shadow-2-strong" style="border-radius: 1rem">
								<div class="card-body p-5 text-center">
									<h3 class="mb-5">Login</h3>

									<div class="form-outline mb-4">
										<input
											type="email"
											v-model="email"
											id="typeEmailX-2"
											class="form-control form-control-lg"
										/>
										<label class="form-label" for="typeEmailX-2">Email</label>
									</div>

									<div class="form-outline mb-4">
										<input
											type="password"
											v-model="password"
											id="typePasswordX-1"
											class="form-control form-control-lg"
										/>
										<label class="form-label" for="typePasswordX-2"
											>Password</label
										>
									</div>

									<!-- Checkbox -->

									<button
										class="btn btn-primary btn-lg btn-block"
										type="button"
										@click="login()"
									>
										Login
									</button>
									<div class="form-footer">
										<p>
											Don't have an account?
											<router-link :to="{ name: 'Registracija' }"
												>Sign Up</router-link
											>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	</div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from "@/firebase";
import axios from "axios";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
	name: "Home",

	data() {
		return {
			email: "",
			password: "",
		};
	},
	beforeUpdate() {
		if (this.currentUser) {
			this.$router.replace({ name: "Main" });
		}
	},
	computed: {
		...mapGetters({ currentUser: "currentUser" }),
	},
	methods: {
		...mapActions({ fetchCurrentUser: "fetchCurrentUser" }),
		...mapMutations({ setBearerToken: "setBearerToken" }),
		async login() {
			try {
				const result = await axios.post("/auth", {
					email: this.email,
					password: this.password,
				});
				localStorage.setItem("token", result.data.token);
				await this.fetchCurrentUser();
				this.$router.replace({ name: "Main" });
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style>
.image {
	position: relative;

	height: 100vh;
	width: 100%;
}

.image__bg {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;

	height: 100%;
	width: 100%;

	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	overflow-x: hidden;
}
</style>
