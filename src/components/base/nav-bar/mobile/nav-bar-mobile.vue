<template>
  <nav>
    <div id="li-logo" @click="clicked('/', 'home')">
      <img id='logo-part-1' src="@/assets/logo_part_1.png">
    </div>
    <div id="lines">
      <div id="logo-parts-bottom">
        <img id='logo-part-2' src="@/assets/logo_part_2_mob.png">
        <img id='logo-part-3' src="@/assets/logo_part_3.png">
      </div>
      <Lines size="6px" />
    </div>
    <ul id="ul-nav">
      <li class='li-nav-subbed'>
      <li class='li-nav'>
        <div class='li-select' @click="[clicked('', 'bicycle'), bikeSubMenuAppearance()]">
          <img :style="{ opacity: selected == 'bicycle' ? 1 : 0 }" src="@/assets/icons/gear.png" />
          <p>FIETSEN</p>
          <img :style="{ opacity: selected == 'bicycle' ? 1 : 0 }" src="@/assets/icons/gear.png" />
        </div>
      </li>
      <div class="sub-menu" :style="{ visibility: visibleBikeSub, opacity: opacBikeSub }">
        <ul>
          <li @click="[clicked('/fietsen/elektrisch', 'bicycle'), bikeSubMenuAppearance()]">
            <div class='sub-menu-item'><img src="@/assets/icons/bike-electric.png">
              <p>ELEKTRISCH</p>
            </div>
          </li>
          <li @click="[clicked('/fietsen/stad', 'bicycle'), bikeSubMenuAppearance()]">
            <div class='sub-menu-item'><img src="@/assets/icons/bike.png">
              <p>STAD</p>
            </div>
          </li>
          <li @click="[clicked('/fietsen/sportief', 'bicycle'), bikeSubMenuAppearance()]">
            <div class='sub-menu-item'><img src="@/assets/icons/bike-sport.png">
              <p>SPORTIEF</p>
            </div>
          </li>
          <li @click="[clicked('/fietsen/bedrijfs-gerelateerd', 'bicycle'), bikeSubMenuAppearance()]">
            <div class='sub-menu-item'><img src="@/assets/icons/bike.png">
              <p>BEDRIJFSGERELATEERD</p>
            </div>
          </li>
        </ul>
      </div>
      </li>
      <li class='li-nav'>
        <div class='li-select' @click="clicked('/verhuur', 'rental')">
          <img :style="{ opacity: selected == 'rental' ? 1 : 0 }" src="@/assets/icons/gear.png" />
          <p>VERHUUR</p>
          <img :style="{ opacity: selected == 'rental' ? 1 : 0 }" src="@/assets/icons/gear.png" />
        </div>
      </li>
      <li class='li-nav'>
        <div class='li-select' @click="clicked('/lease', 'lease')">
          <img :style="{ opacity: selected == 'lease' ? 1 : 0 }" src="@/assets/icons/gear.png" />
          <p>FIETSPLAN</p>
          <img :style="{ opacity: selected == 'lease' ? 1 : 0 }" src="@/assets/icons/gear.png" />
        </div>
      </li>
      <li class='li-nav-subbed'>
        <div class='li-select' @click="[clicked(null, 'accos'), AccSubMenuAppearance()]">
          <img :style="{ opacity: selected == 'accos' ? 1 : 0 }" src="@/assets/icons/gear.png" />
          <p>ACCESSOIRES</p>
          <img :style="{ opacity: selected == 'accos' ? 1 : 0 }" src="@/assets/icons/gear.png" />
        </div>
        <div class="sub-menu" id="sub-menu-acc" :style="{ visibility: visibleAccSub, opacity: opacAccSub }">
          <ul>
            <li @click="[clicked('/accessoires/fietsendragers', 'accosseries'), AccSubMenuAppearance()]">
              <div class='sub-menu-item'><img src="@/assets/icons/bike-electric.png">
                <p>FIETSENDRAGERS</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li class='li-nav'>
        <div class='li-select' @click="clicked('/onderhoud-en-reparatie', 'repair')">
          <img :style="{ opacity: selected == 'repair' ? 1 : 0 }" src="@/assets/icons/gear.png" />
          <p>REPARATIE</p>
          <img :style="{ opacity: selected == 'repair' ? 1 : 0 }" src="@/assets/icons/gear.png" />
        </div>
      </li>
      <li class='li-nav'>
        <div class='li-select' @click="clicked('/over', 'about')">
          <img :style="{ opacity: selected == 'about' ? 1 : 0 }" src="@/assets/icons/gear.png" />
          <p>OVER ONS</p>
          <img :style="{ opacity: selected == 'about' ? 1 : 0 }" src="@/assets/icons/gear.png" />
        </div>
      </li>
      <li class='li-nav'>
        <div class='li-select' @click="clicked('/contact', 'contact')">
          <img :style="{ opacity: selected == 'contact' ? 1 : 0 }" src="@/assets/icons/gear.png" />
          <p>CONTACT</p>
          <img :style="{ opacity: selected == 'contact' ? 1 : 0 }" src="@/assets/icons/gear.png" />
        </div>
      </li>
    </ul>
  </nav>
</template> 
  
<script>

import Lines from '../../../lines.vue'

export default {
  name: "navBar",
  components: { Lines },
  data() {
    return {
      selected: 'selected',
      opacBikeSub: 0,
      opacAccSub: 0,
      visibleBikeSub: "hidden",
      visibleAccSub: "hidden"
    }
  },
  methods: {
    clicked(route, name) {
      this.selected = name;
      if (route != null) {
        this.$router.push(route);
      }
      // window.scrollTo(0, 430);
    },
    // clicked(route, name) {
    //   this.selected = name;
    //   this.$router.push(route);
    //   window.scrollTo(0, 0);
    // },
    bikeSubMenuAppearance() {
      if (this.opacBikeSub == 0) {
        this.opacBikeSub = 1;
        this.visibleBikeSub = "visible";
      } else {
        this.opacBikeSub = 0;
        this.visibleBikeSub = "hidden";
      }
    },
    AccSubMenuAppearance() {
      if (this.opacAccSub == 0) {
        this.opacAccSub = 1;
        this.visibleAccSub = "visible";
      } else {
        this.opacAccSub = 0;
        this.visibleAccSub = "hidden";
      }
    },
  },
};
</script>
  
<style scoped>
nav {
  background-size: cover;
  background-repeat: repeat;
  background-image:
    linear-gradient(to bottom, rgba(18, 18, 18, 0.8), rgb(16 16 16 / 1)),
    url('@/assets/bike-chain.png');
}

p {
  font-style: oblique;
  margin: 10px 0;
}

ul {
  list-style-type: none;
}

#ul-nav {
  margin: 0;
  padding: 16px 0;
}

.li-nav,
.li-nav-subbed {
  cursor: pointer;
}

#li-logo {
  cursor: pointer;
  padding-top: 8px;
}

#logo-part-1 {
  margin: auto;
  margin-bottom: 5px;
  height: 35px;
}

#logo-parts-bottom {
  position: absolute;
  width: 100%;
}

#logo-part-2,
#logo-part-3 {
  height: 23px;
}

.li-select {
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  img {
    margin: auto 0;
    height: 19px;
    transition: opacity 0.5s;
  }
}

.sub-menu {
  width: 100%;
  position: absolute;
  z-index: 1;
  right: 0;
  background: linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url('@/assets/bike-city.jpg');
  background-position: center;
  background-size: 100% 100%;
  border-radius: 0 0 0 60px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.25s linear;
  border-left: 2px solid #600026;
  border-bottom: 2px solid #600026;
}

#sub-menu-acc {
  background: rgba(0, 0, 0, 0.85);

}

.sub-menu ul {
  padding: 0 6px;
}

.sub-menu-item {
  display: flex;
  align-items: center;
  margin: 28px;
  overflow: hidden;

  img {
    width: 36px;
    height: 36px;
    margin-right: 48px;
  }
}
</style>  