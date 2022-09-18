<template>
  <div>
    <div id="app">

      <nav class="nav nav-pills nav-fill text-color:black"> 
          <router-link class="nav-link" to="/">VisitPlace</router-link> 
          <router-link v-if="!store.currentUser" class="nav-link" to="/login">Log in</router-link> 
          <router-link v-if="!store.currentUser" class="nav-link" to="/signup">Sign up</router-link> 
          <li class="nav-item">
            <a v-if="store.currentUser" href="#" @click="logout()" id="link2">Logout</a>
          </li>
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input v-model="store.searchTerm" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>

      </nav>
    </div>
  </div>
</template>


<script>
import store from '@/store';
import router from '@/router';
import { firebase } from '@/firebase';
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const currentRoute = router.currentRoute;

firebase.auth().onAuthStateChanged(auth, user => {
  const currentRoute = router.currentRoute;
    if(user) {
      console.log('*** User', user.email);
      store.currentUser = user.email;;
    }
    else{
      console.log("**** No user");
      store.currentUser = null;  

      if (router.name !== "login") {
        router.push ({name : "login"})
      }
        
    }
});
export default {
  name:'app',
  data(){
    return{
      store,
    };
  },
  methods: {
    logout(){
      const auth = getAuth().signOut().then(() => {
          this.$router.push({ name: 'login' });
      });
    },
  },
};  
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



nav {
  padding: 30px;
  color: black;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
