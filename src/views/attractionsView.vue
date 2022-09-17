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
  {url: 'https://www.istrapedia.hr/media/uploads/images/Sv_Nikola_15_04_vb.jpg', description: 'Otok Sveti Nikola', adress: 'Otok Sveti Nikola'},
  {url: 'https://media.camping-adriatic.com/destinations/recommended/recommended-dvigrad.jpg', description: 'Dvigrad', adress: '52352, Kanfanar'},
  {url: 'https://whc.unesco.org/uploads/thumbs/site_0809_0003-1200-630-20151104150413.jpg', description: 'Euphrasian Basilica', adress: 'Ul. svetog Eleuterija 22'},
  {url: 'https://thumbs.dreamstime.com/b/stara-roma%C5%84ska-brama-porec-chorwacja-72399349.jpg', description: 'Stara Romanska brama', adress: 'Poreč'},
  {url: 'https://www.myporec.com/uploads/imgcache/large/articles/_08_porec_aerial_eufrasiana.jpg', description: 'Stari grad Poreč', adress: 'Otokar Kersovani 8'},
  {url: 'https://media.camping-adriatic.com/destinations/recommended/recommended-porec-heritage-museum.jpg', description: 'Zavičajni muzej Poreštine', adress: 'Ul. Decumanus 9, 52440, Poreč'},
  {url: 'https://media.camping-adriatic.com/destinations/recommended/recommended-sveti-lovrec.jpg', description: 'Sveti Lovreč', adress: 'Sveti Lovreč'},
  {url: 'https://www.myporec.com/uploads/imgcache/large/articles/1503564849_6289.jpg', description: 'Kuća Dva sveca', adress: 'Ulici sv. Maura'},
  {url: 'https://www.myporec.com/public/uploads/photos/articles/dsc_5937.jpg', description: 'Aquapark Aquacolors', adress: 'MOLINDRIO 18, 52440, Poreč'},
  
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


