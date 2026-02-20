<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import Header from '@/components/base/header/Header.vue'
import HeaderMobile from '@/components/base/header/mobile/HeaderMobile.vue'
import Footer from '@/components/base/Footer.vue'

const isMobile = ref(window.innerWidth <= 1024)

const onResize = () => {
  isMobile.value = window.innerWidth <= 1024
}

useSeoMeta({
  titleTemplate: '%s | Vechtdal Tweewielers',
  title: 'Fietsen, E-bikes & Service in Hardenberg',
  description:
    'Vechtdal Tweewielers is dé fietsenwinkel in Hardenberg voor fietsen, e-bikes, onderhoud, lease en verhuur.',
  ogSiteName: 'Vechtdal Tweewielers'
})

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>


<template>
  <HeaderMobile v-if="isMobile" ref="navBar_mobile" />
  <Header v-else></Header ref="navBar">
  <main id="router-content">
    <router-view />
  </main>
  <Footer></Footer>
</template>


<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image:
    linear-gradient(to bottom, rgb(18 18 18 / 87.5%), rgb(18 18 18)),
    url('/assets/background/background.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  color: #ccd2d8;
  text-align: center;
}

#router-content {
  margin-top: 78px;
  flex: 1;
}

@media (max-width: 1024px) {
  #app {
    background-size: auto;
  }
}
</style>