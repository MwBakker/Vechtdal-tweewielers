<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHideOnScroll } from '@/composables/HideOnScroll'
import Lines from '@/components/Lines.vue'

const route = useRoute()

const showMenu = ref(false)
const openNode = ref(null)
const menuItems = [
  {
    id: 'fietsen',
    label: 'FIETSEN',
    children: [
      { id: 'fietsen-nieuw', label: 'NIEUW', routeName: 'stock-new' },
      { id: 'fietsen-tweedehands', label: 'TWEEDEHANDS', routeName: 'stock-used' },
      { id: 'fietsen-verhuur', label: 'VERHUUR', routeName: 'rental' },
      { id: 'fietsen-merken', label: 'MERKEN', routeName: 'brands' },
      {
        id: 'fietsen-bedrijf',
        label: 'VOOR BEDRIJVEN',
        routeName: 'bikeCompany'
      }
    ]
  },
  { id: 'lease', label: 'FIETSPLAN', routeName: 'lease' },
  { id: 'accessoires', label: 'ACCESSOIRES', routeName: 'accessoires' },
  { id: 'reparatie', label: 'REPARATIE', routeName: 'maintenance' },
  { id: 'about', label: 'OVER ONS', routeName: 'about' },
  { id: 'contact', label: 'CONTACT', routeName: 'contact' }
]

const activeItem = computed(() => {
  for (const item of menuItems) {
    if (item.children) {
      const childMatch = item.children.find(
        child => child.routeName === route.name
      )
      if (childMatch) return item.id
    }

    if (item.routeName === route.name) {
      return item.id
    }
  }
  return null
})

const { visible } = useHideOnScroll({
  threshold: 40,
  disabled: showMenu
})

const headerHeight = computed(() => {
  if (!showMenu.value) return '77px'
  let height = 464
  if (openNode.value === 'fietsen') height += 200
  return `${height}px`
})

const activeLabel = computed(() => {
  for (const item of menuItems) {
    if (item.children) {
      const child = item.children.find(
        child => child.routeName === route.name
      )
      if (child) return capitalize(child.label)
    }

    if (item.routeName === route.name) {
      return capitalize(item.label)
    }
  }
  return null
})

function capitalize(label = '') {
  return label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()
}

function toggleNode(id) {
  openNode.value = openNode.value === id ? null : id
}

watch(
  () => route.name,
  () => {
    openNode.value = activeItem.value
  },
  { immediate: true }
)
</script>


<template>
  <transition appear>
    <header :class="{ visible, opened: showMenu }" :style="{ height: headerHeight }">
      <!-- LOGO -->
      <img id="letters" src="/assets/icon/logo_vechtdal/logo_part_1.png" @click="$router.push({ name: 'home' })" />
      <!-- MENU BUTTON -->
      <img id="menu" src="/assets/icon/menu.png" @click="showMenu = !showMenu" />
      <!-- LOGO BOTTOM -->
      <div id="logo-bottom">
        <img src="/assets/icon/logo_vechtdal/logo_part_2_no_background.png" />
        <img id="bike" src="/assets/icon/logo_vechtdal/logo_part_3.png" />
      </div>
      <Lines id="lines" size="6px" :showPurple="false" />
      <!-- NAV -->
      <nav v-if="showMenu">
        <ul>
          <li v-for="item in menuItems" :key="item.id" :class="{ active: activeItem === item.id }">
            <!-- ROOT ITEM -->
            <div class="link">
              <router-link v-if="!item.children" :to="{ name: item.routeName }" @click="showMenu = false">
                <img v-if="activeItem === item.id" src="/assets/icon/gear.png" />
                {{ item.label }}
                <img v-if="activeItem === item.id" src="/assets/icon/gear.png" />
              </router-link>
              <span v-else @click="toggleNode(item.id)">
                <img v-if="activeItem === item.id" src="/assets/icon/gear.png" />
                {{ item.label }}
                <img v-if="activeItem === item.id" src="/assets/icon/gear.png" />
              </span>
            </div>
            <!-- CHILDREN -->
            <transition name="submenu">
              <ul v-if="item.children && openNode === item.id" class="submenu">
                <li v-for="child in item.children" :key="child.id">
                  <router-link :to="{ name: child.routeName }" @click="showMenu = false">
                    <img v-if="route.name === child.routeName" src="/assets/icon/gear.png" />
                    {{ child.label }}
                    <img v-if="route.name === child.routeName" src="/assets/icon/gear.png" />
                  </router-link>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>
      <h1 v-if="visible && !showMenu && activeItem">
        {{ activeLabel }}
      </h1>
    </header>
  </transition>
</template>

<style scoped>
header {
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 10;
  background-color: black;
  background-repeat: repeat;
  background-size: 100%;
  background-image:
    linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgb(16 16 16 / 1)),
    url('/assets/background/bike-chain.png');
  border-bottom: solid #600026 6px;
  transform: translateY(0);
  transition:
    transform 0.28s ease,
    height 0.25s ease;
}

header:not(.visible) {
  transform: translateY(-100%);
}

header.opened {
  nav {
    margin: auto;
    margin-top: 106px;
  }

  #menu {
    transform: rotate(-90deg);
  }

  h1 {
    display: none;
  }
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
  left: 24px;
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
  left: 2px;
  z-index: 20;

  img {
    height: 18px;
    margin-bottom: 5px;
  }
}

a {
  color: white;
  text-decoration: none;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

li {
  font-size: 1rem;
  margin: 32px 0;
  list-style: none;

  img {
    height: 16px;
    padding: 0 12px;
  }
}

.submenu {
  margin-top: 16px;
  padding-left: 0;

  li {
    margin: 12px 0;
    opacity: 0.85;
  }
}

h1 {
  position: absolute;
  top: 72px;
  left: 24px;
  right: 24px;
  padding: 12px 0;
  text-transform: capitalize;
  background-color: rgba(0, 0, 0, 0.85);
  border-left: solid 4px #600026;
  border-right: solid 4px #600026;
  border-bottom: solid 4px #600026;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: transform 0.25s ease;
}

.submenu-enter-active,
.submenu-leave-active {
  transition: all 0.25s ease;
}

.submenu-enter-from,
.submenu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>