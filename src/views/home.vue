<script setup>
import Hero from '@/components/Hero.vue'
import Intro from '@/components/Intro.vue'
import CarouselBrands from '@/components/Carousel.vue'
import Reviews from '@/components/reviews/Reviews.vue'
import ReviewsMobile from '@/components/reviews/Reviews-carousel.vue'
import CompanySubjects from '@/components/company-subjects/CompanySubjects.vue'
import { useMediaQuery } from '@/composables/UseMediaQuery'
import { useSeoMeta, useHead } from '@unhead/vue'

useSeoMeta({
    title: 'Fietsen, E-bikes, Reparatie & Verhuur in Hardenberg',
    description:
        'Vechtdal Tweewielers in Hardenberg voor nieuwe en gebruikte fietsen, e-bikes, fietsverhuur, reparatie en accessoires.'
})

useHead({
    link: [
        {
            rel: 'canonical',
            href: 'https://www.vechtdaltweewielers.nl/'
        }
    ]
})

const brands = ['gazelle', 'ridley', 'kalkhoff', 'bh', 'burgers', 'sensa']
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