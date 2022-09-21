<template>
  <div>
    <div class="row" >
        <h3 class="main">Main page</h3>
      <div v-for="imgs in imgdata" v-bind:key="imgs">
      <br>
        <div
        class="d-flex justify-content-center py-2" >
          <div class="second ">
            <div class="text3"  >
              <img src="~@/assets/user.png" class="imgNme"/> <span class="userNames"> {{imgs.names}}</span>
            </div>

          <img class="slike" :src="imgs.imges" alt="something" />
                <div class="thert" v-for="loc in allDataNames" v-bind:key="loc">
  <span class="loc" v-if="imgs.imgNames === loc.imgName"><img src="~@/assets/world.png" class="imgWorld"/>{{loc.loc}}</span>
      </div>
          </div>
        </div >

      </div>
    </div>
  </div>
</template>

<style>


body{
    background-image: url('https://firebasestorage.googleapis.com/v0/b/visitporec-3d39f.appspot.com/o/bg-imgs%2Fwp1823682-croatia-wallpapers%20(1).jpg?alt=media&token=7889be5b-bcf2-4a3b-9341-4f8fef04c7f6')
    
}




.slike {
  position: static;
  margin-top: 3%;
  margin-left:  12%;
  width: 80%;
  height: 80%;
  border-radius:15px ;
   margin-bottom: 5%;
}

.second {
  width: 800px;
  background-color: white;
 box-shadow: 10px 10px 5px #aaaaaa;
  border-radius: 15px;
  margin-bottom: 5%;
  text-align: left;
  margin-top: 2%;
  
}
.thert{
  width: 20%;
  background-color: white;
  box-shadow: 10px 10px 5px #aaaaaa;
  border-radius: 15px;
  margin-bottom: 4%;
  margin-top: -5%;
  margin-left: 40%;
  text-align: center;
}

.text3{
  top: 550px;
  text-align: center;
}
.userNames{
  font-size: 18px;
}


.imgNme{
  margin-top: -0.8%;
}

.imgWorld{
  width: 34px;
  height: 34px;
}

.loc{
  margin-top: -0.8%;
    font-size: 21px;
}



</style>


<script>
import { storage, ref, listAll,db,collection,getDocs } from "@/firebase";


export default {
  name: "Home",
  data() {
    return {
      imgdata: [],
      allDataNames:[],
      namesOfus:[]

    };
  },
  methods: {
    loaddata() {
      const listRef = ref(storage, "gs://visitporec-3d39f.appspot.com/imgs");
      listAll(listRef)
        .then((res) => {
          res.prefixes.forEach((folderRef) => {});
          res.items.forEach((itemRef) => {
     
            this.imgdata.push(
              { imges: "https://firebasestorage.googleapis.com/v0/b/visitporec-3d39f.appspot.com/o/imgs%2F" +itemRef.name +"?alt=media",
                names:itemRef.name.split("_", 1).join(""),
                imgNames:itemRef.name,

              }
            );
            console.log(this.imgdata);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

       loadNames() {
     getDocs(collection(db, "data")).then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
         this.allDataNames.push(doc.data());
        });
      });
     console.log(this.allDataNames);
    }
  },
  created: function () {
    this.loaddata();
    this.loadNames();
  },
};
</script>