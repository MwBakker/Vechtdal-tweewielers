<script setup>
import Hero from '@/components/Hero.vue'
import Intro from '@/components/Intro.vue'
import CarouselBrands from '@/components/Carousel.vue'
import Reviews from '@/components/reviews/Reviews.vue'
import ReviewsMobile from '@/components/reviews/Reviews-carousel.vue'
import CompanySubjects from '@/components/company-subjects/CompanySubjects.vue'
import { useMediaQuery } from '@/composables/UseMediaQuery'

const brands = ['gazelle', 'ridley', 'trenergy', 'bh', 'burgers', 'sensa']
const isMobile = useMediaQuery('(max-width: 800px)')
</script>

<template>
    <Hero />
    <Intro />
    <CarouselBrands :items="brands" />
    <CompanySubjects />
    <!-- <Maintenance /> -->
    <component :is="isMobile ? ReviewsMobile : Reviews" />
</template>

<style scoped lang="scss">
#jobs {
    text-decoration: underline;
    cursor: pointer;
}
</style>