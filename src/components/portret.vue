<template>
    <div id="portret">
        <img :src="getImageUrl(imgSrc)" :style="{ 'border': '4px solid #' + colour }"     >
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    setup() {
        const getImageUrl = (name) => {
            return new URL(`../assets/portrets/${name}.jpg`, import.meta.url).href
        }
        return {
            getImageUrl
        }
    },
    name: "portret",
    props: {
        imgSrc: String,
        title: String,
        colour: String,
    },
};
</script>

<style scoped>
#portret {
    margin: 24px 12px;
}

img {
    height: 24vh;
    border-radius: 28px;
    box-shadow: 0 4px 4px #0000002e;
}

@media (max-width: 1024px) {
    #portret {
        margin: 24px 0;
    }
}
</style>