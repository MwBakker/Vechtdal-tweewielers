<script setup>
defineProps({
    imgSrc: String,
    title: String,
    colour: String
})
</script>

<template>
    <div class="portret">
        <img :src="`/assets/portret/${imgSrc}.jpg`" :style="{ 'border': '4px solid #' + colour }">
        <h2>{{ title }}</h2>
    </div>
</template>

<style scoped lang="scss">
.class {
    margin: 24px 12px;
}

img {
    width: 400px;
    border-radius: 28px;
    box-shadow: 0 4px 4px #0000002e;
}

@media (max-width: 768px) {
    .portret {
        margin: 24px 0;

        img {
            width: 80%;
            height: 180px;
        }
    }
}
</style>