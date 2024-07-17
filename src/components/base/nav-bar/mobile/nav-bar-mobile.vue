<template>
  <nav id="nav-bar-mobile">
    <div id="nav-body">
      <div id="li-logo" @click="clicked('/', 'home')">
        <img id='logo-part-1' src="../../../assets/logo_part_1.png">
      </div>
      <div id="lines">
        <div id="logo-parts-bottom">
          <img id='logo-part-2' src="../../../assets/logo_part_2_mob.png">
          <img id='logo-part-3' src="../../../assets/logo_part_3.png">
        </div>
        <div id="line-yellow"></div>
        <div id="line-orange"></div>
        <div id="line-pink"></div>
        <div id="line-purple"></div>
      </div>
      <ul id="ul-nav">
        <li class='li-nav-subbed'>
          <div class='li-select'>
            <img :style="{ opacity: selected == 'bicycle' ? 1 : 0 }" :src="gearIcon" />
            <p id="sub-title" @click="bikeSubMenuAppearance()">FIETSEN</p>
            <img :style="{ opacity: selected == 'bicycle' ? 1 : 0 }" :src="gearIcon" />
          </div>
          <div class="sub-menu" :style="{ visibility: visibleBikeSub, opacity: opacBikeSub }">
            <ul>
              <li @click="[clicked('/fietsen/elektrisch', 'bicycle'), bikeSubMenuAppearance()]">
                <div class='sub-menu-item'><img src="../../../assets/icons/bike-electric.png">
                  <p>ELEKTRISCH</p>
                </div>
              </li>
              <li @click="[clicked('/fietsen/stad', 'bicycle'), bikeSubMenuAppearance()]">
                <div class='sub-menu-item'><img src="../../../assets/icons/bike.png">
                  <p>STAD</p>
                </div>
              </li>
              <li @click="[clicked('/fietsen/sportief', 'bicycle'), bikeSubMenuAppearance()]">
                <div class='sub-menu-item'><img src="../../../assets/icons/bike-sport.png">
                  <p>SPORTIEF</p>
                </div>
              </li>
              <li @click="[clicked('/fietsen/bedrijfs-gerelateerd', 'bicycle'), bikeSubMenuAppearance()]">
                <div class='sub-menu-item'><img src="../../../assets/icons/bike.png">
                  <p>BEDRIJFSGERELATEERD</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li ref="li_lease" class='li-nav' @click="clicked('/lease', 'lease')">
          <ListItem title="FIETSPLAN" subject="lease" />
        </li>
        <li class='li-nav-subbed'>
          <ListItem title="ACCESSOIRES" subject="accosseries" />
          <div class="sub-menu" id="sub-menu-acc" :style="{ visibility: visibleAccSub, opacity: opacAccSub }">
            <ul>
              <li @click="[clicked('/accessoires/fietsendragers', 'accosseries'), AccSubMenuAppearance()]">
                <div class='sub-menu-item'><img src="../../../assets/icons/bike-electric.png">
                  <p>FIETSENDRAGERS</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class='li-nav' @click="clicked('/onderhoud-en-reparatie', 'maintenance')">
          <ListItem title="REPARATIE" subject="maintenance" />
        </li>
        <li class='li-nav' @click="clicked('/over', 'about')">
          <ListItem title="OVER ONS" subject="about" />
        </li>
        <li class='li-nav' @click="clicked('/contact', 'contact')">
          <ListItem title="CONTACT" subject="contact" />
        </li>
      </ul>
    </div>
  </nav>
</template> 
  
<script>

import ListItem from '../mobile/li-item-icon.vue';

export default {
  name: "navBar",
  components: { ListItem },
  data() {
    return {
      gearIcon: require('../../../assets/icons/gear.png'),
      selected: 'home',
      opacBikeSub: 0,
      opacAccSub: 0,
      visibleBikeSub: "hidden",
      visibleAccSub: "hidden"
    }
  },
  methods: {
    clicked(route, name) {
      this.selected = name;
      this.$router.push(route);
      window.scrollTo(0, 0);
    },
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
  components: {

  }
};
</script>
  
<style scoped>
#nav-body {
  background-size: cover;
  background-repeat: repeat;
  background-image:
    linear-gradient(to bottom, rgba(18, 18, 18, 0.8), rgb(16 16 16 / 1)),
    url('../../../assets/bike-chain.png');
}

ul {
  list-style-type: none;
}

#ul-nav {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#lines {
  position: relative;
}

#line-yellow {
  border-bottom: 6px solid #ff8647;
}

#line-orange {
  border-bottom: 6px solid #ff5c49;
}

#line-pink {
  border-bottom: 6px solid #d61a67;
}

#line-purple {
  border-bottom: 6px solid #600026;
}

.li-nav,
.li-nav-subbed {
  overflow: hidden;
  margin: 16px 0;
}

#li-logo {
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

.li-nav-subbed {
  line-height: 20px;
}

.sub-menu {
  width: 100%;
  position: absolute;
  z-index: 1;
  right: 0;
  background: linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url('../../../assets/bike-city.jpg');
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
  float: left;
}

.sub-menu-item {
  display: flex;
  margin: 28px;
  justify-content: left;
  align-items: center;
  overflow: hidden;

  img {
    width: 36px;
    height: 36px;
    margin-right: 32px;
    float: left;
  }

  p {
    font-size: 14px;
    width: auto;
    float: left;
  }
}

.sub-menu ul li {
  float: none;
}

.li-nav-icon {
  margin: 3px 20px 3px 0;
}

li p {
  width: 69.75%;
  float: left;
  font-size: 18px;
  margin: 0;
}

p {
  font-style: oblique;
  font-size: 14px;
  color: white;
}

#li-info {
  float: right;
  margin-right: 26px;
}

#info-row {
  float: right;
  overflow: hidden;
}

#phone-icon {
  margin: 0 8px;
  height: 14px;
}

#phone-nr {
  font-size: 14px;
}
</style>  