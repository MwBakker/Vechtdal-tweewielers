<script setup>
import { useRouter } from 'vue-router'
import CardBottomOverlay from './CardBottomOverlay.vue'

const router = useRouter()

const cards = [
    { title: 'Nieuwe fietsen', img: 'bike-electric.jpg', route: 'stock-new' },
    { title: 'Gebruikte fietsen', img: 'bike-city.jpg', route: 'stock-used' },
    { title: 'Verhuur', img: 'bike-sport.jpg', route: 'rental' },
    { title: 'Voor bedrijven', img: 'bike-business.jpg', route: 'bikeCompany' }
]

function goTo(route) {
    router.push({ name: route })
}
</script>

<template>
    <div id="store-items-block">
        <CardBottomOverlay v-for="card in cards" :key="card.route" :imgSrc="card.img" :title="card.title"
            @click="goTo(card.route)" />
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
