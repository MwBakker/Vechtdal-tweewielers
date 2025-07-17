<template>
    <div id="home-img">
        <video autoplay muted loop style="width: 100%; object-fit: cover;" playsinline>
            <source src="../assets/intro-video.mp4" type="video/mp4">
        </video>
        <Transition name="slide-fade-up" appear>
            <div id="overlay">
                <div id="header-text">
                    <h1>Welkom bij Vechtdal Tweewielers</h1>
                    <!-- <h2>Wij zoeken extra medewerkers! Klik 
                        <a id="jobs" @click="isMobile ? clickedMobile('/vacatures', 'jobs') : clicked('/vacatures', this.$root.$refs.navBar.$refs.li_sub_bicycles)"> hier</a>
                         voor meer info</h2> -->
                    <h2 v-if="holidays()">{{ alert }}</h2>
                </div>
            </div>
        </Transition>
    </div>
    <div class="info-block">
        <Transition name="slide-fade-right" appear>
            <div class="text">
                <p>Vechtdal: bekend als gebied om heerlijk te kunnen fietsen. Door dit gebied fietsen is een
                    perfecte
                    manier om te relaxen en tevens juist weer op te laden.
                    Om dit ontspannen gevoel te kunnen behouden dient uw fiets zelf u geen zorgen te geven. Bij ons
                    bent
                    u verzekerd dat u met de juiste fiets zorgeloos op pad kunt.
                    Kijk gerust naar ons aanbod of kijk naar wat wij bieden als erkende onderhoudsmonteurs. </p>
            </div>
        </Transition>
        <Transition name="slide-fade-left" appear>
            <img :src="getImageSrc('vechtdal.jpg')" alt="Vecht">
        </Transition>
    </div>
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
    <div id="fixed-bg">
        <div id="fixed-bg-text-block-overlay">
            <div id="repair-info" class="info-text">
                <h1>Onderhoud en Reparatie</h1>
                <br class="breakline">
                <p>Zorgeloos blijven fietsen? Uw fiets is bij ons in goede handen! </p>
                <Transition name="slide-fade-up" appear>
                    <div id="btn-maintenance" class="button"
                        @click="clicked('/onderhoud-en-reparatie', 'maintenance', this.$root.$refs.navBar.$refs.li_maintenance)">
                        <p>Meer informatie</p>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
    <Reviews />
</template>

<script>
import Reviews from '@/components/reviews.vue';
import CardBottomOverlay from '../components/card-bottom-overlay.vue';

export default {
    components: { CardBottomOverlay, Reviews },
    name: 'home-page',
    data() {
        return {
            alert: "in de periode van 24 december t/m 6 januari zijn wij gesloten",
            isMobile: window.innerWidth <= 800,
        }
    },
    methods: {
        clicked(route, name, dynamic) {
            (this.isMobile) ?
                this.$root.$refs.navBar_mobile.clicked(route, name) :
                this.$root.$refs.navBar.clickedInPage(route, dynamic);
        },
        holidays() {
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();

            var xmasSeasonStart = new Date(currentYear.toString() + '-12-15');
            var xmasSeasonEnd = new Date((currentYear + 1).toString() + '-01-06');

            if (currentDate >= xmasSeasonStart && currentDate <= xmasSeasonEnd) {
                return true;
            }
        },
    },
};
</script>

<style scoped lang="scss">
#home-img {
    position: relative;

    video {
        height: 66vh;
        object-fit: cover;
    }
}

#header-text {
    text-align: left;
    margin-left: 4%;

    h2 {
        font-style: italic;
    }
}

#home-img img {
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

.info-block {
    display: flex;
    height: 25vw;

    .text {
        margin: auto 3.5vw;
        text-align: left;
    }

    img {
        width: 40%;
        border-top-right-radius: 24%;
        border-bottom-left-radius: 24%;
        -moz-border-top-right-radius: 24%;
        -moz-border-bottom-left-radius: 24%;
        -webkit-border-top-right-radius: 24%;
        -webkit-border-bottom-left-radius: 24%;
    }
}

#vecht-info {
    border-radius: 0px 36px 80px 0px;
}

#store-items-block {
    margin: 84px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#fixed-bg {
    position: relative;
    height: 72vh;
    background-image: url('../assets/maintenance.jpg');
    min-height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

#repair-info {
    margin: 9vh 24px;
    text-align: center;
}

#fixed-bg-text-block-overlay {
    margin: 0;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    background-color: rgba(18, 18, 18, 0.95);
}

#btn-maintenance {
    position: relative;
    bottom: 0;
    width: 10%;
    margin: 32px auto 0 auto;
}

#jobs {
    text-decoration: underline;
    cursor: pointer;
}

@media (max-width: 1024px) {
    .info-block {
        height: 460px;
        flex-direction: column;

        img {
            width: 90%;
            margin: auto;
            height: 240px;
        }
    }

    .zoom-img {
        width: 90%;
        margin: 0 auto;
    }

    #store-items-block {
        margin: 16px 0;
    }

    #btn-maintenance {
        width: 50%;
    }
}
</style>