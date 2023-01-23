<script setup>
import HeaderVue from '../components/Header.vue'
import MovieVue from '../components/Movie.vue'
import axios from "axios";
import { ref } from "vue";

const genre = ref(28);
const criteria = ref("");
const searchResults = ref([]);
const page = ref(1);
const totalPages = ref(0);

const getGenres = async () => {
  searchResults.value = [];
  criteria.value = "";
  await store.getMovies(genre.value);
};

const search = async (direction) => {
  page.value += direction;
  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d2efec38e7d74d12122672897f241cbf",
        query: criteria.value,
        include_adult: false,
        page: page.value,
      },
    })
  ).data;

  totalPages.value = data.total_pages;

  searchResults.value = data.results.map((movie) => {
    return {
      id: movie.id,
      image: movie.poster_path,
    };
  });
};

</script>

<template>
  <HeaderVue v-bind:Login="true" />
  <div class="new">
    <input type="search" placeholder="Search:" v-model="criteria" @keydown.enter="search(0)" id="searchbar" />
    <select v-model="genre" @change="getGenres()" class="select">
      <option value="Action">Action</option>
      <option value="Family">Family</option>
      <option value="Science Fiction">Science Fiction</option>
      <option value="Adventure">Adventure</option>
      <option value="Fantasy">Fantasy</option>
    </select>
  </div>
  <Suspense>
    <MovieVue />
  </Suspense>
  <template v-if="searchResults.length">
    <div class="navigation">
      <button class="Prev" v-show="page > 1" @click="search(-1)">Prev</button>
      <h2 class="page">{{ `Page ${page} of ${totalPages}` }}</h2>
      <button class="Next" v-show="page < totalPages" @click="search(1)">Next</button>
    </div>
  </template>
</template>

<style scoped>
#searchbar {
  border-radius: 10px;
  height: 35px;
  font-size: 30px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

#searchbar:hover {
  background-color: black;
  color: white;
  font-style: oblique;
}

.select {
  float: right;
  height: 35px;
  font-size: 30px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  border-radius: 10px;
}

.select:hover {
  background-color: black;
  color: white;
}

.page {
  padding-top: 10px;
  font-size: larger;
  font-style: bold;
  text-align: center;
}

.Prev {
  padding-top: 10px;
  float: left;
  height: 30px;
  width: 300px;
}

.Next {
  padding-bottom: 20px;
  float: right;
  height: 30px;
  width: 300px;
}

.navigation {
  padding-top: 30px;
}
</style>