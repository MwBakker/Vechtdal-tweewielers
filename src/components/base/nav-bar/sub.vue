<template>
    <div class="sub-menu"
      :style="{ left: leftPos + 'px', backgroundImage: `linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url(${'../../../assets/bike-' + subMenuImgSrc + '.jpg'})` }">
      <ul>
        <li @click="clicked('/fietsen/elektrisch', $event)" @mouseover="changePic('electric')">
          <div class='sub-menu-item'><img :src="getImageSrc('icons/bike-electric.png')">
            <p>ELEKTRISCH</p>
          </div>
        </li>
        <li @click="clicked('/fietsen/stad', $event)" @mouseover="changePic('city')">
          <div class='sub-menu-item'><img :src="getImageSrc('icons/bike.png')">
            <p>STAD</p>
          </div>
        </li>
        <li @click="clicked('/fietsen/sportief', $event)" @mouseover="changePic('sport')">
          <div class='sub-menu-item'><img :src="getImageSrc('icons/bike-sport.png')">
            <p>SPORTIEF</p>
          </div>
        </li>
        <li @click="clicked('/fietsen/bedrijfs-gerelateerd', $event)" @mouseover="changePic('business')">
          <div class='sub-menu-item'><img :src="getImageSrc('icons/bike.png')">
            <p>BEDRIJFSGERELATEERD</p>
          </div>
        </li>
      </ul>
    </div>
</template> 
  
<script>
export default {
  name: "navBarSub",
  data() {
    return {
      upHere: false,
      bikePos: 0,
      lastClickedPos: 0,
      leftPos: 0,
      subMenuImgSrc: 'bike-electric'
    }
  },
  methods: {
    moveToItem(e) {
      this.$emit('moveToItem', e);
    },
    moveBack() {
      this.$emit('moveBack');
    },
    clicked(route, event) {
      this.$emit('clicked', route, event);
    },
    getBikePos(element) {
      this.$emit('getBikePos', element);
    },
    changePic(src) {
      this.subMenuImgSrc = src;
    }
  },
  updated() {
    this.$emit('updated');
  }
};
</script>
  
<style scoped>

#ul-nav {
  margin: 0;
  padding: 0;
  overflow: hidden;
}


li {
  float: left;
  cursor: pointer;
}

.li-nav,
.li-nav-subbed {
  margin: 32px 2% 0 2%;
}

.li-nav-subbed {
  line-height: 31px;
}

#sub-title {
  margin-top: -7%;
}

.sub-menu {
  position: absolute;
  z-index: 1;
  top: 59px;
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

  p {
    float: left;
  }
}

.sub-menu ul li {
  float: none;
}

p {
  font-style: oblique;
}

#li-info {
  cursor: none;
  margin: 30px 12px 0 0;
  float: right;
}
</style>
  
  