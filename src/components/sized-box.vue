<template>
    <div :style="{'height':height}"></div>
</template>

<script>
export default {
    name: "sizedBox",
    props: {
        height: String,
    }
  };
</script>