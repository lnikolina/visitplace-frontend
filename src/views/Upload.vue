<template >
    <div>
    <section class="image">
          <div class="image__bg" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/visitporec-3d39f.appspot.com/o/bg-imgs%2Frobin-haussler-APlkTxwc_Vo-unsplash.jpg?alt=media&token=287b1bb4-c19a-4303-b13c-35f24bf2f9f6');"></div>
           <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <h2 style="color:#fff">VisitPlace</h2>
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <hr>
              <p class="mb-5 upld">UPLOAD YOUR IMAGE </p>
              <p class="mb-5 opl">and show to the world</p>


              <div class="form-outline mb-4">
              </div>

                 <input
        type="file"
        id="file"
        @change="uploadFile"
        class="uploadButton"
        accept="image/*"
      />
      <br><br><br>
        <label class="form-label placeInput1" for="typeEmailX-2">Location</label><br>
          <input
        type="Place"
        id="place"
        v-model="placeInput"
        class="placeInput"
        placeholder="Location of image"
      />
<br><br><br>
<hr>
              <button
                class="btn btn-primary btn-lg btn-block Disabled"
                type="button"
                id="btnnn"
                @click="uploadnow()"
              >
              UPLOAD
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </section>

    
  </div>


</template>

<style>

.image {
  position: relative;
  
  height: 100vh;
  width: 100%;
}

.image__bg{
   position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    height: 100%;
    width: 100%;

    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
      filter: blur(1.5px);
  -webkit-filter: blur(1.5px);
}


.upld{
  font-size:25px;
}

.opl{
  color: #1363f8;
  font-size:20px;
  margin-top:-40px;
}

.placeInput{
  margin-left: 0%;
  width: 70%;
}

.placeInput1{
  margin-right: 54.2%;

}

</style>


<script>
import { storage, ref,uploadBytes } from "@/firebase";
import {db, addDoc,collection} from "@/firebase";
import store from "@/store";

export default {
  name: "Home",
  data() {
    return {
      previewFiles: null,
      placeInput:"",
    };
  },

  methods: {
    uploadFile(event) {
      console.log(event);
      this.previewFiles = event.target.files[0];
    },
    uploadnow() {
        const splitUsr = store.currentUser.toUpperCase().split("@", 1).join("");
        const imgeName = splitUsr +"_"+ this.previewFiles.name;
        const docRef = addDoc(collection(db, "data"), {
          imgName: imgeName,
          User: store.currentUser,
          loc: this.placeInput
        });


const storageRef = ref(storage, 'imgs/'+imgeName);
if(this.placeInput.length!=0){
uploadBytes(storageRef, this.previewFiles).then((snapshot) => {
  console.log('Image is Uploaded');
  this.$router.go(this.$router.currentRoute)
});
    }else{alert("Please insert location")}
     
  },
}
}
</script>
