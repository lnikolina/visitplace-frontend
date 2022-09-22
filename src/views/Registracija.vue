
<template >
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Register</h3>

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
                <label class="form-label" for="typePasswordX-2">Password</label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
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
import { auth, createUserWithEmailAndPassword } from "@/firebase";

export default {
  name: "registracija",
  data() {
    return {
      email: "",
      password: "",
      passwordrepeat:"",
    };
  },
  methods: {
    registracija() {
        if(this.password==this.passwordrepeat){
            createUserWithEmailAndPassword(auth, this.email, this.password)
              .then(console.log("Uspješna registracija"))
              .catch(function (error) {
                alert(error);
              });
        
   }else{
     alert("Password not matching");
   }
    },
  },
};
</script>

<style >
body{
    background-image: url('https://firebasestorage.googleapis.com/v0/b/visitporec-3d39f.appspot.com/o/bg-imgs%2FScreenshot%202022-09-22%20at%2019.00.54.png?alt=media&token=0cbff426-4043-4e67-91a3-76abd1534fac');
    
    
    height: 100%;
    width: 100%;

    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    
}

.clrk{
    background-color: rgb(255, 2555, 2555, 0.8) !important;
}

</style>