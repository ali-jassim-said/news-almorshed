import { defineStore } from 'pinia';
import axios from 'axios';

export const useImportantStore = defineStore('important', {
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/posts?size=5&type=important&website=one');
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
