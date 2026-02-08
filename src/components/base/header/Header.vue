<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Lines from '../../Lines.vue'

import logoPart1 from '/assets/icon/logo_vechtdal/logo_part_1.png'
import bikeElectric from '/assets/shop/bike/bike-electric.jpg'
import movanext from '/assets/accessory/movanext.jpg'
import helmets from '/assets/accessory/helmets.jpg'

const router = useRouter()

const bikePos = ref(0)
const initialBikeOffset = 76
const lastClickedPos = ref(0)

const isHeaderHidden = ref(false)
let lastScrollY = window.scrollY

const subMenuImgSrc = ref(bikeElectric)
const liHome = ref(null)
const liSubBicycles = ref(null)
const liSubAccessories = ref(null)

const logoBottom = ref(null)

function handleScroll() {
  const currentScrollY = window.scrollY

  if (currentScrollY - lastScrollY > 10 && currentScrollY > 80) {
    isHeaderHidden.value = true
  }
  if (lastScrollY - currentScrollY > 10) {
    isHeaderHidden.value = false
  }
  lastScrollY = currentScrollY
}

onMounted(() => {
  const initial = getBikePos(liHome.value) + initialBikeOffset
  bikePos.value = initial
  lastClickedPos.value = initial

  window.addEventListener('scroll', handleScroll, { passive: true })
})

function getBikePos(el) {
  const target = el.getBoundingClientRect()
  const container = logoBottom.value.getBoundingClientRect()

  return target.left + target.width / 2 - container.left
}

function setBikePos(el) {
  bikePos.value = getBikePos(el)
}

function moveBack() {
  bikePos.value = lastClickedPos.value
}

function clicked(route, el) {
  lastClickedPos.value = getBikePos(el)
  router.push(route)
}

function clickedInPage(route, el) {
  lastClickedPos.value = getBikePos(el)
  bikePos.value = lastClickedPos.value
  router.push(route)
  window.scrollTo(0, 0)
}

function changePic(img) {
  subMenuImgSrc.value = img
}

onMounted(() => {
  const initial = getBikePos(liHome.value) + initialBikeOffset
  bikePos.value = initial
  lastClickedPos.value = initial
})
</script>

<template>
  <header :class="{ 'header-hidden': isHeaderHidden }">
    <div id="header-content">
      <div id="li-logo" ref="liHome" @click="clicked('/', liHome)" @mouseenter="setBikePos(liHome)">
        <img id="logo-part-1" :src="logoPart1" />
      </div>
      <nav>
        <ul id="ul-nav">
          <!-- FIETSEN -->
          <li ref="liSubBicycles" class="li-nav-subbed" @mouseenter="setBikePos(liSubBicycles)" @mouseleave="moveBack">
            <div id="li-bikes">
              FIETSEN
              <div class="hover-extend"></div>
            </div>
            <div class="sub-menu" :style="{ '--submenu-bg': `url(${subMenuImgSrc})` }">
              <ul>
                <li @click="clicked('/fietsen/nieuw', liSubBicycles)">
                  <div class="sub-menu-item">
                    <img src="/assets/icon/bike/bike-electric.png" />
                    NIEUW
                  </div>
                </li>
                <li @click="clicked('/fietsen/elektrisch', liSubBicycles)">
                  <div class="sub-menu-item">
                    <img src="/assets/icon/bike/bike-electric.png" />
                    TWEEDEHANDS
                  </div>
                </li>
                <li @click="clicked('/fietsen/elektrisch', liSubBicycles)">
                  <div class="sub-menu-item">
                    <img src="/assets/icon/bike/bike-electric.png" />
                    VERHUUR
                  </div>
                </li>
                <li @click="clicked('/fietsen/elektrisch', liSubBicycles)">
                  <div class="sub-menu-item">
                    <img src="/assets/icon/bike/bike-electric.png" />
                    MERKEN
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <!-- FIETSPLAN -->
          <li @mouseenter="setBikePos($event.currentTarget)" @mouseleave="moveBack"
            @click="clicked('/lease', $event.currentTarget)">
            FIETSPLAN
          </li>
          <li @mouseenter="setBikePos($event.currentTarget)" @mouseleave="moveBack"
            @click="clicked('/accessoires', $event.currentTarget)">
            ACCESSOIRES
          </li>
          <!-- ACCESSOIRES -->
          <!-- <li ref="liSubAccessories" class="li-nav-subbed" @mouseenter="setBikePos(liSubAccessories)"
            @mouseleave="moveBack">
            <div id="li-accessories">
              ACCESSOIRES
              <div class="hover-extend"></div>
            </div>
            <div class="sub-menu" :style="{ '--submenu-bg': `url(${subMenuImgSrc})` }">
              <ul>
                <li @mouseenter="changePic(movanext)" @click="clicked('/accessoires/fietsendragers', liSubAccessories)">
                  <div class="sub-menu-item">
                    <img src="/assets/icon/rack.png" />
                    FIETSENDRAGERS
                  </div>
                </li>
                <li @mouseenter="changePic(helmets)" @click="clicked('/accessoires/fietshelmen', liSubAccessories)">
                  <div class="sub-menu-item">
                    <img src="/assets/icon/helmet.png" />
                    FIETSHELMEN
                  </div>
                </li>
              </ul>
            </div>
          </li> -->
          <!-- REPARATIE -->
          <li @mouseenter="setBikePos($event.currentTarget)" @mouseleave="moveBack"
            @click="clicked('/onderhoud-en-reparatie', $event.currentTarget)">
            REPARATIE
          </li>
          <!-- OVER -->
          <li @mouseenter="setBikePos($event.currentTarget)" @mouseleave="moveBack"
            @click="clicked('/over', $event.currentTarget)">
            OVER ONS
          </li>
          <!-- CONTACT -->
          <li @mouseenter="setBikePos($event.currentTarget)" @mouseleave="moveBack"
            @click="clicked('/contact', $event.currentTarget)">
            CONTACT
          </li>

          <li id="li-info">
            <img data-v-573a4b22="" alt="phone" src="/assets/icon/contact/telephone.png">
            0523 255 104
          </li>
        </ul>
      </nav>
    </div>
    <div id="lines">
      <div id="logo-parts-bottom" ref="logoBottom">
        <img id="logo-part-2" src="/assets/icon/logo_vechtdal/logo_part_2.png" />
        <img id="bike" :style="{ left: bikePos + 'px' }" src="/assets/icon/logo_vechtdal/logo_part_3.png" />
      </div>
      <Lines size="6px" />
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  width: 100vw;
  z-index: 99;
  background-size: 35% auto;
  background-color: black;
  background-repeat: repeat;
  background-image:
    linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgb(16 16 16 / 1)),
    url('/assets/background/bike-chain.png');
  padding-top: 12px;
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

#li-accessories,
#li-bikes {
  position: relative;
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
    left: 2.5vw;
  }

  #bike {
    position: absolute;
    height: 23px;
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
  top: 52px;
  width: calc(100vw - 50%);
  transform: translateX(0);
  background-image:
    linear-gradient(to right,
      rgb(18 18 18 / 1),
      rgb(18 18 18 / .9),
      rgb(18 18 18 / .5),
      transparent),
    var(--submenu-bg);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  background-position: center;
  background-size: 100% auto;
  border-radius: 0 0 0 60px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  border-left: 5px solid #600026;
  border-bottom: 5px solid #600026;

  ul {
    width: 60%;
    padding: 0 6px;
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

#info-row {
  padding: 0;
  overflow: hidden;
}

#job-offer {
  cursor: pointer;
  padding-bottom: 8px;
}

@media (max-width: 1372px) {
  #li-info {
    display: none;
  }
}
</style>
