<template>
  <div class="home text-center ">
    <p></p>
    <div class="col-8">
        <div class="row">
        
            <post-card v-for="card in filteredCards" :key="card.url" :info="card"/>
        </div>
    </div>
    <div class="col-4">
      
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import PostCard from '@/components/PostCard.vue'
import store from "@/store"

let cards = []
// ... API  -> sve kartice -> cards
cards = [
  {url: 'https://www.myporec.com/uploads/imgcache/list/articles/BICIKLIZAM.jpg', description: 'Biciklizam', adress: ''},
  {url: 'https://www.myporec.com/uploads/imgcache/list/articles/_istradiving_40218-studiosonda.jpg', description: 'Ronjenje u modrom prostranstvu', adress: ''},
  {url: 'https://www.myporec.com/uploads/imgcache/list/articles/terramagicaadventures_01_1.jpg', description: 'Kajak', adress: ''},
  {url: 'https://www.myporec.com/uploads/imgcache/list/articles/super_surfer-9.jpg', description: 'SUP', adress: ''},
  {url: 'https://www.myporec.com/uploads/imgcache/list/articles/_img_5319.jpg', description: 'Skijanje na vodi', adress: ''},
  {url: 'https://www.myporec.com/uploads/imgcache/list/articles/JET_SKI.jpg', description: 'Vodeni skuteri', adress: ''},
  {url: 'https://www.myporec.com/uploads/imgcache/list/articles/1462954542_6777.jpg', description: 'Jedrenje na dasci', adress: ''},
  {url: 'https://www.myporec.com/uploads/imgcache/list/articles/41_porec_sport_sailing_01.jpg', description: 'Jedrenje', adress: ''},
];

export default {
  name: 'HomeView',
  data: function () {
    return {
      cards: cards,
      store,
    };
  },
    computed: { //objekt
      filteredCards() {
        // logika koja filtrira
        let termin = this.store.searchTerm;
        let newCards = [];

        for (let card of this.cards) {
          if (card.description.indexOf(termin) >= 0) {  // indexof - funkcija koja provjerava da li je string unutar stringa
             newCards.push(card);
          }
        }
        return newCards;
      },
    },
    components: {
      PostCard
    },
};
</script>


