<template>
	<div>
		<div class="row">
			<div v-for="img in imgdata" v-bind:key="img._id">
				<br />
				<div class="d-flex justify-content-center py-2">
					<div class="second">
						<div class="text3">
							<img src="~@/assets/user.png" class="imgNme" />
							<span class="userNames">
								{{ img.user.firstName + " " + img.user.lastName }}
							</span>
						</div>

						<img class="slike" :src="img.photoURL" alt="something" />
						<div class="thert">
							<span class="loc"
								><img src="~@/assets/world.png" class="imgWorld" />{{
									img.location
								}}</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
body {
	background-image: url("https://firebasestorage.googleapis.com/v0/b/visitporec-3d39f.appspot.com/o/bg-imgs%2Ftravel.webp?alt=media&token=e1df7e3d-ea21-4819-9078-ca461e03f4fb");
}

.slike {
	position: static;
	margin-top: 3%;
	margin-left: 12%;

	width: 80%;
	height: 80%;
	border-radius: 15px;
	margin-bottom: 5%;
}

.second {
	width: 800px;
	background-color: #3d799c;
	box-shadow: 5px 5px 5px #aaaaaa;
	border-radius: 15px;
	margin-bottom: 5%;
	text-align: left;
	margin-top: 2%;
}
.thert {
	width: 50%;
	background-color: white;

	margin-bottom: 4%;
	margin-top: -4%;
	margin-left: 40%;
	text-align: center;
}

.text3 {
	top: 550px;
	text-align: center;
	border: solid white 2px;

	background: white;
}
.userNames {
	font-size: 18px;
}

.imgNme {
	margin-top: -0.8%;
}

.imgWorld {
	width: 34px;
	height: 34px;
}

.loc {
	margin-top: -0.8%;
	font-size: 21px;
}
</style>

<script>
import { storage, ref, listAll, db, collection, getDocs } from "@/firebase";
import axios from "axios";

export default {
	name: "Home",
	data() {
		return {
			imgdata: [],
		};
	},
	methods: {
		async loaddata() {
			try {
				const rezultati = await axios.get("/posts");
				console.log(rezultati.data);
				this.imgdata = rezultati.data;
			} catch (error) {
				console.log(error);
			}
		},
	},
	created: function () {
		this.loaddata();
	},
};
</script>
