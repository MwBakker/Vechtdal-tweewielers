<template>
    <div id="reviews-section">
        <h1>Wat zeggen onze klanten</h1>
        <div id="reviews" v-if="reviews.length > 0">
            <div class="review" v-for="(review, index) in reviews.filter(r => r.rating > 3.5)" :key="index">
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
        <div v-if="errorMessage">{{ errorMessage }}</div>
    </div>

</template>

<script>
import axios from "axios";

export default {
    name: 'reviews',
    data() {
        return {
            reviews: [],
            errorMessage: '',
        }
    },
    methods: {
        fetchReviews: async function () {
            axios({
                url: 'https://vechtdaltweewielers.nl/reviews_api.php',
                method: "GET",
            }).then((response) => {
                this.reviews = response.data;
                console.log(response.data);
            });
        },

    },
    mounted() {
        this.fetchReviews();
    },
};
</script>

<style scoped lang="scss">
h1 {
    margin-bottom: 4vh;
}

#reviews-section {
    margin: 3vh 0;
}

#reviews {
    margin: 0 32px;
    display: flex;
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