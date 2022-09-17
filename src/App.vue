<template>
  <div>
    <div id="app">

      <nav class="nav nav-pills nav-fill"> 
          <router-link class="nav-link" to="/">VisitPoreč</router-link> 
          <router-link class="nav-link" to="/postimage">Post</router-link> 
          <router-link class="nav-link" to="/activities">Activities</router-link>  
          <router-link class="nav-link" to="/attractions">Attractions</router-link>
          <router-link class="nav-link" to="/login">Log in</router-link> 
          <router-link class="nav-link" to="/signup">Sign up</router-link> 
          
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input v-model="store.searchTerm" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>

      </nav>
      
      <router-view/>
    </div>
  </div>
</template>


<script>
import store from "@/store"


export default {
  name: 'app',
    data () {
      return {
      store: store,
      };
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
