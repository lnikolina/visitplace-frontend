<template>
  <div class="home text-center">
    <p></p>
    <div class="row">
      <div class="">
        <p>Upload image</p>
        <form @submit.prevent="postNewImage" class="form-inline mb-5"></form>
          
            <croppa :width="300" :height="300" placeholder="Upload image..." v-model="imageReference"></croppa>
          
          <div class="form-group">
            <label for="imageDescription">description</label>
            <input
            v-model="newImageDescription"
            type="text"
            class="form-control ml-2"
            placeholder="Enter the image description"
            id="imageDescription"
            />

          </div>
          <button class="btn btn-outline-success" type="button">Post</button>
      </div>
        
      

      
    </div>
    <div class="col-4">
    </div>
  </div>
</template>

<script>

