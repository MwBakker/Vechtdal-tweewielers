<script setup>
import RentalBlock from '../components/blocks/block-title.vue'
</script>

<template>
  <div id="background-rental">
    <Transition name="slide-fade-right" style="transition-delay: 0.1s" appear>
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

<style scoped>
#background-rental {
  flex: 1;
  background-image: url("/assets/shop/bike/bike-rental.jpg");
  background-size: 100% 100%;
  object-fit: cover;
  padding: 0 6.5%;
}
</style>