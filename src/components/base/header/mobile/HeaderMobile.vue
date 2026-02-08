<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Lines from '@/components/Lines.vue'

const showMenu = ref(false)
const visible = ref(true)
const activeItem = ref(null);

function setActive(id) {
  activeItem.value = id;
  showMenu.value = false
}

const menuItems = [
  { id: 'fietsen', label: 'FIETSEN', to: '/fietsen/nieuw' },
  { id: 'rental', label: 'VERHUUR', to: '/verhuur' },
  { id: 'lease', label: 'FIETSPLAN', to: '/lease' },
  { id: 'accessories', label: 'ACCESSOIRES', to: '/accessoires' },
  { id: 'reparatie', label: 'REPARATIE', to: '/onderhoud-en-reparatie' },
  { id: 'overons', label: 'OVER ONS', to: '/over' },
  { id: 'contact', label: 'CONTACT', to: '/contact' }
]

let lastY = window.scrollY

function onScroll() {
  const y = window.scrollY
  const goingUp = y < lastY
  if (showMenu.value) {
    visible.value = true
    lastY = y
    return
  }

  if (y < 40) {
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
        <ul>
          <li v-for="item in menuItems" :key="item.id" :class="{ active: activeItem === item.id }"
            @click="setActive(item.id)">
            <router-link :to="item.to" class="link">
              <img v-if="activeItem === item.id" src="/assets/icon/gear.png" />
              {{ item.label }}
              <img v-if="activeItem === item.id" src="/assets/icon/gear.png" />
            </router-link>
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
  height: 80px;
  z-index: 10;

  background-color: black;
  background-repeat: repeat;
  background-image:
    linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgb(16 16 16 / 1)),
    url('/assets/background/bike-chain.png');

  border-bottom: solid #600026;

  transform: translateY(0);
  transition:
    transform 0.28s ease,
    height 0.25s ease;
}

header.visible {
  transform: translateY(0);
}

header:not(.visible) {
  transform: translateY(-100%);
}

header.opened {
  height: 542px;
}

header.opened nav {
  margin: auto;
  margin-top: 106px;
}

header.opened #menu {
  transform: rotate(-90deg);
}

#menu {
  position: absolute;
  top: 16px;
  right: 24px;
  height: 24px;
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

#logo-bottom,
#lines {
  position: absolute;
  top: 53px;
  pointer-events: none;
}

#logo-bottom {
  z-index: 20;
}

#logo-bottom img {
  height: 24px;
}

a {
  color: white;
  text-decoration: none;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 32px 0;
}

li img {
  height: 16px;
  padding: 0 12px;
}
</style>