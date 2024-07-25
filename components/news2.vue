<template>
  <div class="container-fluid pb-4 pt-4 paddding">
    <div class="container paddding">
      <div class="row mx-0">
        <!-- Main News Section -->
        <div class="col-lg-7 col-md-8 animate-box" data-animate-effect="fadeInLeft">
          <div>
            <div class="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
              سياسه
            </div>
          </div>
          <div v-if="loading" class="d-flex justify-content-center align-items-center">
            <div class="spinner"></div>
          </div>
          <div v-else-if="error" class="text-center text-danger">Error: {{ error }}</div>
          <div v-else>
            <div v-for="post in posts.slice(0, 12)" :key="post.id" class="row pb-4">
              <div class="col-lg-5 col-md-5">
                <div class="fh5co_hover_news_img">
                  <div class="fh5co_news_img">
                    <img :src="'http://127.0.0.1:8000/'+post.image" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-7 animate-box d-flex flex-column align-items-end p-1 mobile" style="padding: 0 0 2px 3px !important;">
                <nuxt-link :to="`/details/${post.id}`" class="fh5co_magna py-2" style="text-align: end;">
                  {{ post.ar_title }}
                </nuxt-link>
                <div class="most_fh5co_treding_font_123">{{ formatDate(post.created_at) }}</div>
                <div class="fh5co_mini_time py-2">
                  {{ post.ar_author }}
                </div>
                <div class="fh5co_consectetur" style="text-align: end;">
                  {{ post.ar_mini_description }} 
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Popular Posts Section -->
        <div class="col-lg-4 col-md-4 animate-box" data-animate-effect="fadeInRight">
          <div>
            <div class="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
              الأكثر شعبية
            </div>
          </div>
          <div v-if="popularLoading" class="d-flex justify-content-center align-items-center">
            <div class="spinner"></div>
          </div>
          <div v-else-if="popularError" class="text-center text-danger">Error: {{ popularError }}</div>
          <div v-else>
            <div v-for="post in popularPosts.slice(0, 15)" :key="post.id" class="row pb-3">
              <div class="col-5 align-self-center">
                <img :src="'http://127.0.0.1:8000/'+post.image" alt="img" class="fh5co_most_trading" />
              </div>
              <div class="col-7 paddding" style="direction: rtl">
                <nuxt-link :to="`/details/${post.id}`" class="most_fh5co_treding_font" style="text-align: end;">
                  {{ post.ar_title }}
                </nuxt-link>
                <div class="most_fh5co_treding_font_123">{{ formatDate(post.created_at) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { usePoliciesStore } from '~/stores/policy';
import { useMostPopularStore } from '~/stores/mostPopular';
import { onMounted, computed } from 'vue';

const policiesStore = usePoliciesStore();
const mostPopularStore = useMostPopularStore();

onMounted(() => {
  policiesStore.fetchPosts();
  mostPopularStore.fetchPosts();
});

const posts = computed(() => policiesStore.posts);
const loading = computed(() => policiesStore.loading);
const error = computed(() => policiesStore.error);

const popularPosts = computed(() => mostPopularStore.posts);
const popularLoading = computed(() => mostPopularStore.loading);
const popularError = computed(() => mostPopularStore.error);

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ar-EG', options);
};
</script>

<style scoped>
  @media(max-width: 500px){
    .mobile{
      margin: 0 15px;
    }
  }
</style>
