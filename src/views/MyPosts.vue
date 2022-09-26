<template>
	<div>
		<h3>My Posts</h3>
		<div v-for="img in imgdata" v-bind:key="img._id">
			<div class="boredri">
				<p></p>
				<button class="btn deletebtn" type="button" @click="deleteimg(img._id)">
					Delete
				</button>
				<img class="imgaesfor" :src="img.photoURL" alt="something" />
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "myuploads",
	data() {
		return {
			imgdata: [],
		};
	},
	methods: {
		async loaddata() {
			try {
				const results = await axios.get("/posts/me");
				this.imgdata = results.data;
			} catch (error) {
				console.log(error);
			}
		},
		async deleteimg(id) {
			try {
				await axios.delete(`/posts/${id}`);
				this.imgdata = this.imgdata.filter((elem) => elem._id !== id);
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

<style scoped>
.deletebtn {
	margin-top: -3%;
	width: 35%;
	height: 60px;
	background-color: rgb(231, 73, 73);
	border-color: rgb(231, 73, 73);
	color: white;
	font-weight: bold;
}
.deletebtn:hover {
	background-color: red;
	border-color: red;
	color: white;
	font-weight: bold;
}

.boredri {
	width: 35%;
	height: 45%;
	background-color: grey;
	box-shadow: 10px 10px 5px #aaaaaa;
	border-radius: 15px;
	margin-bottom: 5%;
	margin-top: 5%;
	margin-left: 32%;
}
.imgaesfor {
	margin-top: 5%;
	width: 90%;
	height: 80%;
	padding: 15px;
}
</style>
