<script setup>
defineProps({
  link: {
    type: String,
    required: true
  },
});

</script>

<template>
  <a :href="link" target="_blank">
    <div class="block"></div>
  </a>
</template>

<style scoped lang="scss">
.block {
  flex: 1;
  display: flex;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.98);
  flex-direction: column;
  margin: 2.25%;
  border: 3px solid #d61a67;
  border-radius: 20px;
  height: 225px;
}
</style>
