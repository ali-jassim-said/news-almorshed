<template>
  <div class="container-fluid paddding mb-5">
    <div class="row mx-0" v-if="!importantLoading && !importantError">
      <div
        v-if="importantPosts.length"
        class="col-md-6 col-12 paddding animate-box"
        data-animate-effect="fadeIn"
      >
        <div class="fh5co_suceefh5co_height">
          <img
            :src="'http://127.0.0.1:8000/' + importantPosts[0].image"
            alt="img"
          />
          <div class="fh5co_suceefh5co_height_position_absolute"></div>
          <div class="fh5co_suceefh5co_height_position_absolute_font">
            <div>
              <a href="#" class="color_fff">
                <i class="fa fa-clock-o"></i>&nbsp;&nbsp;{{
                  formatDate(importantPosts[0].created_at)
                }}
              </a>
            </div>
            <div>
              <a
                :href="'single/' "
                class="fh5co_good_font"
                >{{ importantPosts[0].ar_title }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div
            v-for="post in importantPosts.slice(1, 5)"
            :key="post.id"
            class="col-md-6 col-6 paddding animate-box"
            data-animate-effect="fadeIn"
          >
            <div class="fh5co_suceefh5co_height_2">
              <img :src="'http://127.0.0.1:8000/' + post.image" alt="img" />
              <div class="fh5co_suceefh5co_height_position_absolute"></div>
              <div class="fh5co_suceefh5co_height_position_absolute_font_2">
                <div>
                  <a href="#" class="color_fff">
                    <i class="fa fa-clock-o"></i>&nbsp;&nbsp;{{
                      formatDate(post.created_at)
                    }}
                  </a>
                </div>
                <div>
                  <a :href="'single/' + post.id" class="fh5co_good_font_2"> {{
                    post.ar_title
                  }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="importantLoading" class="d-flex justify-content-center align-items-center">
      <div class="spinner"></div>
    </div>
    <div v-if="importantError" class="error">Error: {{ importantError }}</div>
  </div>
</template>

<script setup>
import { useImportantStore } from "~/stores/important";
import { onMounted, computed } from "vue";

const importantStore = useImportantStore();

onMounted(() => {
  importantStore.fetchPosts();
});

const importantPosts = computed(() => importantStore.posts);
const importantLoading = computed(() => importantStore.loading);
const importantError = computed(() => importantStore.error);

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("ar-EG", options);
};
</script>
