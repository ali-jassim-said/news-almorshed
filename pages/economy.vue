<template>
  <div class="container-fluid pb-4 pt-4 paddding">
    <div class="container paddding vh">
      <div class="mx-0">
        <div class="col-md-12 animate-box">
          <div>
            <div class="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
              الأخبار الاقتصادية
            </div>
          </div>
          <div v-if="loading" class="d-flex justify-content-center align-items-center vh">
            <div class="spinner"></div>
          </div>
          <div v-else-if="error" class="text-center text-danger">
            Error: {{ error }}
          </div>
          <div v-else class="row">
            <div v-for="post in posts" :key="post.id" class="col-lg-4 col-md-6 pb-5">
              <div>
                <div class="fh5co_hover_news_img" style="width: 100%; height: 100%">
                  <div class="fh5co_news_img">
                    <img :src="'http://127.0.0.1:8000/' + post.image" alt="" />
                  </div>
                </div>
                <div class="col-12 animate-box d-flex flex-column align-items-end mobile-sport">
                  <nuxt-link :to="`/details/${post.id}`" class="fh5co_magna py-2" style="text-align: end">
                    {{ post.ar_title }}
                  </nuxt-link>
                  <div class="most_fh5co_treding_font_123">
                    {{ formatDate(post.created_at) }}
                  </div>
                  <div class="fh5co_mini_time py-3" style="text-align: end">
                    {{ post.ar_author }}
                  </div>
                  <div class="fh5co_consectetur" style="text-align: end">
                    {{ post.ar_mini_description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEconomyStore } from '~/stores/economy';
import { onMounted, computed } from 'vue';

const economyStore = useEconomyStore();

onMounted(() => {
  economyStore.fetchEconomyPosts();
});

const posts = computed(() => economyStore.posts);
const loading = computed(() => economyStore.loading);
const error = computed(() => economyStore.error);

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ar-EG', options);
};
</script>

<style>
.spinner {
  border: 10px solid #f3f3f3;
  border-top: 10px solid #777;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  margin-top: 20px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 500px) {
  .mobile-sport {
    padding: 0 0 5px 1px;
  }
}
</style>
