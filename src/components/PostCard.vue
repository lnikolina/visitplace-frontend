
<template>
    <div>
    <div class="card text-center">
    <div class="card-header">
        {{ info.description }}
    </div>
    <div class="card-body p-0">
        <img class="card-img-top" 
        :src="info.url" 
        alt="img">
    </div>
    <div class="card-footer text-muted">
        {{ postedFromNow }}
    </div>
    </div><br>
    </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ["info"],
  name: 'PostCard',

  computed: {
    postedFromNow() {
      return moment(this.info.time).fromNow();
    },
  }
};
</script>