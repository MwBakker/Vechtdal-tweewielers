<script setup>
import { ref, onMounted } from "vue";

const placeId = "ChIJ_afpFTEByEcRKu_s4gxUx-c";
const reviews = ref([]);
const isLoading = ref(true);
const error = ref(null);

const fetchReviews = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetch(
      `https://vechtdaltweewielers.nl/proxy/reviews.php?placeId=${placeId}`
    );

    const data = await response.json();

    if (data.reviews && Array.isArray(data.reviews)) {
      const filteredReviews = data.reviews.filter((review) => {
        const text = review.text?.text || "";
        return review.rating >= 3 && text.length <= 550;
      });
      reviews.value = filteredReviews.map((review) => ({
        naam: review.authorAttribution?.displayName || "Anoniem",
        beschrijving: review.text.text,
        beoordeling: review.rating,
      }));
    } else {
      reviews.value = [];
    }
  } catch (e) {
    error.value = "Kan de reviews niet laden. Probeer het later opnieuw.";
  } finally {
    isLoading.value = false;
  }
};
onMounted(fetchReviews);

onMounted(() => {
  fetchReviews();
});
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
h1 {
  margin-bottom: 4vh;
}

#reviews {
  margin: 0 32px;
  display: flex;
  justify-content: center;
}

.review {
  width: 20%;
  margin: 0 24px;
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
