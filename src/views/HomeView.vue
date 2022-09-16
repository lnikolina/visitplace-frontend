<template>
  <div class="home text-center">
    
    <h1>Welcome!</h1>
    <p>These are some places you can visit in Poreč</p>


    <div class="card text-center">
      <div class="card-header">
        VisitPoreč
      </div>
      <div class="card-body">
        <h5 class="card-title">Special places for all research lovers</h5>
        <p class="card-text">Here you will find all available must-see places.</p>
        
      </div>   
    </div>
  </div>
</template>



<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
   HelloWorld
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
