// stores/sports.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useMostPopularStore = defineStore('mostPopular', {
  state: () => ({
    posts: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/posts?size=3&type=mostPopular');
        this.posts = response.data.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    }
  }
});
