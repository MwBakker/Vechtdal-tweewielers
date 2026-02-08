<script setup>
import { ref } from 'vue'

function holidays() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    const xmasSeasonStart = new Date(`${currentYear}-12-15`)
    const xmasSeasonEnd = new Date(`${currentYear + 1}-01-06`)

    return currentDate >= xmasSeasonStart && currentDate <= xmasSeasonEnd
}

const alert = ref('in de periode van 24 december t/m 6 januari zijn wij gesloten')
</script>

<template>
    <div id="home-img">
        <video autoplay muted loop style="width: 100%; object-fit: cover;" playsinline>
            <source src="/assets/Intro-Video.mp4" type="video/mp4">
        </video>
        <Transition name="slide-fade-up" appear>
            <div id="overlay">
                <div id="header-text">
                    <h1>Welkom bij Vechtdal Tweewielers</h1>
                    <h2 v-if="holidays()">{{ alert }}</h2>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
#home-img {
    position: relative;

    video {
        height: 66vh;
        object-fit: cover;
    }

    img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 60vh;
    }

    #overlay {
        position: absolute;
        width: 100%;
        bottom: 0;
        right: 0;
        background-color: rgb(18 18 18 / 0.85);
    }
}

#header-text {
    text-align: left;
    max-width: 1680px;
    margin: 0 auto;
    padding-inline: clamp(20px, 3vw, 64px);

    h1 {
        margin: 12px 0;
    }

    h2 {
        font-style: italic;
    }
}

@media (max-width: 1024px) {
    #header-text {
        text-align: center;
        margin: auto;

        h1 {
            margin: 8px 0;
        }
    }
}
</style>
