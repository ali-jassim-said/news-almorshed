<template>
  <div class="container-fluid fh5co_footer_bg pb-3">
    <div class="container animate-box">
      <div class="row">
        <div class="col-12 spdp_right py-5">
          <img src="/images/image.png" alt="img" class="footer_logo" />
        </div>
        <div class="clearfix"></div>
        <div class="col-12 col-md-4 col-lg-5">
          <div class="footer_main_title py-3 d-flex justify-content-end">
            عن وكالة الشارع العراقي
          </div>
          <div class="footer_sub_about pb-3">
            وكالة الشارع العراقي للأخبار هي واحدة من الوكالات الإعلامية التي تركز على تقديم الأخبار والتقارير المتعلقة بالعراق. تهتم الوكالة بتغطية الأحداث السياسية والاقتصادية والاجتماعية والأمنية في البلاد، وتعمل على نقل المعلومات بشكل موضوعي وموثوق إلى الجمهور.
          </div>
        </div>
        <div class="col-12 col-md-3 col-lg-3">
          <div class="footer_main_title py-3 d-flex justify-content-end">
            الفئات الرئيسية
          </div>
          <ul class="footer_menu">
            <li><a href="#" class="category-footer">السياسية</a></li>
            <li><a href="#" class="category-footer">الرياضية</a></li>
            <li><a href="#" class="category-footer">الاقتصادية</a></li>
            <li><a href="#" class="category-footer">الأمنية</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-5 col-lg-4 position_footer_relative">
          <div class="footer_main_title py-3 d-flex justify-content-end">
            حول أخبارنا
          </div>
          <div class="footer_sub_about pb-3">
            وكالة الشارع العراقي تقدم مجموعة متنوعة من الأخبار والمقالات التي تركز على الأحداث المحلية والدولية الهامة. نحن ملتزمون بتزويد قرائنا بمحتوى موثوق وشامل.
          </div>
          <div class="footer_makes_sub_font d-flex justify-content-end">
            أحدث الأخبار تتضمن تغطية شاملة للأحداث الكبرى في العراق، مع تحليلات موضوعية وأخبار حصرية.
          </div>
          <div class="footer_makes_sub_font d-flex justify-content-end">
            اكتشف المزيد من مقالاتنا المميزة حول الأحداث الجارية والأخبار المهمة.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid fh5co_footer_right_reserved">
    <div class="container">
      <div class="row">
        <div class="col-12 py-4 Reserved text-center">
          © حقوق النشر {{ currentYear }}، جميع الحقوق محفوظة. بواسطة
          <a href="#">وكالة الشارع العراقي</a>.
        </div>
      </div>
    </div>
  </div>
  <div class="gototop js-top">
    <a href="#" class="js-gotop"><i class="fa fa-arrow-up"></i></a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentYear = ref(new Date().getFullYear());

const currentTime = ref('');
const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
});
</script>

<style>
/* Add your styles here */
</style>
