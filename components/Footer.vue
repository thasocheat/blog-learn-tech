<template>
  <footer class="footer pt-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
          <div class="footer-widget">
            <div class="logo">
              <a href="https://buttercms.com">
                <img
                  width="50"
                  src="../public/circle.png"
                  alt="logo"
                  loading="lazy"
                />
              </a>
            </div>
            <p class="desc">
              Learn Tech
            </p>
            <ul class="social-links">
              <li>
                <a href="https://www.facebook.com/profile.php?id=100012747163486"><i class="lni lni-facebook"></i></a>
              </li>
              <li>
                <a href="#0"><i class="lni lni-youtube"></i></a>
              </li>
              <li>
                <a href="#0"><i class="lni lni-instagram"></i></a>
              </li>
              <!-- <li>
                <a href="#0"><i class="lni lni-twitter"></i></a>
              </li> -->
            </ul>
          </div>
        </div>
        <div class="col-xl-5 col-lg-4 col-md-12 col-sm-12 offset-xl-1">
          <div class="footer-widget">
            <h3>About Us</h3>
            <ul class="links">
              <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="page-scroll"
              >
                <a
                  :href="'/' + item.url"
                  :class="{ active: activeLink === item.url }"
                  >{{ item.label }}</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="footer-widget">
            <h3>Subscribe Newsletter</h3>
            <form action="#">
              <input type="email" placeholder="Email" />
              <button class="main-btn btn-hover">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps(["menuItems", "activeLink"]);
</script>

<style scoped></style>
