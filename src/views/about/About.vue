<script setup>
import { ref, onMounted } from "vue"
import AboutDesktop from "./AboutDesktop.vue"
import AboutMobile from "./AboutMobile.vue";

const isMobile = ref(false)

onMounted(() => {
    isMobile.value = window.innerWidth <= 768
})
</script>

<template>
    <AboutMobile v-if="isMobile" />
    <AboutDesktop v-else />
</template>
