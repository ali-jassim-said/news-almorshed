import { defineStore } from 'pinia';
import axios from 'axios';

export const useEconomyStore = defineStore('economy', {
  state: () => ({
    posts: [],
    post: null, // State for an individual post
    loading: false,
    error: null
  }),
  actions: {
    async fetchEconomyPosts() {
      this.loading = true;
      this.error = null;
      try {
        // Adjust the URL if needed for different parameters
        const response = await axios.get('http://127.0.0.1:8000/api/posts?size=3&type=economy&website=one');
        this.posts = response.data.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    async fetchPostById(id) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts/${id}`);
        this.post = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    }
  }
});
