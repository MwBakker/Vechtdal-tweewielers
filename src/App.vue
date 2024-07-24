<template>
  <navBarMobile v-if="windowWidth <= 800" ref="navBar_mobile" />
  <navBar v-if="windowWidth > 800" ref="navBar" />
  <div id="app-body">
    <router-view></router-view>
  </div>
  <footerSection id="footer" />
</template>

<script>
import navBar from "@/components/base/nav-bar/nav-bar.vue";
import navBarMobile from "@/components/base/nav-bar/mobile/nav-bar-mobile.vue"
import footerSection from "@/components/base/footer.vue";

export default {
  name: "App",
  components: {
    navBar,
    navBarMobile,
    footerSection
  },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  }
};
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-image:
    linear-gradient(to bottom, rgb(18 18 18 / 87.5%), rgb(18 18 18 / 100%)),
    url('../src/assets/background.png');
  background-size: 100% 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccd2d8;
}

p {
  color: #e0e4e2;
  font-size: calc(1rem + 0.2vw);
}

h1 {
  color: #e0e4e2;
  font-size: calc(1rem + 0.8vw);
}

h2 {
  color: #e0e4e2;
  font-size: calc(1rem + 0.25vw);
}

#app-body {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.slide-fade-up-enter-active,
.slide-fade-left-enter-active,
.slide-fade-right-enter-active {
  transition: all 1s ease;
}

.slide-fade-up-leave-active,
.slide-fade-left-leave-active {
  transition: all 1s;
}

.slide-fade-up-enter-from,
.slide-fade-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(80%);
  opacity: 0;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(-80%);
  opacity: 0;
}

/* @media screen and (min-width: 480px) and (max-width: 801px) {
  #body-app {
    min-height: 57vh;
  }

  #background {
    background-size: 100% 100%;
  }
} */
</style>