<template>
  <div class="container-fluid">
    <div class="container p-m-nav">
      <div class="row d-flex flex-row-reverse">
        <div class="col-12 col-md-3 fh5co_padding_menu">
          <img
            src="/public/images/image.png"
            alt="img"
            class="fh5co_logo_width"
          />
        </div>
        <div class="col-12 col-md-9 align-self-center">
          <div class="text-center d-inline-block">
            <a
              class="fh5co_display_table"
              href="https://linkedin.com"
              target="_blank"
              ><div class="fh5co_verticle_middle">
                <i class="fa fa-linkedin"></i></div
            ></a>
          </div>
          <div class="text-center d-inline-block">
            <a
              class="fh5co_display_table"
              href="https://twitter.com"
              target="_blank"
              ><div class="fh5co_verticle_middle">
                <i class="fa fa-google-plus"></i></div
            ></a>
          </div>
          <div class="text-center d-inline-block">
            <a
              href="https://twitter.com"
              target="_blank"
              class="fh5co_display_table"
              ><div class="fh5co_verticle_middle">
                <i class="fa fa-twitter"></i></div
            ></a>
          </div>
          <div class="text-center d-inline-block">
            <a href="https://fb.com" target="_blank" class="fh5co_display_table"
              ><div class="fh5co_verticle_middle">
                <i class="fa fa-facebook"></i></div
            ></a>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="container-fluid bg-faded fh5co_padd_mediya padding_786"
    style="background-color: #555"
  >
    <div class="container">
      <nav class="navbar navbar-toggleable-sm">
        <button
          class="navbar-toggler navbar-toggler-right mt-1"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars"></span>
        </button>
        <a class="navbar-brand" href="#"
          ><img src="/images/image.png" alt="img" class="mobile_logo_width"
        /></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav d-flex flex-row-reverse justify-content-end">
            <li class="nav-item active mx-2">
              <NuxtLink :to="{ name: 'index' }">
              <a class="nav-link nav-app" href="/index"  
                >الرئيسية <span class="sr-only">(current)</span></a
              >
            </NuxtLink>
            </li>
            <li class="nav-item mx-2">
              <NuxtLink :to="{ name: 'section2' }">
                <a class="nav-link nav-app" href="/section2"
                  >الرياضية <span class="sr-only">(current)</span></a
                ></NuxtLink
              >
            </li>
            <li class="nav-item mx-2">
              <NuxtLink :to="{ name: 'section3' }">
                <a class="nav-link nav-app" href="/section3"
                  >الاقتصادية <span class="sr-only">(current)</span></a
                >
              </NuxtLink>
            </li>
            <li class="nav-item mx-2">
              <NuxtLink :to="{ name: 'section4' }">
                <a class="nav-link nav-app" href="/section4"
                  >السياسيه <span class="sr-only">(current)</span></a
                >
              </NuxtLink>
            </li>
            <li class="nav-item mx-2">
              <NuxtLink :to="{ name: 'section5' }">
                <a class="nav-link nav-app" href="/section5"
                  >السياسيه <span class="sr-only">(current)</span></a
                >
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
  .router-link-active.router-link-exact-active a{
    color: #f5bc04 !important;
  }
</style>
