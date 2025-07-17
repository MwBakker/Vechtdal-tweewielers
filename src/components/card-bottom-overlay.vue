<template>
  <div class="card">
    <div class="zoom-img">
      <img :src="getImageSrc(imgSrc)" alt={{title}}>
    </div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
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
  margin: 8px 1.5%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  box-shadow: 0 4px 4px #0000002e;
  cursor: pointer;
  transition: all 0.45s;
}

.zoom-img {
  overflow: hidden;
  height: 100%;
}

.zoom-img img {
  width: 100%;
  height: 98%;
  box-shadow: 0 4px 4px #0000002e;
  border-radius: 10px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  transition: all .3s ease-in-out;
}

.zoom-img img:hover {
  transform: scale(1.2);
}

h2 {
  margin: 24px 0;
}

.card:hover {
  background-color: #98124a;
}

@media (max-width: 1024px) {
  .card {
    width: 90%;
    height: 38vh;
  }
}
</style>