<script setup>
import { useStore, useCart } from "../store/index.js";
import { ref } from "vue";
import Modal from '../components/Modal.vue';

const store = useStore();
await store.getMovies();
const movies = store.movies;

const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

</script>

<template>
  <div class="container">
    <div v-for=" (movie, id) in movies" class="movies">
      <p>{{ movie.title }} </p>
      <img v-if="movie.poster" :src="'https://image.tmdb.org/t/p/w500' + movie.poster" class="image"
        @click="openModal(movie)" />
    </div>
    <Modal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style scoped>
p {
  color: white;
  padding-top: 10px;
  padding-left: 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: medium;
  font-weight: bold;
}

.container {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: black;
  max-width: max-content;
}

.image {
  aspect-ratio: 3/4;
  width: 97.5%;
  height: 90%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 5px;
}
</style>