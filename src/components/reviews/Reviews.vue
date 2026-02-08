<script setup>
import { useReviews } from "@/composables/UseReviews";

const placeId = "ChIJ_afpFTEByEcRKu_s4gxUx-c";
const { reviews, isLoading, error } = useReviews(placeId);
</script>

<template>
  <h1>Wat zeggen onze klanten</h1>
  <div id="reviews" v-if="!isLoading && reviews.length > 0">
    <div class="review" v-for="(review, index) in reviews" :key="index">
      <h3>{{ review.naam }}</h3>
      <p>
        <span v-for="n in Math.floor(review.beoordeling)" :key="'full-' + n">
          ⭐
        </span>
        <span v-if="review.beoordeling % 1 !== 0" class="half-star">⭐</span>
      </p>
      <p class="review-text">{{ review.beschrijving }}</p>
    </div>
  </div>
  <p v-else-if="isLoading">Reviews laden...</p>
  <p v-else-if="!isLoading && error">
    Oeps, er is een fout opgetreden: {{ error }}
  </p>
  <p v-else>Er zijn nog geen reviews beschikbaar.</p>
</template>

<style scoped lang="scss">
#reviews {
  margin: 8vh auto;
  max-width: 1680px;
  padding-inline: clamp(24px, 3vw, 64px);
  display: flex;
  gap: 2vw;
  justify-content: center;

  .review {
    width: 22.5%;

    .stars {
      margin-bottom: 1rem;
    }

    .review-text {
      font-style: italic;
    }
  }
}


@media (max-width: 1024px) {
  #reviews {
    display: block;
  }

  .review {
    width: initial;
  }
}
</style>
