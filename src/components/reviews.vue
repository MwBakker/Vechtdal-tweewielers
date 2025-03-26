<template>
    <h1>Wat zeggen onze klanten</h1>
    <!-- <div id="reviews" v-if="reviews.length > 0">
        <div class="review" v-for="(review, index) in reviews" :key="index">
            <h3>{{ review.author_name }}</h3>
            <p>
                <span v-for="n in Math.floor(review.rating)" :key="'full-' + n">
                    ⭐
                </span>
                <span v-if="review.rating % 1 !== 0" class="half-star">⭐</span>
            </p>
            <p>{{ review.text }}</p>
        </div>
    </div>
    <p v-else>Reviews laden...</p>
    <div v-if="errorMessage">{{ errorMessage }}</div> -->

</template>

<script>
import axios from "axios";

export default {
    name: 'reviews',
    data() {
        return {
            // isMobile: window.innerWidth <= 800,
            reviews: [],
            errorMessage: '',
        }
    },
    methods: {
        async fetchReviews() {
            try {
                const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://vechtdaltweewielers.nl/reviews.php`);
                if (response.data) {
                    console.log(response.data);
                    return response.data;
                } else {
                    console.error('Reviews not found in response');
                    return [];
                }
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        },
    },
    mounted() {
        this.fetchReviews();
    },

};
</script>

<style scoped lang="scss">
#reviews {
    margin: 0 32px;
    display: flex;
}

.review {
    width: 20%;
    margin: 0 24px;
}
</style>