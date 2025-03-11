<template>
  <div class="row">
    <Transition name="slide-fade-right" appear>
      <div id="text">
        <Transition name="slide-fade-down" appear>
          <h1>{{ title }}</h1>
        </Transition>
        <p>{{ text }}</p>
        <Transition name="slide-fade-up" appear>
          <div class="button">
            <a :href="'https://' + link">
              <p>Bezoek website</p>
            </a>
          </div>
        </Transition>
      </div>
    </Transition>
    <img :src="getImageSrc(imgSrc)" />
  </div>
</template>

<script>

export default {
  name: "overlapsedRow",
  props: {
    link: String,
    imgSrc: String,
    title: String,
    text: String,
  },
};
</script>

<style scoped>
.row {
  height: 54vh;
  position: relative;
  border-bottom: 0.1px solid rgb(50, 50, 50);
  display: flex;
  justify-content: space-between;
}

#text {
  width: 50%;
  padding: 24px;
  text-align: left;
  white-space: nowrap;
}

img {
  width: 45%;
  object-fit: cover;
  -webkit-mask-image: linear-gradient(270deg, #000, transparent), linear-gradient(270deg, rgba(0, 0, 0, .5), transparent);
  -webkit-mask-size: 100% 50%;
  -webkit-mask-position: left top, left center;
}

p {
  text-align: left;
  word-break: break-word;
  white-space: normal;
}

@media only screen and (max-width: 1024px) {
  .row {
    flex-direction: column;
    height: 73vh;
    max-height: 140vh;
  }

  #text {
    width: 92%;
  }

  img {
    width: 100%;
  }

  img {
    height: 36vh;
  }

  .button {
    width: 40%;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.93);
    bottom: 8px;
    left: 0;
    right: 0;
    margin: 0 auto;

    p {
      text-align: center;
    }
  }

  @media screen and (max-width: 1024px) {
    .row {
      height: 100%;
    }

    #text {
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>