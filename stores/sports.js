// stores/sports.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useSportsStore = defineStore('sports', {
  state: () => ({
    posts: [],
    post: null, // Add a state for the individual post
    loading: false,
    error: null
  }),
  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/posts?size=100&type=sports&website=one');
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
