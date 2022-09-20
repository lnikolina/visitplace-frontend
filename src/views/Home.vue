<template>
  <div>
    <section class="image">
          <div class="image__bg" style="background-image: url('https://content.r9cdn.net/rimg/dimg/35/79/a5d7cc14-city-47354-168ba06649d.jpg');"></div>
           <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
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
                <label class="form-label" for="typePasswordX-2">Password</label>
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
              <p>Don't have an account? <a href="Registracija">Sign Up</a></p>
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


export default {
  name: "Home",

   data() {
    return {
      email: "",
      password: "",
    };
  },
  methods:{
    login(){
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((result) => {
          this.$router.push({ name: "Main" });
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
};
</script>


<style >
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
      filter: blur(3px);
  -webkit-filter: blur(3px);
}
</style>