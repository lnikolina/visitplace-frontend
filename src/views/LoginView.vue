<template>
  <div class="about">
      <div class="mx-auto" style="width: 200px;">    
    <div class="align-middle"> <br><br>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input v-model="username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember me</label><br>
  </div>
  <button type="button" @click="login" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
  </div>
</template>

<script>
import {firebase} from '@/firebase.js';
export default {
  name: 'Login',
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods: {
    login(){
      console.log('login..' + this.username);
      firebase
      .auth()
      .signInWithEmailAndPassword(this.username, this.password)
      .then((result) => {
        console.log('Uspiješna prijava..', result);
      })
      .catch(function(e) {
        console.error('Greška', e);
      });
    }
}
}
</script>