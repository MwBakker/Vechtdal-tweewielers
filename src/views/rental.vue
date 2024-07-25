<template>
  <div id="background-rental">
    <Transition name="slide-fade-right" style="transition-delay: 0.1s" appear>
      <RentalBlock title="Stadsfiets" priceDaily="15" priceWeekly="75" />
    </Transition>
    <Transition name="slide-fade-right" style="transition-delay: 0.25s" appear>
      <RentalBlock title="Mountainbike" priceDaily="25*" priceWeekly="125*" sideNote="* prijzen inclusief helm" />
    </Transition>
    <Transition name="slide-fade-right" style="transition-delay: 0.45s" appear>
      <RentalBlock title="E-bike" priceDaily="25*" priceWeekly="125*" sideNote="* prijzen inclusief helm" />
    </Transition>
  </div>
</template>

<script>
import RentalBlock from '../components/block-title.vue'

export default {
  name: 'rental-page',
  components: { RentalBlock },
}
</script>

<style scoped>
#background-rental {
  flex: 1;
  background-image: url("../assets/bike-rental.jpg");
  background-size: 100% 100%;
  object-fit: cover;
}
</style>