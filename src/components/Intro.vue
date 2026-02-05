<template>
    <div id="info-block">
        <Transition name="slide-fade-right" appear>
            <div class="text">
                <p>Het Vechtdal is een prachtig gebied om te fietsen. Uitgestrekte natuur, kronkelende rivieren en
                    sfeervolle dorpjes zorgen voor ontspanning en nieuwe energie, of u nu een korte tocht maakt of een
                    lange dagroute fietst.
                </p>
                <p>
                    Met een goede fiets geniet u pas echt zorgeloos van uw rit. Wij helpen u graag bij het vinden van de
                    juiste fiets en staan voor u klaar met advies, service en onderhoud. Zo kunt u met een gerust hart
                    op pad en volop genieten van alles wat het Vechtdal te bieden heeft. 🚲</p>
            </div>
        </Transition>
        <Transition name="slide-fade-left" appear>
            <img src="/assets/shop/vechtdal.jpg" alt="Vecht">
        </Transition>
    </div>
</template>

<style scoped>
#info-block {
    display: flex;
    height: 25vw;

    .text {
        margin: auto 10% auto 6.5%;
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

@media (max-width: 1024px) {
    #info-block {
        height: 460px;
        flex-direction: column;

        img {
            width: 90%;
            margin: auto;
            height: 240px;
        }
    }
}
</style>