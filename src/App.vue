<template>
  <div id="app">

    <nav class="nav justify-content-center"> 
        <router-link class="nav-link active" to="/">Home</router-link> 
        <router-link class="nav-link" to="/beach">Beach</router-link> 
        <router-link class="nav-link" to="/shops">Shops</router-link> 
        <router-link class="nav-link" to="/history">History</router-link> 
        <router-link class="nav-link" to="/signup">Sign up</router-link> 
        <router-link class="nav-link" to="/login">Log in</router-link> 
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
