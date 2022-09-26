<template>
	<section class="vh-100">
		<div class="container py-5 h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-12 col-md-8 col-lg-6 col-xl-5">
					<div class="card shadow-2-strong" style="border-radius: 1rem">
						<div class="card-body p-5 text-center">
							<h3 class="mb-2">Register</h3>
							<div class="form-outline mb-4">
								<input
									type="text"
									name="firstName"
									v-model="firstName"
									id="typeEmailX-2"
									class="form-control form-control-lg"
								/>
								<label class="form-label" for="typeEmailX-2">First name</label>
							</div>

							<div class="form-outline mb-4">
								<input
									type="text"
									name="lastName"
									v-model="lastName"
									id="typeEmailX-2"
									class="form-control form-control-lg"
								/>
								<label class="form-label" for="typeEmailX-2">Last name</label>
							</div>

							<div class="form-outline mb-4">
								<input
									type="email"
									name="email"
									v-model="email"
									id="typeEmailX-2"
									class="form-control form-control-lg"
								/>
								<label class="form-label" for="typeEmailX-2">Email</label>
							</div>

							<div class="form-outline mb-4">
								<input
									type="password"
									name="password"
									v-model="password"
									id="typePasswordX-1"
									class="form-control form-control-lg"
								/>
								<label class="form-label" for="typePasswordX-2">Password</label>
							</div>

							<div class="form-outline mb-4">
								<input
									type="password"
									name="password2"
									v-model="passwordrepeat"
									id="typePasswordX-2"
									class="form-control form-control-lg"
								/>
								<label class="form-label" for="typePasswordX-2"
									>Repeat Password</label
								>
							</div>

							<!-- Checkbox -->

							<button
								class="btn btn-primary btn-lg btn-block"
								type="button"
								@click="registracija()"
							>
								Register now
							</button>
							<hr class="my-4" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
	name: "registracija",
	data() {
		return {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			passwordrepeat: "",
		};
	},
	methods: {
		...mapActions({ fetchCurrentUser: "fetchCurrentUser" }),
		async registracija() {
			if (this.password !== this.passwordrepeat) {
				return alert("Passwords must match!");
			}

			if (this.password.length < 5) {
				return alert("Password must be at least 6 characters long!");
			}

			try {
				const result = await axios.post("/user", {
					firstName: this.firstName,
					lastName: this.lastName,
					email: this.email,
					password: this.password,
				});
				localStorage.setItem("token", result.data.token);
				await this.fetchCurrentUser();
				this.$router.replace({ name: "Main" });
				console.log(result.data);
			} catch (error) {
				return alert(error.response.data.msg || "Unknown error");
			}
		},
	},
};
</script>

<style>
body {
	background-image: url("https://firebasestorage.googleapis.com/v0/b/visitporec-3d39f.appspot.com/o/bg-imgs%2Ftravel.webp?alt=media&token=e1df7e3d-ea21-4819-9078-ca461e03f4fb");

	height: 100%;
	width: 100%;

	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
}

.clrk {
	background-color: rgb(255, 2555, 2555, 0.8) !important;
}
</style>
