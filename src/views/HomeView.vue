<template>
  <div class="row">
    <div class="col-8">
      <form @submit.prevent="postNewImage" class="form-inline mb-5"></form>

      <div class="form-group">
        <croppa :width="300" :height="300" placeholder="Upload image..." v-model="imageReference"></croppa>
      </div>

      <div class="form-group">
        <label for="imageUrl">Description</label>
            <input
              v-model="newImageUrl"
              type="text"
              class="form-control ml-2"
              placeholder="Enter the image URL"
              id="imageUrl"
              />
      </div> 
      
      <div class="form-group">
        <label for="imageDescription">Description</label>
            <input
              v-model="newImageDescription"
              type="text"
              class="form-control ml-2"
              placeholder="Enter the image description"
              id="imageDescription"
              />
      </div>

      <button type="button" class="btn btn-primary ml-2">Post image</button>

      <div>
        <post-card v-for="card in filteredCards" :key="card.url" :info="card"/>
      </div>

    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import PostCard from '@/components/PostCard.vue'
import store from '@/store'
import { db } from '@/firebase';


// ... API  -> sve kartice -> cards
//cards = [
//  {url: 'https://www.istrapedia.hr/media/uploads/images/Sv_Nikola_15_04_vb.jpg', description: 'Otok Sveti Nikola', adress: 'Otok Sveti Nikola', category:'Attraction'},
//  {url: 'https://www.fitshop.hr/wp-content/uploads/2019/09/Biciklizam-downhill-Fitshop.hr_.jpg', description: 'Biciklizam', adress: '', category:'Activitie'},
//  {url: 'https://media.camping-adriatic.com/destinations/recommended/recommended-dvigrad.jpg', description: 'Dvigrad', adress: '52352, Kanfanar', category:'Attraction'},
//];

export default {
  name: 'HomeView',
  data: function () {
    return { 
      cards: [],
      store,
      newImageDescription: '',
      newImageUrl:'',
    };
  },
    mounted() { // kad god se prikaze ova komponenta, dohvatit ce se postovi
      this.getPosts();
    },
    methods: {
      getPosts() {
        console.log('firebase dohvat')
        db.collection('posts')
        .orderBy('posted-at','desc')
        .limit(10)
        .get()
        .then((query) => {
          this.cards = [];
          query.forEach((doc) => {
            const data = doc.data();
            console.log(data);

            this.card.push({
              id:doc.id,
              time:data.posted_at
            });
          });
        });
      },
      postNewImage() {
  
        const imageUrl = this.newImageUrl;
        const imageDescription = this.newImageDescription;

        db.collection("posts")
        .add({
          url: imageUrl,
          desc: imageDescription,
          email: store.currentUser,
          posted_at: date.now(),
        })
        .then((doc) =>{
          console.log('Spremljeno', doc);
        })
        .catch((e) => {
          console.error(e);
        });
      },
    },
    computed: { //objekt
      filteredCards() { 
        // logika koja filtrira
        let termin = this.store.searchTerm;
        let newCards = [];

        //for (let card of this.cards) {
          //if (card.description.indexOf(termin) >= 0) {  // indexof - funkcija koja provjerava da li je string unutar stringa
             //newCards.push(card);
          //}
        //}
        return this.card.filter((card) => card.description.includes(termin));
      },
    },
    components: {
      PostCard,
    },
};
</script>


