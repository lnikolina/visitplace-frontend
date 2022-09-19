<template>
  <div class="korisnik">

    <h1>Rezervacija</h1><br><br>
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div><br>
    <div class="form-group col-md-6">
      <label for="inputName">Ime</label>
      <input type="text" class="form-control" id="inputName" placeholder="Ime">
    </div><br>
    <div class="form-group col-md-6">
      <label for="inputSurname">Prezime</label>
      <input type="text" class="form-control" id="inputSurname" placeholder="Prezime">
    </div><br>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCar">Odaberite vozilo</label>
      <select id="inputCar" class="form-control">
        <option selected>VW Polo or similar - price €47.58 / Day</option>
        <option>VW Golf or similar - price €54.50 / Day</option>
        <option>Nissan Qashqai or similar - price €56.68 / Day</option>
        <option>Seat Arona A/T or similar - price €63.22 / Day</option>
        <option>Skoda Octavia or similar - price €69.76 / Day</option>
        <option>Mercedes Vito 8+1 A/T or similar - price €196.20 / Day</option>
      </select>
    </div>
  </div><br>
  <form method="post" action="mailto:rentacar@gmail.com" >
  <button type="submit" value="Send Email" class="btn btn-primary">Rezerviraj</button>
</form>

</form>
  </div>
</template>
<style>
.korisnik{
  margin: 7%;
  text-align: left;
}

</style>
