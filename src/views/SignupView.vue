<template>
  <div class="about">
      <div class="mx-auto" style="width: 200px;">    
    <div class="align-middle"> <br><br>
<form>
  <div class="form-group">
    <label for="exampleFullName">Full Name</label>
    <input v-model="fullname" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input v-model="username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group">
    <label for="repeatPassword">Repeat Password</label>
    <input v-model="repeatpassword" type="password" class="form-control" id="exampleInputPassword1">
  </div>

<div class="container">
  <div class="row">
    <div class="col-sm">
      <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">Male
  </label>
</div>
    </div>
    <div class="col-sm">
      <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">Female
  </label>
</div>
    </div>
  </div>
</div><br><br>

  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">I accept and understand the terms</label>
  </div>
  <button type="button" @click="singup" class="btn btn-primary">Registracija</button>
</form>
</div>
</div>
  </div>
</template>

<script>
import {firebase} from '@/firebase.js'
export default {
  name: "SingnUp",
  data(){
    return{
      fullname:'',
      username:'',
      password:'',
      repeatpassword:'',
    };
  },
  methods: {
    singup(){
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password).then(
        function(){
          console.log('Usiješna registracija');
        }
      )
      .catch(function(error){
        console.error('Došlo je do greške', error);
        alert('Password mora minimalno 6 znakova!!');
      })
      console.log('Nastavak');
          }
  }
}
</script>