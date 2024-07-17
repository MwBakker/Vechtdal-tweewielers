<template>
    <div id="home-img">
        <video width="100%" object-fit: cover autoplay loop muted>
            <source src="../../Vechtdal_Tweewielers.mp4" type="video/mp4">
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
    <div id="vecht-info">
        <Transition name="slide-fade-right" appear>
            <div id="vecht-info-text-block">
                <div class="info-text">
                    <p>Vechtdal: bekend als gebied om heerlijk te kunnen fietsen. Door dit gebied fietsen is een perfecte
                        manier om te relaxen en tevens juist weer op te laden.
                        Om dit ontspannen gevoel te kunnen behouden dient uw fiets zelf u geen zorgen te geven. Bij ons bent
                        u verzekerd dat u met de juiste fiets zorgeloos op pad kunt.
                        Kijk gerust naar ons aanbod of kijk naar wat wij bieden als erkende onderhoudsmonteurs. </p>
                </div>
            </div>
        </Transition>
        <Transition name="slide-fade-left" appear>
            <img src="../assets/vechtdal.jpg" alt="Vecht">
        </Transition>
    </div>
    <div id="store-items-block">
        <CardBottomOverlay
            @click="isMobile ? clickedMobile('/fietsen/elektrisch', 'bicycle') : clicked('/fietsen/elektrisch', this.$root.$refs.navBar.$refs.li_sub_bicycles)"
            class="card" imgSrc="bike-electric" title="Elektrisch" />
        <CardBottomOverlay
            @click="isMobile ? clickedMobile('/fietsen/stad', 'bicycle') : clicked('/fietsen/stad', this.$root.$refs.navBar.$refs.li_sub_bicycles)"
            class="card" imgSrc="bike-city" title="Stad" />
        <CardBottomOverlay
            @click="isMobile ? clickedMobile('/fietsen/sportief', 'bicycle') : clicked('/fietsen/sportief', this.$root.$refs.navBar.$refs.li_sub_bicycles)"
            class="card" imgSrc="bike-sport" title="Sportief" />
        <CardBottomOverlay
            @click="isMobile ? clickedMobile('/fietsen/bedrijfs-gerelateerd', 'bicycle') : clicked('/fietsen/bedrijfs-gerelateerd', this.$root.$refs.navBar.$refs.li_sub_bicycles)"
            class="card" imgSrc="bike-business" title="Bedrijfs-gerelateerd" />
    </div>
    <div id="fixed-bg">
        <div id="fixed-bg-text-block-overlay">
            <div class="info-text"
                @click="isMobile ? clickedMobile('/onderhoud-en-reparatie', 'maintenance') : clicked('/onderhoud-en-reparatie', this.$root.$refs.navBar.$refs.li_maintenance)">
                <h2>Onderhoud en Reparatie</h2>
                <br class="breakline">
                <p>Zorgeloos blijven fietsen? Uw fiets is bij ons in goede handen. Wij zijn erkende monteurs met een ruime
                    beschikbaarheid aan onderdelen.</p>
            </div>
        </div>
    </div>
    <div id="rental-info">
        <img src="../assets/bike-rental.jpg" alt="Verhuur">
        <div id="vecht-info-text-block">
            <div class="info-text"
                @click="isMobile ? clickedMobile('/verhuur', 'rental') : clicked('verhuur', this.$root.$refs.navBar.$refs.li_bike)">
                <h2>Verhuur</h2>
                <br class="breakline">
                <p>Mocht u het Vechtdal per fiets willen ontdekken, echter beschikt u niet zelf over een fiets? Geen
                    probleem: u kunt bij ons een fiets huren.</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import CardBottomOverlay from '../components/card-bottom-overlay.vue';
export default {
    components: { CardBottomOverlay },
    name: 'home-page',
    data() {
        return {
            alert: "in de periode van 25 december t/m 2 januari zijn wij gesloten",
            isMobile: window.innerWidth <= 800,
        }
    },
    props: {
        msg: String
    },
    methods: {
        clicked(route, dynamic) {
            this.$root.$refs.navBar.clickedInPage(route, dynamic);
        },
        clickedMobile(route, name) {
            this.$root.$refs.navBar_mobile.clicked(route, name);
        },
        holidays() {
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();

            var xmasSeasonStart = new Date(currentYear.toString() + '-12-15');
            var xmasSeasonEnd = new Date((currentYear + 1).toString() + '-01-03');

            if (currentDate >= xmasSeasonStart && currentDate <= xmasSeasonEnd) {
                return true;
            }
        }
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

    h1 {
        font-size: 36px;
    }

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

#vecht-info,
#rental-info {
    height: 35vh;
    overflow: hidden;
}

#vecht-info {
    border-radius: 0px 36px 80px 0px;
}

#vecht-info-text-block {
    position: relative;
    width: 60%;
    height: 100%;
    float: left;
}

.info-text {
    cursor: pointer;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 25%;
    -ms-transform: translate(-25%, -50%);
    transform: translate(-25%, -50%);

    p {
        font-size: 20px;
        text-align: left;
    }
}

.info-text h2 {
    text-align: left;
}

#vecht-info img,
#rental-info img {
    height: 100%;
    width: 40%;
    float: left;
    object-fit: fill;
}

#jobs {
    text-decoration: underline;
    cursor: pointer;
}

#store-items-block {
    margin: 84px 0 0 0;
    display: flex;
}

.card {
    cursor: pointer;
    width: 23%;
    margin: 0 1%;
}

#fixed-bg {
    margin-top: 26px;
    position: relative;
    height: 72vh;
    background-image: url('../assets/maintenance.jpg');
    min-height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

#fixed-bg-text-block-overlay {
    width: 100%;
    margin: 0;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: absolute;
    width: 100%;
    height: 25vh;
    bottom: 0;
    right: 0;
    background-color: rgba(18, 18, 18, 0.95);
}

#rental-info {
    border-radius: 36px 80px 0px 80px;
}

#text {
    margin-left: 16px;
    text-align: left;
    font-size: 20px;
    white-space: nowrap;
}

p {
    word-break: break-word;
    white-space: normal;
}

h1 {
    color: white;
}

@media screen and (min-width: 480px) and (max-width: 800px) {
    #home-img img {
        height: 45vh;
    }

    #header-text h1 {
        font-size: 21px;
    }

    h1 {
        font-size: 21px;
    }

    h2 {
        font-size: 18px;
    }

    .info-text p {
        font-size: 11.5px;
    }

    .info-text img {
        font-size: 11.5px;
    }

    #store-items-block {
        height: 73vh;
    }

    #fixed-bg {
        margin: 0;
    }

    .card {
        margin: 0 1% 4px 1%;
        width: 48%;
    }

    .breakline {
        display: none;
    }

    #vecht-info img,
    #rental-info img {
        object-fit: cover;
    }
}

@media screen and (min-width: 450px) and (min-height:300px) and (max-height:800px) {
    #fixed-bg-text-block-overlay {
        height: 32vh;
    }

    #fixed-bg {
        height: 96vh;
    }

    #vecht-info,
    #rental-info {
        height: 70vh;
    }

    .card {
        height: 62vh;
    }
}
</style>