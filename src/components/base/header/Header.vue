<script setup>
import { ref, watch, nextTick, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useHideOnScroll } from "@/composables/HideOnScroll";
import Lines from "../../Lines.vue";

import { useHeaderTitle } from "@/composables/UseHeaderTitle";
import logoPart1 from "/assets/icon/logo_vechtdal/logo_part_1.png";
import bikeElectric from "/assets/shop/bike/bike-electric.jpg";

const router = useRouter();
const route = useRoute();

const bikePos = ref(0);
const lastClickedPos = ref(0);

const logoImg = ref(null);
const liHome = ref(null);
const logoBottom = ref(null);
const menuRefs = ref({});

const activeSubRoute = ref(null);
const subMenuImgSrc = ref(bikeElectric);

const menuItems = [
  {
    label: "FIETSEN",
    routeMatch: ["stock-new", "stock-used", "rental", "brands", "company"],
    submenu: [
      { label: "NIEUW", routeName: "stock-new" },
      { label: "GEBRUIKT", routeName: "stock-used" },
      { label: "VERHUUR", routeName: "rental" },
      { label: "MERKEN", routeName: "brands" },
      { label: "VOOR BEDRIJVEN", routeName: "company" },
    ],
  },
  { label: "FIETSPLAN", routeName: "lease" },
  { label: "ACCESSOIRES", routeName: "accessoires" },
  { label: "REPARATIE", routeName: "maintenance" },
  { label: "OVER ONS", routeName: "about" },
  { label: "CONTACT", routeName: "contact" },
];

const { visible } = useHideOnScroll();

const currentLabel = useHeaderTitle(menuItems);

function getBikePos(el) {
  const container = logoBottom.value.getBoundingClientRect();

  if (el === liHome.value && logoImg.value) {
    const img = logoImg.value.getBoundingClientRect();
    return img.left - container.left + img.width * 0.9;
  }

  const target = el.getBoundingClientRect();
  return target.left - container.left + target.width / 2;
}

function setBikePos(el) {
  bikePos.value = getBikePos(el);
}

function moveBack() {
  bikePos.value = lastClickedPos.value;
}

function navigate(routeName, el, scrollTop = false) {
  const pos = getBikePos(el);
  bikePos.value = pos;
  lastClickedPos.value = pos;
  router.push({ name: routeName });

  if (scrollTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

let isFirstRun = true;

watch(
  () => route.name,
  async (name) => {
    await nextTick();
    if (name === "home" && isFirstRun) {
      const container = logoBottom.value.getBoundingClientRect();
      const pos = container.width * 0.13;

      bikePos.value = pos;
      lastClickedPos.value = pos;

      isFirstRun = false;
      return;
    }
    if (name === "home" && liHome.value) {
      const pos = getBikePos(liHome.value);
      bikePos.value = pos;
      lastClickedPos.value = pos;
      return;
    }
    const targetItem = menuItems.find(
      (item) => item.routeName === name || item.routeMatch?.includes(name),
    );
    if (!targetItem) return;
    const el = menuRefs.value[targetItem.label];
    if (!el) return;
    const pos = getBikePos(el);
    bikePos.value = pos;
    lastClickedPos.value = pos;
  },
  { immediate: true },
);
</script>

<template>
  <header :class="{ 'header-hidden': !visible }">
    <div id="header-content">
      <!-- LOGO -->
      <div id="li-logo" ref="liHome" @mouseenter="setBikePos(liHome)" @click="navigate('home', liHome)">
        <img id="logo-part-1" ref="logoImg" :src="logoPart1" />
      </div>
      <!-- NAVIGATION -->
      <nav>
        <ul id="ul-nav">
          <li v-for="item in menuItems" :key="item.label" :ref="(el) => (menuRefs[item.label] = el)"
            :class="{ 'li-nav-subbed': item.submenu }" @mouseenter="setBikePos(menuRefs[item.label])"
            @mouseleave="moveBack" @click="item.routeName && navigate(item.routeName, menuRefs[item.label])">
            <!-- LABEL -->
            <div v-if="item.submenu" class="nav-label">
              {{ item.label }}
              <div class="hover-extend"></div>
            </div>
            <span v-else>
              {{ item.label }}
            </span>
            <!-- SUB MENU -->
            <div v-if="item.submenu" class="sub-menu" :style="{ '--submenu-bg': `url(${subMenuImgSrc})` }">
              <ul>
                <li v-for="sub in item.submenu" :key="sub.label" @mouseenter="activeSubRoute = sub.routeName"
                  @mouseleave="activeSubRoute = route.name" @click.stop="() => {
                    activeSubRoute = sub.routeName
                    navigate(sub.routeName, menuRefs[item.label], true)
                  }">
                  <div class="sub-menu-item">
                    <img class="gear-icon" v-if="activeSubRoute === sub.routeName" src="/assets/icon/gear.png" />
                    {{ sub.label }}
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <!-- INFO -->
          <li id="li-info">
            <img src="/assets/icon/contact/telephone.png" alt="phone" />
            0523 255 104
          </li>
        </ul>
      </nav>
    </div>
    <!-- BIKE + LINES -->
    <div id="lines">
      <div id="logo-parts-bottom" ref="logoBottom">
        <img id="logo-part-2" src="/assets/icon/logo_vechtdal/logo_part_2_no_background.png" />
        <img id="bike" src="/assets/icon/logo_vechtdal/logo_part_3.png" :style="{ left: bikePos + 'px' }" />
      </div>
      <Lines size="6px" />
    </div>
    <h1 id="headline" v-if="currentLabel !== 'Home'" :class="{ 'header-hidden': !visible }">
      {{ currentLabel }}
    </h1>
  </header>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  width: 100vw;
  z-index: 99;
  background-color: black;
  background-repeat: repeat;
  background-size: 20% auto;
  background-image:
    linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgb(16 16 16 / 1)),
    url("/assets/background/bike-chain.png");
  padding-top: 14px;
  transition: transform 0.25s ease;

  #header-content {
    display: flex;
    align-items: flex-end;
    max-width: 1680px;
    margin: 0 auto;
    padding-inline: clamp(20px, 3vw, 64px);
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    #ul-nav {
      display: flex;
      width: 100%;
      margin: 16px 0 0 2%;
      align-items: flex-end;
    }
  }
}

.header-hidden {
  transform: translateY(-100%);
}

ul {
  list-style-type: none;
}

li {
  cursor: pointer;
  margin: 0 2.5%;
}

#lines {
  position: relative;
}

#logo-part-1 {
  height: 32px;
  cursor: pointer;
}

#logo-parts-bottom {
  position: relative;
  max-width: 1680px;
  margin: 0 auto;

  #logo-part-2 {
    position: absolute;
    height: 24px;
    left: 1.75vw;
  }

  #bike {
    position: absolute;
    height: 18px;
    transform: translateX(-50%);
    transition: left 0.5s;
    z-index: 5;
  }
}

.hover-extend {
  z-index: 1;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  right: 0;
  height: 40px;
  width: 125px;
}

.li-nav-subbed {
  position: relative;
}

.sub-menu {
  position: absolute;
  top: 46px;
  width: calc(100vw - 50%);
  background-image:
    linear-gradient(to right,
      rgb(18 18 18 / 1),
      rgb(18 18 18 / 0.9),
      rgb(18 18 18 / 0.5),
      transparent),
    var(--submenu-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  z-index: 1;
  border-radius: 0 0 0 60px;
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.5s linear;
  border-left: 5px solid #600026;
  border-bottom: 5px solid #600026;

  ul {
    width: 60%;
    padding: 0 6px;
  }

  .gear-icon {
    width: 24px;
    height: 24px;
  }
}

li.li-nav-subbed:hover>.sub-menu,
.hover-extend {
  visibility: visible;
  opacity: 1;
}

.sub-menu-item {
  display: flex;
  margin: 48px;
  justify-content: left;
  align-items: center;
  overflow: hidden;

  img {
    width: 36px;
    height: 36px;
    margin-right: 26px;
    float: left;
  }
}

#li-info {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0;

  img {
    margin: 0 8px 0 0;
    height: 18px;
  }
}

h1 {
  left: 0;
  right: 0;
  top: 76px;
  padding: 12px;
  width: 600px;
}

@media (max-width: 1372px) {
  #li-info {
    display: none;
  }
}
</style>
