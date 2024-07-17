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
  background-color: rgba(97, 0, 39, 0.5);
  height: 36vh;
  border-radius: 10px;
  box-shadow: 0 4px 4px #0000002e;
  border: 1px solid transparent;
  transition: background-color 500ms linear;

  /* transition: border-color 1s ease; */

  img {
    width: 100%;
    height: 80%;
    border-radius: 10px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    object-fit: cover;
  }

  p {
    font-size: 1.7rem
  }

}

.card:hover {
  /* border-bottom: 6px solid #ff8647; */
  /* border-color: #ff5c49; */
  /* border-bottom: 6px solid #d61a67; */
  /* border-bottom: 6px solid #600026; */
  background-color: #98124a;
}
</style>