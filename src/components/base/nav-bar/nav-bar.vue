<template>
  <nav>
    <div id="header-content">
      <div id="li-logo" ref="li_home" @click="clicked('/', $event)" @mouseover="moveToItem($event)">
        <img id='logo-part-1' ref="logo_parts" :src="getImageSrc('logo_part_1.png')">
      </div>
      <div id="titles">
        <ul id="ul-nav">
          <li ref="li_sub_bicycles" class='li-nav-subbed' @mouseover="moveToItem($event)" @mouseleave="moveBack()">
            <div id="li-bikes">
              <p>FIETSEN</p>
              <div class="hover-extend"></div>
            </div>
            <div class="sub-menu" :style="{
              left: leftPosBicycles + 'px',
              backgroundImage: 'linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url(' + subMenuImgSrc + ')'
            }">
              <ul>
                <li @click="clicked('/fietsen/elektrisch', $event)" @mouseover="changePic('bike-electric')">
                  <div class='sub-menu-item'>
                    <img :src="getImageSrc('icons/bike-electric.png')">
                    <p>ELEKTRISCH</p>
                  </div>
                </li>
                <li @click="clicked('/fietsen/stad', $event)" @mouseover="changePic('bike-city')">
                  <div class='sub-menu-item'>
                    <img :src="getImageSrc('icons/bike.png')">
                    <p>STAD</p>
                  </div>
                </li>
                <li @click="clicked('/fietsen/sportief', $event)" @mouseover="changePic('bike-sport')">
                  <div class='sub-menu-item'>
                    <img :src="getImageSrc('icons/bike-sport.png')">
                    <p>SPORTIEF</p>
                  </div>
                </li>
                <li @click="clicked('/fietsen/bedrijfs-gerelateerd', $event)" @mouseover="changePic('bike-business')">
                  <div class='sub-menu-item'>
                    <img :src="getImageSrc('icons/bike.png')">
                    <p>BEDRIJFSGERELATEERD</p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li ref="li_rental" @click="clicked('/verhuur', $event)" @mouseover="moveToItem($event)"
            @mouseleave="moveBack()">
            <p>VERHUUR</p>
          </li>
          <li ref="li_lease" @click="clicked('/lease', $event)" @mouseover="moveToItem($event)"
            @mouseleave="moveBack()">
            <p>FIETSPLAN</p>
          </li>
          <li ref="li_sub_accessories" class='li-nav-subbed' @mouseover="moveToItem($event)" @mouseleave="moveBack()">
            <div id="li-accessories">
              <p>ACCESOIRES</p>
              <div class="hover-extend"></div>
            </div>
            <div class="sub-menu" :style="{
              left: leftPosAccessories + 'px',
              backgroundImage: 'linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url(' + subMenuImgSrc + ')'
            }">
              <ul>
                <li ref="li_accessories" @click="clicked('/accessoires/fietsendragers', $event)"
                @mouseover="changePic('movanext')">
                  <div class='sub-menu-item'>
                    <img :src="getImageSrc('icons/rack.png')">
                    <p>FIETSENDRAGERS</p>
                  </div>
                </li>
                <li ref="li_accessories" @click="clicked('/accessoires/fietshelmen', $event)"
                @mouseover="changePic('helmets')">
                  <div class='sub-menu-item'>
                    <img :src="getImageSrc('icons/helmet.png')">
                    <p>FIETSHELMEN</p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li ref="li_maintenance" @click="clicked('/onderhoud-en-reparatie', $event)" @mouseover="moveToItem($event)"
            @mouseleave="moveBack()">
            <p>REPARATIE</p>
          </li>
          <li class='li-nav' @click="clicked('/over', $event)" @mouseover="moveToItem($event)" @mouseleave="moveBack()">
            <p>OVER ONS</p>
          </li>
          <li ref="li_contact" @click="clicked('/contact', $event)" @mouseover="moveToItem($event)"
            @mouseleave="moveBack()">
            <p>CONTACT</p>
          </li>
          <!-- <li id="li-info" @mouseover="moveToItem($event)" @mouseleave="moveBack()"> -->
          <!-- <div id="job-offer" class="info-div" @click="clicked('/vacatures', $event)">
              <img alt="suitcase" src="../../../assets/icons/briefcase.png">
              <p>Vacatures</p>
            </div> -->
          <!-- </li> -->
        </ul>
        <div id="li-info" class="info-div" @mouseover="moveToItem($event)" @mouseleave="moveBack()">
          <img alt="phone" :src="getImageSrc('icons/telephone.png')">
          <p>0523 225 104</p>
        </div>
      </div>
    </div>
    <div id="lines">
      <div id="logo-parts-bottom">
        <img id='logo-part-2' :src="getImageSrc('logo_part_2.png')">
        <img id='logo-part-3' :style="{ marginLeft: bikePos + 'px' }" :src="getImageSrc('logo_part_3.png')">
      </div>
      <Lines size="6px" />
    </div>
  </nav>
</template>

<script>
import Lines from '../../lines.vue'
export default {
  name: "navBar",
  components: { Lines },
  data() {
    return {
      upHere: false,
      bikePos: 0,
      lastClickedPos: 0,
      leftPosBicycles: 0,
      leftPosAccessories: 0,
      subMenuImgSrc: this.getImageSrc('bike-electric.jpg'),
      accSubMenuImgSrc: this.getImageSrc('movanext.jpg'),
    }
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../../../assets/${name}.jpg`, import.meta.url).href
    },
    moveToItem(e) {
      (e.target.id == 'logo-part-1') ?
        this.bikePos = 0 :
        this.bikePos = this.getBikePos(e.target) + 17.5;
    },
    moveBack() {
      this.bikePos = this.lastClickedPos + 17.5;
    },
    clicked(route, event) {
      if (route.includes('fietsen'))
        this.lastClickedPos = this.getBikePos(this.$refs.li_sub_bicycles);
      else if (route.includes('accessoires'))
        this.lastClickedPos = this.getBikePos(this.$refs.li_sub_accessories);
      else
        this.lastClickedPos = this.getBikePos(event.target);
      this.$router.push(route);
    },
    clickedInPage(route, element) {
      this.lastClickedPos = this.getBikePos(element);
      this.bikePos = this.lastClickedPos;
      this.$router.push(route);
      window.scrollTo(0, 0);
    },
    getBikePos(el) {
      const elDimensions = el.getBoundingClientRect();
      const logoWidth = this.$refs.logo_parts.getBoundingClientRect().width;
      return elDimensions.right - (elDimensions.width / 2) - logoWidth;
    },
    changePic(src) {
      this.subMenuImgSrc = this.getImageUrl(src);
    },
  },
  mounted() {
    const initialBikePos = this.getBikePos(this.$refs.li_home);
    this.bikePos = initialBikePos;
    this.lastClickedPos = initialBikePos;
  },
  updated() {
    this.leftPosBicycles = this.$refs.li_sub_bicycles.getBoundingClientRect().left;
    this.leftPosAccessories = this.$refs.li_sub_accessories.getBoundingClientRect().left;
  }
};
</script>

<style scoped>
nav {
  background-size: 15% auto;
  background-repeat: repeat;
  background-image:
    linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgb(16 16 16 / 1)),
    url('../../../assets/bike-chain.png');
  padding-top: 12px;
}

#titles {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

#header-content {
  display: flex;
  align-items: flex-end;
}

ul {
  list-style-type: none;
}

#ul-nav {
  display: flex;
  width: 100%;
  margin: 16px 2% 0 0.75%;
  align-items: flex-end;
}

li {
  cursor: pointer;
  margin: 0 2.5%;
  margin-bottom: 4px;
}

#li-accessories,
#li-bikes {
  position: relative;
}

#lines {
  position: relative;
}


#logo-part-1 {
  margin-left: 10px;
  height: 35px;
  cursor: pointer;
}

#logo-parts-bottom {
  position: absolute;
}

#logo-part-2 {
  height: 24px;
}

#logo-part-3 {
  position: absolute;
  left: 90%;
  bottom: 5px;
  height: 23px;
  transition: margin-left 0.5s;
  z-index: 5;
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

#whut {
  background-color: red;
}

.sub-menu {
  position: absolute;
  z-index: 1;
  top: 75px;
  right: 0;
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

#li-accessories {
  margin-top: -4%;
}

p {
  margin: 0;
  font-style: oblique;
  white-space: nowrap;
}

#li-info {
  display: flex;
  width: 200px;
  cursor: initial;
}

#info-row {
  padding: 0;
  overflow: hidden;
}

#job-offer {
  cursor: pointer;
  padding-bottom: 8px;
}

.info-div {
  overflow: hidden;
  margin-bottom: 4px;

  img {
    margin: 0 8px 0 0;
    height: 18px;
  }
}

@media (max-width: 1372px) {
  .info-div {
    visibility: hidden;
  }
}
</style>
