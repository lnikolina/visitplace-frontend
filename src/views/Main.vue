<template>
  <div>
    <div class="row">
      <div class="cardDiv">
        <div class="col-15" v-for="imgs in imgdata" v-bind:key="imgs">
          <img class="slike w-75 h-100" :src="imgs" alt="something" />
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style>
.cardDiv {
  margin-top: 2.5%;
  background-color: rgba(157, 139, 139, 0.04);
  width: 70%;
  margin-left: 15%;
  border-radius: 15px;
  margin-bottom: 2.5%;
  box-shadow: 3px 3px rgb(0 0 0 / 0.5);
}

.slike {
  padding: 45px;
}
</style>


<script>
import { storage, ref, listAll } from "@/firebase";

export default {
  name: "Home",
  data() {
    return {
      imgdata: [],
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
              "https://firebasestorage.googleapis.com/v0/b/visitporec-3d39f.appspot.com/o/imgs%2F" +
                itemRef.name +
                "?alt=media"
            );
            console.log(this.imgdata);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created: function () {
    this.loaddata();
  },
};
</script>