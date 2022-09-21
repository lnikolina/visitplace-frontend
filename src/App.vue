<template>
  <div id="app">
       <nav id="nav" class="navbar navbar-expand-lg navbar ">
       <div class="container-fluid">
        <a class="navbar-brand" href="#">VisitPlace</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li  v-if="!store.currentUser" class="nav-item">
            <router-link   to="/" class="nav-link">Home</router-link>
          </li>
                    <li  v-if="store.currentUser" class="nav-item">
            <router-link to="/main" class="nav-link">Home</router-link>
          </li>
          <li  v-if="!store.currentUser" class="nav-item">
            <router-link to="/registracija" class="nav-link">Register</router-link>
            
          </li>
                              <li  v-if="store.currentUser" class="nav-item">
            <router-link to="/upload" class="nav-link">Upload</router-link>
          </li>
          <li v-if="store.currentUser" class="nav-item ">
              <a href="#" class="nav-link" @click.prevent="logout()">Logout</a>
            </li>
        </ul>
      </div>
       </div>
    </nav>
    <router-view/>
  </div>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
 padding: 10px;
 background-color: #3d799c;

  a {
    color: #fff;

    &.router-link-exact-active {
      color: #213850;
    }
  }
  a:link { text-decoration: none; }


a:visited { text-decoration: none; }


a:hover { text-decoration: none; }


a:active { text-decoration: none; }



}
</style>

<script>
import store from "@/store";
 import  { auth, onAuthStateChanged } from "@/firebase";

 onAuthStateChanged(auth, function (user) {
  if (user) {
store.currentUser = user.email;

 }else{
      store.currentUser = null;
 }
 
 });

 export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push({ name: "Home" });
      });
    },
  },
 };

</script>
