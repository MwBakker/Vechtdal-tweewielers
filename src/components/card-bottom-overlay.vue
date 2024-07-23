<template>
  <div class="card">
    <img :src="getImageUrl(imgSrc)" alt={{title}} />
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/${name}.jpg`, import.meta.url).href
    }
    return {
      getImageUrl
    }
  },
  name: "cardOverlayBottom",
  props: {
    imgSrc: String,
    title: String
  }
};
</script>

<style scoped>
.card {
  width: 22%;
  height: 40vh;
  background-color: rgba(97, 0, 39, 0.5);
  margin: 0 1.5%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  box-shadow: 0 4px 4px #0000002e;
  cursor: pointer;
  transition: all 0.35s;

  img {
    height: 100%;
    box-shadow: 0 4px 4px #0000002e;
    border-radius: 10px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    object-fit: cover;
  }
}

p {
  font-size: 1.2vw;
  margin: 28px 0;
}


.card:hover {
  background-color: #98124a;
}
</style>