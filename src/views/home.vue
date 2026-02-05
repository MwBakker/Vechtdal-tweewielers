<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Hero from '@/components/Hero.vue'
import Intro from '@/components/Intro.vue'
import CarouselBrands from '@/components/Carousel.vue'
import Reviews from '@/components/Reviews.vue'
import CompanySubjects from '@/components/company-subjects/CompanySubjects.vue'
import Maintenance from '@/components/Maintenance.vue'

const isMobile = ref(window.innerWidth <= 800)

const brands = ['gazelle', 'ridley', 'trenergy', 'bh', 'burgers', 'sensa']

function checkMobile() {
    isMobile.value = window.innerWidth <= 800
}

onMounted(() => {
    window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
})
</script>

<template>
    <Hero />
    <Intro />
    <CarouselBrands :items="brands" />
    <CompanySubjects />
    <!-- <Maintenance /> -->
    <Reviews id="reviews" />
</template>


<style scoped lang="scss">

#reviews {
    margin: 4vh 7.55%;
}

#jobs {
    text-decoration: underline;
    cursor: pointer;
}
</style>