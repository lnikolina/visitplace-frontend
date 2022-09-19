<template>
    <div class="about">
    <div class="container">
    <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
    <br/>

    <form>
    <div class="form-group">
    <p id="admin"><b>Log-In</b></p>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>

    <div id="loz" class="form-group">
    <label for="exampleInputPassword2">Password</label>
    <br/>
    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    <br/>
    </div>
 
    <button type="button" @click="login()" class="btn btn-primary">Submit</button>
    <br/>
    
    </form>
    </div>
    <div class="col-sm"></div>
    </div>
    </div>
    </div>
    </template>

<script>
import { firebase } from '@/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default{
    name:'login',
    data(){
        return{
            username:"",
            password:"",
        }
    },
    methods: {
        login(){
            console.log('login...' + this.username);
            firebase
            .auth()
            .signInWithEmailAndPassword(auth, this.username, this.password)
            .then((result) => {
                console.log('uspjesna prijava', result);
                    this.$router.replace({name: "home"});
                })
                .catch(function(e){
                    console.error('greska', e);
                });
        },
    },
    
};
</script>


<style lang="scss">
#admin{
    font-size:30px;
    color: grey;
}
</style>