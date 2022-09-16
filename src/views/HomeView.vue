<template>
  <div class="home">
    
    <h1>Welcome!</h1>
    <p>These are some places you can visit in Poreč</p>


    <div class="card text-center">
      <div class="card-header">
        VisitPoreč
      </div>
      <div class="card-body">
        <h5 class="card-title">Posebna mjesta za sve ljubitelje istraživanja</h5>
        <p class="card-text">Ovdje ćete naći sva dostupna mjesta koja morate posjetiti.</p>
        <a href="#" class="btn btn-primary">Pretraži</a>
      </div>
      <div class="card-footer text-muted">
        Neka od lokacija
      </div>
      
    </div>

      

    <div class="card mb-3" style="max-width: auto;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../assets/slike_ugostiteljstva/pekararobi.jpeg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Pekara ROBI Poreč</h5>
            <p class="card-text">Adress: Ulica sv. Eleuterija 2, Poreč</p>
            <p class="card-text"><small class="text-muted">Bakery makes the world smell better!</small></p>
            <p class="card-text"><small class="text-muted">FAMILY TRADITION</small></p>
            <a href="#" class="btn btn-primary">Detalji</a>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3" style="max-width: auto;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../assets/slike_plaza/GRADSKO.jpeg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Gradsko kupalište</h5>
            <p class="card-text">Adress: Unnamed Road, Poreč</p>
            <p class="card-text"><small class="text-muted">Plaža Gradskog kupališta proteže se duž južne obale od Marine Poreč do turističkog naselja Brulo. Zahvaljujući čistom moru i obali, bogatom zabavno-rekreativnom sadržaju i gastronomskoj usluzi jedna je od najpopularnijih porečkih plaža, idealna za sve željne dobre cjelodnevne zabave.</small></p>
            <a href="#" class="btn btn-primary">Detalji</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>



<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
