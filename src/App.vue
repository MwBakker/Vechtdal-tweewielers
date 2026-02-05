<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import headerCustom from '@/components/base/header/Nav-bar.vue'
import headerCustomMobile from '@/components/base/header/mobile/Nav-bar-mobile.vue'
import footerSection from '@/components/base/Footer.vue'

const windowWidth = ref(window.innerWidth)

function onResize() {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <headerCustomMobile v-if="windowWidth <= 1024" ref="navBar_mobile" />
  <headerCustom v-else ref="navBar" />
  <div id="router-content">
    <router-view></router-view>
  </div>
  <footerSection id="footer" />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-image:
    linear-gradient(to bottom, rgb(18 18 18 / 87.5%), rgb(18 18 18 / 100%)),
    url('/assets/background/background.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccd2d8;
}

#router-content {
  min-height: 77vh;
}

@media (max-width: 1024px) {
  #app {
    background-size: auto;
  }
}
</style>