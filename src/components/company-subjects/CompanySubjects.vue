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
            imgSrc="bike-electric.jpg" title="Nieuw" />
        <CardBottomOverlay @click="clicked('/fietsen/stad', 'bicycle', this.$root.$refs.navBar.$refs.li_sub_bicycles)"
            imgSrc="bike-city.jpg" title="Tweedehands" />
        <CardBottomOverlay
            @click="clicked('/fietsen/sportief', 'bicycle', this.$root.$refs.navBar.$refs.li_sub_bicycles)"
            imgSrc="bike-sport.jpg" title="Verhuur" />
        <CardBottomOverlay
            @click="clicked('/fietsen/bedrijfs-gerelateerd', 'bicycle', this.$root.$refs.navBar.$refs.li_sub_bicycles)"
            imgSrc="bike-business.jpg" title="Bedrijfsgerelateerd" />
    </div>
</template>

<style scoped>
#store-items-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2vw;
    margin: 84px auto;
    max-width: 1680px;
    padding-inline: clamp(24px, 3vw, 64px);

}

@media (max-width: 1024px) {
    #store-items-block {
        gap: 6vw;
    }
}
</style>
