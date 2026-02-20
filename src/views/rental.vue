<script setup>
import RentalBlock from '../components/blocks/blockTitle.vue'
import { useSeoMeta, useHead } from '@unhead/vue'

useSeoMeta({
  title: 'Fietsverhuur',
  description:
    'Huur een fiets of e-bike bij Vechtdal Tweewielers in Hardenberg. Ideaal voor een dagje uit of vakantie in het Vechtdal.'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.vechtdaltweewielers.nl/verhuur'
    }
  ]
})
</script>

<template>
  <div id="rental">
    <Transition name=" slide-fade-right" style="transition-delay: 0.1s" appear>
      <RentalBlock title="Stadsfiets" priceDaily="15" priceWeekly="75" />
    </Transition>
    <Transition name="slide-fade-right" style="transition-delay: 0.25s" appear>
      <RentalBlock title="Mountainbike" priceDaily="35*" priceWeekly="175*" sideNote="* prijzen inclusief helm" />
    </Transition>
    <Transition name="slide-fade-right" style="transition-delay: 0.45s" appear>
      <RentalBlock title="E-bike" priceDaily="25*" priceWeekly="125*" sideNote="* prijzen inclusief helm" />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
#rental {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 132px 18vw 48px 18vw;
  background-image: url("/assets/shop/bike/bike-rental.jpg");
  background-size: 100% 130%;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 480px) {
  #rental {
    background-size: cover;
    padding: 72px 24px 24px 24px;
  }
}
</style>