<template>
    <section id="info-block">
        <Transition name="slide-fade-right" appear>
            <div class="text">
                <p>
                    Het Vechtdal is een prachtig gebied om te fietsen. Uitgestrekte natuur,
                    kronkelende rivieren en sfeervolle dorpjes zorgen voor ontspanning en
                    nieuwe energie, of u nu een korte tocht maakt of een lange dagroute fietst.
                </p>
                <p>
                    Met een goede fiets geniet u pas echt zorgeloos van uw rit. Wij helpen u
                    graag bij het vinden van de juiste fiets en staan voor u klaar met advies,
                    service en onderhoud. Zo kunt u met een gerust hart op pad en volop
                    genieten van alles wat het Vechtdal te bieden heeft. 🚲
                </p>
            </div>
        </Transition>
        <Transition name="slide-fade-left" appear>
            <img src="/assets/shop/vechtdal.jpg" alt="Vecht" />
        </Transition>
    </section>
</template>
<style scoped>
#info-block {
    display: flex;
    align-items: center;
    gap: clamp(32px, 4vw, 72px);
    max-width: 1680px;
    margin: 0 auto;
    padding-inline: clamp(24px, 3vw, 64px);
}

.text {
    flex: 1;
    text-align: left;
    max-width: 720px;
}

img {
    width: 49.25vw;
    height: 55vh;
    max-width: 100vw;
    margin-right: calc(50% - 50vw);
    object-fit: cover;
    border-top-right-radius: 24%;
    border-bottom-left-radius: 24%;
}

@media (max-width: 1024px) {
    #info-block {
        flex-direction: column;
        align-items: stretch;
    }

    .text {
        padding-top: 16px;
        max-width: none;
    }

    img {
        width: 100%;
        margin-right: 0;
        height: 286px;
    }
}
</style>
