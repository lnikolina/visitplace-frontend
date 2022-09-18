<template>
  <div class="home text-center">
    <p></p>
    <div class="col-8">
      <div class="row">
        <post-card v-for="card in filteredCards" :key="card.url" :info="card"/>
      </div>
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
  {url: 'https://www.istrapedia.hr/media/uploads/images/Sv_Nikola_15_04_vb.jpg', description: 'Otok Sveti Nikola', adress: 'Otok Sveti Nikola', category:'Attraction'},
  {url: 'https://www.fitshop.hr/wp-content/uploads/2019/09/Biciklizam-downhill-Fitshop.hr_.jpg', description: 'Biciklizam', adress: '', category:'Activitie'},
  {url: 'https://media.camping-adriatic.com/destinations/recommended/recommended-dvigrad.jpg', description: 'Dvigrad', adress: '52352, Kanfanar', category:'Attraction'},
  {url: 'https://www.myporec.com/public/uploads/photos/articles/_istradiving_40218-studiosonda.jpg', description: 'Ronjenje u modrom prostranstvu', adress: '', category:'Activitie'},
  {url: 'https://www.surfshop.hr/wp-content/uploads/2022/03/trinidad.jpg', description: 'Kajak', adress: '', category:'Activitie'},
  {url: 'https://whc.unesco.org/uploads/thumbs/site_0809_0003-1200-630-20151104150413.jpg', description: 'Euphrasian Basilica', adress: 'Ul. svetog Eleuterija 22', category:'Attraction'},
  {url: 'https://super1.telegram.hr/wp-content/uploads/sites/3/2020/07/FIREFLY-SS-20-SUP-ambiance-1-scaled.jpg', description: 'SUP', adress: '', category:'Activitie'},
  {url: 'https://thumbs.dreamstime.com/b/stara-roma%C5%84ska-brama-i-euphrasian-bazylika-porec-chorwacja-72411658.jpg', description: 'Stara Romanska brama', adress: 'Poreč', category:'Attraction'},
  {url: 'https://content.selectbox.hr/uploads/2014/03/darilni_paketi_bordanje_na_vodi_fi_al_nautica_1_1.jpg', description: 'Skijanje na vodi', adress: '', category:'Activitie'},
  {url: 'https://www.myporec.com/uploads/imgcache/large/articles/_08_porec_aerial_eufrasiana.jpg', description: 'Stari grad Poreč', adress: 'Otokar Kersovani 8', category:'Attraction'},
  {url: 'https://www.yamaha-trogir.com/images/vodeni-skuteri/vxdeluxe/yamaha-vxdeluxe-1.jpg', description: 'Vodeni skuteri', adress: '', category:'Activitie'},
  {url: 'https://media.camping-adriatic.com/destinations/recommended/recommended-porec-heritage-museum.jpg', description: 'Zavičajni muzej Poreštine', adress: 'Ul. Decumanus 9, 52440, Poreč', category:'Attraction'},
  {url: 'https://zgturizam.uciliste-ambitio.hr/wp-content/uploads/2020/02/jedrenje-na-dasci.jpeg', description: 'Jedrenje na dasci', adress: '', category:'Activitie'},
  {url: 'https://media.camping-adriatic.com/destinations/recommended/recommended-sveti-lovrec.jpg', description: 'Sveti Lovreč', adress: 'Sveti Lovreč', category:'Attraction'},
  {url: 'https://www.burzanautike.com/upload/katalog/6439-losinjska-jedra-tradicije-i-ponosa-5999389657.jpg', description: 'Jedrenje', adress: '', category:'Activitie'},
  {url: 'https://www.myporec.com/uploads/imgcache/large/articles/1503564849_6289.jpg', description: 'Kuća Dva sveca', adress: 'Ulici sv. Maura', category:'Attraction'},
  {url: 'https://www.myporec.com/public/uploads/photos/articles/dsc_5937.jpg', description: 'Aquapark Aquacolors', adress: 'MOLINDRIO 18, 52440, Poreč', category:'Attraction'},
  
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


