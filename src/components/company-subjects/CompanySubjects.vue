<script setup>
import CardBottomOverlay from './CardBottomOverlay.vue'

function clicked(route, name, dynamic) {
    if (isMobile.value) {
        proxy.$root.$refs.navBar_mobile?.clicked(route, name)
    } else {
        proxy.$root.$refs.navBar?.clickedInPage(route, dynamic)
    }
}
</script>

<template>
    <div id="store-items-block">
        <CardBottomOverlay
            @click="clicked('/fietsen/elektrisch', 'bicycle', this.$root.$refs.navBar.$refs.li_sub_bicycles)"
            imgSrc="bike-electric.jpg" title="Elektrisch" />
        <CardBottomOverlay @click="clicked('/fietsen/stad', 'bicycle', this.$root.$refs.navBar.$refs.li_sub_bicycles)"
            imgSrc="bike-city.jpg" title="Stad" />
        <CardBottomOverlay
            @click="clicked('/fietsen/sportief', 'bicycle', this.$root.$refs.navBar.$refs.li_sub_bicycles)"
            imgSrc="bike-sport.jpg" title="Sportief" />
        <CardBottomOverlay
            @click="clicked('/fietsen/bedrijfs-gerelateerd', 'bicycle', this.$root.$refs.navBar.$refs.li_sub_bicycles)"
            imgSrc="bike-business.jpg" title="Bedrijfsgerelateerd" />
    </div>
</template>

<style scoped>
#store-items-block {
    margin: 84px 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

@media (max-width: 1024px) {
    #store-items-block {
        margin: 16px 0;
    }
}
</style>
