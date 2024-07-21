<template>
  <div class="container-fluid pb-4 pt-4 paddding articale" v-if="!loading && !error">
    <div class="container paddding">
      <div class="row mx-0" v-if="post">
        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <div>
            <div class="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
              المقال
            </div>
          </div>
          <div class="row pb-5">
            <div class="col-md-12">
              <div>
                <div
                  class="fh5co_news_img"
                  :style="{ backgroundImage: `url(http://127.0.0.1:8000/${post.image})` }"
                ></div>
              </div>
            </div>
            <div class="col-md-12 animate-box d-flex flex-column align-items-end">
              <a href="#" class="fh5co_magna py-2">{{ post.ar_title }}</a>
              <a href="#" class="fh5co_mini_time py-3">
                {{ post.author }} - {{ formatDate(post.created_at) }}
              </a>
              <div class="fh5co_consectetur">{{ post.ar_description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="loading" class="d-flex justify-content-center align-items-center load">
    <div class="spinner"></div>
  </div>
  <div v-if="error" class="error">Error: {{ error }}</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useImportantStore } from '~/stores/important';
import { useMostPopularStore } from '~/stores/mostPopular';
import { usePoliciesStore } from '~/stores/policy';
import { useSportsStore } from '~/stores/sports';
import { onMounted, computed } from 'vue';

const route = useRoute();
const importantStore = useImportantStore();
const mostPopularStore = useMostPopularStore();
const policiesStore = usePoliciesStore();
const sportsStore = useSportsStore();

onMounted(async () => {
  await importantStore.fetchPostById(route.params.id);
  await mostPopularStore.fetchPosts();
  await policiesStore.fetchPosts();
  await sportsStore.fetchPosts();
});

const post = computed(() => importantStore.post);
const loading = computed(() => importantStore.loading);
const error = computed(() => importantStore.error);

const popularPosts = computed(() => mostPopularStore.posts);
const popularLoading = computed(() => mostPopularStore.loading);
const popularError = computed(() => mostPopularStore.error);

const policyPosts = computed(() => policiesStore.posts);
const policyLoading = computed(() => policiesStore.loading);
const policyError = computed(() => policiesStore.error);

const sportsPosts = computed(() => sportsStore.posts);
const sportsLoading = computed(() => sportsStore.loading);
const sportsError = computed(() => sportsStore.error);

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ar-EG', options);
};
</script>

<style scoped>
.fh5co_news_img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 450px;
  -webkit-box-shadow: inset 0 -1px 9px 0px;
}

.articale{
  min-height: 80vh !important;
}

.load{
  min-height: 50vh;
}
</style>
