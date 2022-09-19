<template>
    <div class="about">
    <div class="container">
    <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
    <br/>

    <form>
    <div class="form-group">
    <p id="admin"><b>Sign-up</b></p>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <p id="mail">We'll never share you e-mail with anyone else.</p>
    </div>

    <div id="loz" class="form-group">
    <label for="exampleInputPassword2">Password</label>
    <br/>
    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>

    <div id="loz" class="form-group">
    <label for="exampleInputPassword2">Repeat password</label>
    <br/>
    <input type="password" v-model="passwordRepeat" class="form-control" id="exampleInputPassword2" placeholder="Password" /><br/>
    </div>
 
    <button type="button" @click="signup()" class="btn btn-primary">Submit</button>
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
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    export default {
        name: "signup",
        data() {
            return {
                username:"",
                password:"",
                passwordRepeat:"",
                
            };
        },
    methods:{
        signup(){
            firebase
            .auth()
            .createUserWithEmailAndPassword(auth, this.username, this.password).then(
                function(){
                    console.log('uspješna registracija');
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


<style lang="scss">
#admin{
    font-size:30px;
    color: grey;
}
#loz{
    margin-top:10px;
}
#log{
    font-size:18px;
    color:rgb(66, 64, 64);
    margin-left:40%;
}
#pass,#mail{
    color:rgb(206, 20, 20);
    margin-bottom:0px;
}
</style>