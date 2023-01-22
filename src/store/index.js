import { defineStore } from 'pinia'
import axios from 'axios';

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
  }
});

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