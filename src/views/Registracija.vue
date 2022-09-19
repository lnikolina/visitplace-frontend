
<template >
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Registracija</h3>

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
                <label class="form-label" for="typePasswordX-2">Lozinka</label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  v-model="passwordrepeat"
                  id="typePasswordX-2"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="typePasswordX-2"
                  >Ponovite lozinku</label
                >
              </div>

              <!-- Checkbox -->

              <button
                class="btn btn-primary btn-lg btn-block"
                type="button"
                @click="registracija()"
              >
                Registriraj se
              </button>
            <div >
              <p>Don't have an account? <a href="Registracija">Sign Up</a></p>
            </div>
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
        
            createUserWithEmailAndPassword(auth, this.email, this.password)
              .then(console.log("Uspješna registracija"))
              .catch(function (error) {
                alert(error);
              });
        
   
    },
  },
};
</script>