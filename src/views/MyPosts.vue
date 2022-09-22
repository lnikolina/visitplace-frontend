<template>
    <div>
        <h3>My Posts</h3>
        <div v-for="imgs in imgdata" v-bind:key="imgs" >
            <div class="boredri">
            <p></p>
                              <button
                class="btn  deletebtn"
                type="button"
                @click="deleteimg(imgs.imgNames)"
               
              >
              Delete
              </button>
            <img class="imgaesfor" :src="imgs.imges" alt="something" />
            </div>
        </div>
    </div>
</template>


<script>

import { storage, ref, listAll,deleteObject } from "@/firebase";
import store from "@/store";

export default{
    name:"myuploads",
    data(){
        return{
                imgdata: [],
                splitUsr:"",

        };
    },
    methods:{
           loaddata() {
    
             this.splitUsr = store.currentUser.toUpperCase().split("@", 1).join("");
      const listRef = ref(storage, "gs://visitporec-3d39f.appspot.com/imgs");
      listAll(listRef)
        .then((res) => {
          res.prefixes.forEach((folderRef) => {});
          res.items.forEach((itemRef) => {
            if(itemRef.name.includes(this.splitUsr)){
            this.imgdata.push(
              { imges: "https://firebasestorage.googleapis.com/v0/b/visitporec-3d39f.appspot.com/o/imgs%2F" +itemRef.name +"?alt=media",
              imgNames:itemRef.name,
              }
            
            );
            }
          });
          
        })
        .catch((error) => {
          console.log(error);
        });

        console.log("")
    },
    deleteimg(trn){

const desertRef = ref(storage, 'imgs/'+trn);

// Delete the file
deleteObject(desertRef).then(() => {
    this.$router.go(this.$router.currentRoute);

}).catch((error) => {
    alet("Opss somthing went wrong..")

});
    }

    },
     created: function () {
    this.loaddata();
  },
       
}



</script>

<style scoped>
.deletebtn{
    margin-top: -3%;
    width: 35%;
    height: 60px;
    background-color: rgb(231, 73, 73);
    border-color: rgb(231, 73, 73);
    color: white;
    font-weight: bold;
}
.deletebtn:hover{
    background-color: red;
    border-color: red;
    color: white;
    font-weight: bold;
}


.boredri{   
  width: 35%;
  height: 45% ;
  background-color: grey;
 box-shadow: 10px 10px 5px #aaaaaa;
  border-radius: 15px;
  margin-bottom: 5%;
  margin-top: 5%;
  margin-left: 32%;
}
.imgaesfor{
    margin-top: 5%;
    width: 90%;
    height: 80%;
    padding: 15px;

}
</style>