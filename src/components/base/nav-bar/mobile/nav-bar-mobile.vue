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
        <ListItem title ="FIETSEN" subject="bicycle" @click="bikeSubMenuAppearance()" />
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
      <ListItem title="FIETSPLAN" subject="lease" />
      <li class='li-nav-subbed'>
        <ListItem title="ACCESSOIRES" subject="accosseries" @click="AccSubMenuAppearance()" />
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
      <ListItem title="REPARATIE" subject="maintenance" />
      <ListItem title="OVER ONS" subject="about" />
      <ListItem title="CONTACT" subject="contact" />
    </ul>
  </nav>
</template> 
  
<script>

import ListItem from '../mobile/li-item-icon.vue';
import Lines from '../../../lines.vue'

export default {
  name: "navBar",
  components: { ListItem, Lines, },
  data() {
    return {
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

ul {
  list-style-type: none;
}

#ul-nav {
  margin: 0;
  padding: 0;
}

.li-nav,
.li-nav-subbed {
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
}

.sub-menu-item {
  margin: 28px;
  overflow: hidden;

  img {
    width: 36px;
    height: 36px;
    margin-right: 32px;
    float: left;
  }

  p {
    /* font-size: 14px; */
    width: auto;
    float: left;
  }
}


.li-nav-icon {
  margin: 3px 20px 3px 0;
}

#li-info {
  float: right;
  margin-right: 26px;
}

#info-row {
  float: right;
  overflow: hidden;
}
</style>  