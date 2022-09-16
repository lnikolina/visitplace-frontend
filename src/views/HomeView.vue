<template>
  <div class="home text-center">
    <p></p>
    <div class="row">
      
        <post-card v-for="card in filteredCards" :key="card.url" :info="card"/>
      
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
  {url: 'https://picsum.photos/id/1/400/400', description: 'Euphrasian Basilica', time: 'one hour ago...'},
  {url: 'https://picsum.photos/id/2/400/400', description: 'laptop2', time: 'two hour ago...'},
  {url: 'https://picsum.photos/id/3/400/400', description: 'laptop3', time: 'tree hour ago...'},
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


