<template>
  <div class="container">
    <h1 class="text-center">Bidding</h1>


    <div class="form col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 my-4">

      <div class="mb-3">
        <label for="car" class="form-label">Selected painting:</label>
        <div class="text-center">
          <img :src="imageUrl" alt="Place of selected painting" />
        </div>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Your e-mail address:</label>
        <input type="text" class="form-control" id="email" v-model="model.email">
      </div>

      <div class="mb-3">
        <label for="offer" class="form-label">Offer (in HUF):</label>
        <input type="number" class="form-control" id="offer" v-model="priceraw">
      </div>

      <div class="mb-3">
        <input type="checkbox" id="acceptedConditions" class="form-check-input">
        <label for="acceptedConditions" class="form-check-label">Accept terms of use</label>
      </div>

      <div class="mb-3 text-center">
        <input @click="send" type="button" value="Send offer" class="btn btn-primary" >
      </div>


      <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ errorMessage }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>

    <div class="modal fade" id="successfullBidModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header mx-auto">
            <h5 class="modal-title text-center">Your offer has been successfully registered</h5>
          </div>
          <div class="modal-footer mx-auto">
            <RouterLink class="btn btn-secondary" to="/">Back to list</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import {ref} from 'vue'
import dataservice from '../services/dataservice';


const route = useRoute()
const imageUrl = ref(route.query.imageUrl)
const id = ref(route.query.id)
const errorMessage = ref("")
const priceraw = ref(0)
const model = ref({
  paintingId: id.value,
  email: "",
  price: 123123123123112300
})

const send = () => {
  console.log(model.value);
  dataservice.saveBid(model.value).then((result) => {
    console.log(result);
    errorMessage.value = result
  })
}
//modal fade show

</script>
