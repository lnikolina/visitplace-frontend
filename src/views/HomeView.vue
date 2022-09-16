<template>
  <div class="home text-center">
    
    <h1>Welcome!</h1>
    <p>These are some places you can visit in Poreč</p>

    <div class="row">
      <div class="col-8">
        <post-card v-for="card in cards" :key="card" :info="card"/>
      </div>
    </div>
    <div class="col-4">
      Sidebar
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import PostCard from '@/components/PostCard.vue'

let cards = []
// ... API  -> sve kartice -> cards
cards = [
  "https://picsum.photos/id/1/400/400",
  "https://picsum.photos/id/2/400/400",
  "https://picsum.photos/id/3/400/400",
  "https://picsum.photos/id/4/400/400"
];

export default {
  name: 'HomeView',
  data: function () {
    return {
      cards: cards
    }
  },
  components: {
    PostCard
  },
};
</script>


