<template>
  <nav>
    <div id="header-content">
      <div id="li-logo" ref="li_home" @click="clicked('/', $event)" @mouseover="moveToItem($event)"
        @mouseleave="moveBack()">
        <img id='logo-part-1' ref="logo_parts" src="@/assets/logo_part_1.png">
      </div>
      <div id="titles">
        <ul id="ul-nav">
          <li ref="li_sub_bicycles" class='li-nav-subbed' @mouseover="moveToItem($event)" @mouseleave="moveBack()">
            <p id="sub-title">FIETSEN</p>
            <div class="hover-extend" :style="{ left: leftPosBicycles + 'px' }"></div>
            <div class="sub-menu" :style="{
              left: leftPosBicycles + 'px',
              backgroundImage: 'linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url(' + subMenuImgSrc + ')'
            }">
              <ul>
                <li @click="clicked('/fietsen/elektrisch', $event)" @mouseover="changePic('bike-electric')">
                  <div class='sub-menu-item'><img src="@/assets/icons/bike-electric.png">
                    <p>ELEKTRISCH</p>
                  </div>
                </li>
                <li @click="clicked('/fietsen/stad', $event)" @mouseover="changePic('bike-city')">
                  <div class='sub-menu-item'><img src="@/assets/icons/bike.png">
                    <p>STAD</p>
                  </div>
                </li>
                <li @click="clicked('/fietsen/sportief', $event)" @mouseover="changePic('bike-sport')">
                  <div class='sub-menu-item'><img src="@/assets/icons/bike-sport.png">
                    <p>SPORTIEF</p>
                  </div>
                </li>
                <li @click="clicked('/fietsen/bedrijfs-gerelateerd', $event)" @mouseover="changePic('bike-business')">
                  <div class='sub-menu-item'><img src="@/assets/icons/bike.png">
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
            <p id="li-accessories">ACCESOIRES</p>
            <div class="sub-menu" :style="{
              left: leftPosAccessories + 'px',
              backgroundImage: 'linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url(' + subMenuImgSrc + ')'
            }">
              <ul>
                <li ref="li_accessories" @click="clicked('/accessoires/fietsendragers', $event)"
                  @mouseover="moveToItem($event)">
                  <div class='sub-menu-item'><img src="@/assets/icons/bike-electric.png">
                    <p>FIETSENDRAGERS</p>
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
          <img alt="phone" src="@/assets/icons/telephone.png">
          <p>0523 225 104</p>
        </div>
      </div>
    </div>
    <div id="lines">
      <div id="logo-parts-bottom">
        <img id='logo-part-2' src="@/assets/logo_part_2.png">
        <img id='logo-part-3' :style="{ marginLeft: bikePos + 'px' }" src="@/assets/logo_part_3.png">
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
      subMenuImgSrc: this.getImageUrl('bike-electric'),
      accSubMenuImgSrc: this.getImageUrl('movanext'),
    }
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../../../assets/${name}.jpg`, import.meta.url).href
    },
    moveToItem(e) {
      (event.target.id == 'logo-part-1') ?
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
    getBikePos(element) {
      const elDimensions = element.getBoundingClientRect();
      const logoWidth = this.$refs.logo_parts.getBoundingClientRect().width;
      return elDimensions.right - (elDimensions.width / 2) - logoWidth;
    },
    changePic(src) {
      this.subMenuImgSrc = this.getImageUrl(src);
    }
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
  width: 65%;
  margin: 16px 2% 0 0.75%;
  align-items: flex-end;
}

#lines {
  position: relative;
}

li {
  cursor: pointer;
  margin: 0 2.5%;
  margin-bottom: 4px;
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
  height: 80px;
  width: 125px;
}

.sub-menu {
  position: absolute;
  z-index: 1;
  top: 71px;
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
    float: left;
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

  /* p {
    font-size: 16px;
  } */
}

#li-accessories {
  margin-top: -4%;
}

li p {
  /* font-size: 18px; */
  margin: 0;
}

p {
  font-style: oblique;
  /* font-size: 14px; */
  color: white;
}

#li-info {
  cursor: initial;
  margin: 8px 16px 7px 8px;

  p {
    margin: 0;
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

.info-div {
  overflow: hidden;
  margin-bottom: 4px;

  img,
  p {
    float: left;
  }

  img {
    margin: 0 8px;
    height: 14px;
  }

  p {
    /* font-size: 14px; */
  }
}

/* @media screen and (min-width: 800px) and (max-width: 1024px) {

  li p,
  .sub-menu {
    font-size: 12px;
  }

  #sub-title {
    margin-top: -16%;
  }

  #li-info {
    display: none;
  }

  #li-accessories {
    margin-top: -10%;
  } */

  /* .sub-menu-item img { 
    height: 24px;
    margin: 14px 6% 18px 3%;
    float: left;
  }
  .sub-menu-item p { 
    font-size: 12px;
  }
  #li-info { 
    margin: 35px 18px 0 0;
  }  */
/* } */

/* @media screen and (min-width: 1024px) and (max-width: 1280px) {

  li p,
  .sub-menu {
    font-size: 13px;
  }

  #sub-title {
    margin-top: -15.5%;
  }

  #li-info {
    display: block;
  }

  #li-accessories {
    margin-top: -10%;
  } */

  /* .sub-menu-item img { 
    height: 24px;
    margin: 14px 6% 18px 3%;
    float: left;
  }
  .sub-menu-item p { 
    font-size: 12px;
  }
  #li-info { 
    margin: 35px 18px 0 0;
  }  */
/* } */
</style>
