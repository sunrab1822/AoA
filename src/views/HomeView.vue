<script setup>
import DataService from "../services/dataservice";
import { ref } from "vue";

const categories = ref([]);
const CatId = ref();
const paintings = ref([]);


DataService.getAllKategoria()
  .then((resp) => {
    categories.value = resp;
  })
  .catch((err) => {
    console.log(err);
  });

DataService.getPaintingsByCatId("")
  .then((resp) => {
    paintings.value = resp;
  })
  .catch((err) => {
    console.log(err);
  });

const valaszto = () => {
  DataService.getPaintingsByCatId(CatId.value)
    .then((resp) => {
      paintings.value = resp;
    })
    .catch((err) => {
      console.log(err);
    });
};


</script>

<template>
<div class="container">
        <h1 class="text-center">Art of AI auction</h1>

        <div class="col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 my-4">
            <label class="form-label">Category:</label>
            <select class="form-select" v-model="CatId" @change="valaszto">
                <option selected value="">All category</option>
                <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
            </select>
        </div>

        <div class="row">
            <div v-for="painting in paintings" class="col-12 col-md-6 col-xl-4">
                <div class="card w-100">
                    <img :src="painting.imageUrl" class="card-img-top p-3">
                    <div class="card-body">
                        <p class="card-text">
                            {{ painting.description }}
                        </p>
                        <hr>
                        <p>
                            Starting price: {{ painting.startingPrice }},- Ft
                        </p>
                        <p>
                            Number of bids: {{ painting.numberOfBids }}
                        </p>
                        <p v-if="painting.maxBid">
                            Number of <span class="bids" data-bs-toggle="modal" data-bs-target="#exampleModal">bids</span>: {{ painting.numberOfBids }}, highest bid: {{ painting.maxBid }},- Ft
                        </p>
                    </div>
                    <div class="card-footer text-center">
                        <RouterLink :to="{path: '/bidding', query:{imageUrl:painting.imageUrl,id:painting.id}}" class="btn btn-primary">Bid</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Bids</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <table>
            <tr>
                <td>b************a@elevel.hu</td>
                <td>88999,- Ft</td>
            </tr>
            <tr>
                <td>a**********z@email.com</td>
                <td>84999,- Ft</td>
            </tr>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
