<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useReviews } from "@/composables/UseReviews";

const placeId = "ChIJ_afpFTEByEcRKu_s4gxUx-c";
const { reviews, isLoading, error } = useReviews(placeId);

const currentIndex = ref(0);
let intervalId = null;

const startCarousel = () => {
    stopCarousel();
    if (reviews.value.length > 1) {
        intervalId = setInterval(() => {
            currentIndex.value =
                (currentIndex.value + 1) % reviews.value.length;
        }, 5000);
    }
};

const stopCarousel = () => {
    if (intervalId) clearInterval(intervalId);
};

watch(reviews, startCarousel);
onUnmounted(stopCarousel);
</script>

<template>
    <h1>Wat zeggen onze klanten</h1>
    <div id="reviews" v-if="!isLoading && reviews.length">
        <transition name="fade" mode="out-in">
            <div class="review" :key="currentIndex">
                <h3>{{ reviews[currentIndex].naam }}</h3>
                <p class="stars">
                    <span v-for="n in Math.floor(reviews[currentIndex].beoordeling)" :key="n">
                        ⭐
                    </span>
                </p>
                <p class="review-text">
                    {{ reviews[currentIndex].beschrijving }}
                </p>
            </div>
        </transition>
    </div>
    <p v-else-if="isLoading">Reviews laden...</p>
    <p v-else-if="error">Oeps, {{ error }}</p>
    <p v-else>Er zijn nog geen reviews beschikbaar.</p>
</template>

<style scoped lang="scss">
#reviews {
    margin: 8vh auto;
    height: 320px;
    padding-inline: clamp(24px, 3vw, 64px);
    text-align: center;

    .review {
        max-width: 600px;
        margin: 0 auto;

        .stars {
            margin-bottom: 1rem;
        }

        .review-text {
            font-style: italic;
        }
    }
}

h1 {
    margin: 0 24px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(6px);
}
</style>
