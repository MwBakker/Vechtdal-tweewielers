<template>
    <div class="rental-block">
        <div class="block-title">
            <h1>{{ title }}</h1>
        </div>
        <div class="block-prices">
            <p>Per dag: </p>
            <p>€ {{ priceDaily }}</p>
        </div>
        <div class="block-prices">
            <p>Per week: </p>
            <p>€ {{ priceWeekly }}</p>
        </div>
        <div id="bottom-text"><i>{{ sideNote }}</i></div>
    </div>
</template>

<script>
export default {
    name: "cardOverlayBottom",
    props: {
        title: String,
        priceDaily: String,
        priceWeekly: String,
        sideNote: String
    }
};
</script>

<style scoped>
.rental-block {
    position: relative;
    margin: 32px;
    border: 3px solid #600026;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 20px;
    width: 30%;
    height: 17.5%;

    h1 {
        margin: 6px;
    }

    p {
        margin-right: 16px;
    }
}

.block-title {
    padding: 12px;
}

.block-title,
.block-prices {
    text-align: left;
}

.block-prices {
    display: flex;
    justify-content: space-between;
    margin: 0 25%;
}

#bottom-text {
    text-align: right;
    bottom: 0;
    right: 0;
    margin: 6px;
    margin-right: 12px;
}

@media (max-width: 1024px) {
  .rental-block {
    width: 90%;
    margin: 36px auto;
  }
}
</style>