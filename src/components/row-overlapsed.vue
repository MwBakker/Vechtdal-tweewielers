<script setup>
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
          <h1>{{ title }}</h1>
        </Transition>
        <p>{{ text }}</p>
        <Transition name="slide-fade-up" appear>
          <div class="button">
            <a :href="'https://' + link">Bezoek website</a>
          </div>
        </Transition>
      </div>
    </Transition>
    <img :src="`/assets/accessory/${imgSrc}`" />
  </div>
</template>

<style scoped>
.row {
  max-width: 1680px;
  margin: 0 auto;
  padding-inline: clamp(24px, 3vw, 64px);
  min-height: 54vh;
  position: relative;
  border-bottom: 0.1px solid rgb(50, 50, 50);
  display: flex;
}

#text {
  width: 50%;
  padding: 24px;
  text-align: left;
}

img {
  width: 50vw;
  margin-right: calc(50% - 50vw);
  object-fit: cover;
  -webkit-mask-image:
    linear-gradient(270deg, #000, transparent),
    linear-gradient(270deg, rgba(0, 0, 0, 0.5), transparent);
  -webkit-mask-size: 100% 50%;
  -webkit-mask-position: left top, left center;
}

p {
  word-break: break-word;
}

@media (max-width: 1024px) {
  .row {
    flex-direction: column;
    min-height: auto;
  }

  #text {
    width: 80%;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 36vh;
    margin-right: 0;
  }

  .button {
    width: 240px;
    margin: 0 auto;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.93);
  }
}
</style>