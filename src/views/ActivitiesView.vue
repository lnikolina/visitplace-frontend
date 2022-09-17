<template>
  <div class="home text-center ">
    <p></p>
    <div class="">
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
  {url: 'https://www.burzanautike.com/upload/katalog/6439-losinjska-jedra-tradicije-i-ponosa-5999389657.jpg', description: 'Jedrenje', adress: '', category:'Activitie'},
  {url: 'https://www.fitshop.hr/wp-content/uploads/2019/09/Biciklizam-downhill-Fitshop.hr_.jpg', description: 'Biciklizam', adress: '', category:'Activitie'},
  {url: 'https://www.myporec.com/public/uploads/photos/articles/_istradiving_40218-studiosonda.jpg', description: 'Ronjenje u modrom prostranstvu', adress: '', category:'Activitie'},
  {url: 'https://www.surfshop.hr/wp-content/uploads/2022/03/trinidad.jpg', description: 'Kajak', adress: '', category:'Activitie'},
  {url: 'https://super1.telegram.hr/wp-content/uploads/sites/3/2020/07/FIREFLY-SS-20-SUP-ambiance-1-scaled.jpg', description: 'SUP', adress: '', category:'Activitie'},
  {url: 'https://content.selectbox.hr/uploads/2014/03/darilni_paketi_bordanje_na_vodi_fi_al_nautica_1_1.jpg', description: 'Skijanje na vodi', adress: '', category:'Activitie'},
  {url: 'https://www.yamaha-trogir.com/images/vodeni-skuteri/vxdeluxe/yamaha-vxdeluxe-1.jpg', description: 'Vodeni skuteri', adress: '', category:'Activitie'},
  {url: 'https://zgturizam.uciliste-ambitio.hr/wp-content/uploads/2020/02/jedrenje-na-dasci.jpeg', description: 'Jedrenje na dasci', adress: '', category:'Activitie'},
  
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


