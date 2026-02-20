<script setup>
defineProps({
  size: {
    type: String,
    default: "6px",
  },
  inverted: {
    type: Boolean,
    default: false,
  },
  showPurple: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="lines" :class="{ inverted }">
    <div class="line yellow" :style="{ borderBottomWidth: size }"></div>
    <div class="line orange" :style="{ borderBottomWidth: size }"></div>
    <div class="line pink" :style="{ borderBottomWidth: size }"></div>
    <div
      v-if="showPurple"
      class="line purple"
      :style="{ borderBottomWidth: size }"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.lines {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.lines.inverted {
  flex-direction: column-reverse;
}

.line {
  border-bottom-style: solid;
}
</style>
