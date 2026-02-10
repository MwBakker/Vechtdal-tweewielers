<script setup>
import CustomButton from './Button.vue'

defineProps({
  link: String,
  imgSrc: String,
  title: String,
  text: String
})
</script>

<template>
  <div class="row">
    <Transition name="slide-fade-right" appear>
      <div id="text">
        <Transition name="slide-fade-down" appear>
          <h2>{{ title }}</h2>
        </Transition>
        <p>{{ text }}</p>

        <Transition v-if="(link != null)" name="slide-fade-up" appear>
          <CustomButton :link="`www.${link}`" external>Bezoek website</CustomButton>
        </Transition>
      </div>
    </Transition>
    <img :src="`/assets/${imgSrc}`" />
  </div>
</template>

<style scoped>
.row {
  max-width: 1680px;
  margin: 0 auto;
  padding-inline: clamp(24px, 3vw, 64px);
  height: 500px;
  position: relative;
  border-bottom: 0.1px solid rgb(50, 50, 50);
  display: flex;

  #text {
    width: 50%;
    padding: 136px 0;
    text-align: left;
  }

  img {
    width: 50vw;
    margin-right: calc(50% - 50vw);
    -webkit-mask-image:
      linear-gradient(270deg, #000, transparent),
      linear-gradient(270deg, rgba(0, 0, 0, 0.5), transparent);
    -webkit-mask-size: 100% 50%;
    -webkit-mask-position: left top, left center;
  }
}

p {
  word-break: break-word;
}

@media (max-width: 1024px) {
  .row {
    padding: 0;
    height: 650px;
    flex-direction: column;
    justify-content: space-between;
    min-height: auto;

    #text {
      width: 100%;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 100%;
      height: 380px;
      object-fit: cover;
      margin-right: 0;
      -webkit-mask-image:
        linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
      -webkit-mask-size: 100% 100%;
      -webkit-mask-position: center;
    }
  }
}
</style>