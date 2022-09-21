<template>
  <div>
    <div class="row">

      <div class="cardDiv">
      <br><br>
        <div
        class="d-flex justify-content-center py-2" v-for="imgs in imgdata" v-bind:key="imgs">

          <div class="second ">

            <div class="text3"  >
               <span class="userNames">{{imgs.names}}</span>
            </div>
    
          <img class="slike" :src="imgs.imges" alt="something" />
          </div>

        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style>


.cardDiv {
  margin-top: 2.5%;
  background-color: rgba(111, 102, 102, 0.108);
  width: 70%;
  margin-left: 15%;
  border-radius: 15px;
  margin-bottom: 2.5%;
  box-shadow: 2px 2px rgb(0 0 0 / 0.5);
  border: 1px solid rgb(184, 184, 184);
  
}

.slike {
  position: static;
  padding: 80px;
  width: 100%;
  height: 100%;
  border-radius:80px ;
}

.second {
  width: 882px;
  background-color: white;
  box-shadow: 10px 10px 5px #aaaaaa;
  border-radius: 15px;
  margin-bottom: 4%;
  text-align: left;
  
}

.text3{
  top: 550px;
  text-align: center;
}
.userNames{
  font-weight: bold;
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
     // console.log(this.allDataNames);
    }
  },
  created: function () {
    this.loaddata();
    this.loadNames();
  },
};
</script>