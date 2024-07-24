<template>
  <div class="row">
    <Transition name="slide-fade-right" appear>
      <div id="overlay">
        <div id="text">
          <Transition name="slide-fade-down" appear>
            <h1>{{ title }}</h1>
          </Transition>
          <p>{{ text }}</p>
          <Transition name="slide-fade-up" appear>
            <div class="button"><a :href="link">
                <p>Bezoek website</p>
              </a></div>
          </Transition>
        </div>
      </div>
    </Transition>
    <div class='row-img' :style="divStyle"></div>
  </div>
</template> 
  
<script>
export default {
  name: "overlapsedRow",
  data() {
    return {
      divStyle: {
        backgroundImage: 'url(src/assets/advanced-bikes.jpg)',
      }
    }
  },
  props: {
    link: String,
    imgSrc: String,
    title: String,
    text: String,
  }
};
</script>
  
<style scoped>
.row {
  position: relative;
  border-bottom: 0.1px solid rgb(50, 50, 50);
  display: flex;
}

.row-img {
  min-height: 42vh;
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  -webkit-mask-size: 100% 50%;
  -webkit-mask-position: left top, left center;
  flex: 3;
  object-fit: cover;
  background-size: 100% 100%;
  background-position: right;
  background-repeat: no-repeat;
}

#overlay {
  flex: 2;
  padding: 0 32px;
}

#text {
  height: 100%;
  text-align: left;
  white-space: nowrap;
}

p {
  text-align: justify;
  word-break: break-word;
  white-space: normal;
}

.button {
  cursor: pointer;
  border: 3px solid #600026;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 16px 42px 16px 42px;
  position: absolute;
  bottom: 32px;

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
    font-size: 1.1rem;
  }
}
</style>