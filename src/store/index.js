import { defineStore } from 'pinia'
import axios from 'axios';
import { ref } from 'vue';
import { firestore } from "../firebase/index";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
    }
  },
  actions: {
    async getMovies() {
      let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "d2efec38e7d74d12122672897f241cbf",
        }
      })).data.results;
      
      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          poster: movie.poster_path,
          title: movie.title,
          original_title: movie.original_title,
          release_date: movie.release_date,
          overview: movie.overview,
        }
      });
    },
    async populateFirestore() {
      const genres = new Map([[28, "Action"], [10751, "Family"], [878, "Science Fiction"], [12, "Adventure"], [14, "Fantasy"]]);

      genres.forEach(async (value, key) => {
        let data = (await axios.get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: "d2efec38e7d74d12122672897f241cbf",
            with_genres: key,
            include_adult: false,
          }
        })).data.results;
        data = data.map((movie) => {
          return {
            id: movie.id,
            image: movie.poster_path,
          }
        });
        await setDoc(doc(firestore, "Genre", value), { data });
      });
    },
    async getMovies(genre) {
      this.movies = (await getDoc(doc(firestore, "Genre", genre))).data().data;
    }
  }
});

export const isLoggedIn = ref(false);

export const useCart = defineStore('cart', {
  state: () => {
    return {
      purchase: [],
      count: 0,
    }
  },
  actions: {
    adding(movie) {
      if(this.purchase.includes(movie)){
        return;
      }
      this.purchase[this.count] = movie;
      this.count+=1;
    },
    removing(movie) {
      for (let i = 0; i < this.purchase.length; i++) {
        if (movie == this.purchase[i]) {
          this.purchase.splice(i,1);
          this.count-=1;
          break;
        }
      }
    },
    clear(){
      this.purchase=[];
      this.size=0;
    }
  }
})