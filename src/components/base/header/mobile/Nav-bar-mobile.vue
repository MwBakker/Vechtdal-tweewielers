<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Lines from '@/components/Lines.vue'

const showMenu = ref(false)
const visible = ref(true)

let lastY = window.scrollY

function onScroll() {
  if (showMenu.value) {
    visible.value = true
    lastY = window.scrollY
    return
  }

  const y = window.scrollY
  const goingUp = y < lastY
  const scrolledEnough = y > 40

  if (!scrolledEnough) {
    visible.value = true
  } else {
    visible.value = goingUp
  }

  lastY = y
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <transition appear>
    <header :class="{ visible, opened: showMenu }">
      <img id="letters" @click="clicked('/', 'home')" src="/assets/icon/logo_vechtdal/logo_part_1.png" />
      <img id="menu" @click="showMenu = !showMenu" src="/assets/icon/menu.png" />
      <div id="logo-bottom">
        <img src="/assets/icon/logo_vechtdal/logo_part_2.png" />
        <img id='bike' src="/assets/icon/logo_vechtdal/logo_part_3.png" />
      </div>
      <Lines id="lines" size="6px"></Lines>
      <nav v-if="showMenu">
        <ul class="main-menu">
          <li>
            <router-link to="#fietsen">FIETSEN</router-link>
            <!-- <ul class="submenu">
              <li><router-link to="#stadsfietsen">Stadsfietsen</router-link></li>
              <li><router-link to="#elektrisch">Elektrisch</router-link></li>
              <li><router-link to="#race">Race</router-link></li>
            </ul> -->
          </li>
          <li>
            <router-link to="#fietsplan">FIETSPLAN</router-link>
          </li>
          <li>
            <router-link to="#accessoires">ACCESSOIRES</router-link>
            <!-- <ul class="submenu">
              <li><router-link to="#helmen">Helmen</router-link></li>
              <li><router-link to="#sloten">Sloten</router-link></li>
            </ul> -->
          </li>
          <li>
            <router-link to="#fietsplan">REPARATIE</router-link>
          </li>
          <li>
            <router-link to="#fietsplan">OVER ONS</router-link>
          </li>
          <li>
            <router-link to="#fietsplan">CONTACT</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </transition>
</template>


<style scoped>
header {
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  background-size: 75% auto;
  background-color: black;
  background-repeat: repeat;
  background-image:
    linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgb(16 16 16 / 1)),
    url('/assets/background/bike-chain.png');
  z-index: 10;
  transition:
    transform 0.28s ease,
    height 0.25s ease;
  height: 80px;
  border-bottom: solid #600026;

  #menu {
    height: 24px;
    position: absolute;
    top: 16px;
    right: 24px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: transform 0.35s ease-out;
  }

  #letters {
    position: absolute;
    left: 20px;
    top: 12px;
    height: 36px;
    cursor: pointer;
  }

  #lines,
  #logo-bottom {
    top: 53px;
  }

  #lines {
    position: absolute;
    bottom: 0;
  }

  #logo-bottom {
    position: absolute;
    z-index: 20;

    img {
      height: 24px;
    }
  }
}

a {
  color: white;
  text-decoration: none;
}

header.visible {
  transform: translateY(0);
  opacity: 1;
}

header.opened {

  height: 480px;

  nav {
    margin: auto;
    margin-top: 124px;
  }

  #menu {
    transform: rotate(-90deg);
  }
}
</style>