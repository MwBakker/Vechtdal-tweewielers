<script setup>
import rowOverlapsed from '../../components/Row-overlapsed.vue'
import { useSeoMeta, useHead } from '@unhead/vue'

useSeoMeta({
    title: 'Fietsmerken',
    description:
        'Ontdek onze fietsmerken bij Vechtdal Tweewielers in Hardenberg. Bekijk merken voor stadsfietsen, e-bikes, sportfietsen en meer.'
})

useHead({
    link: [
        {
            rel: 'canonical',
            href: 'https://www.vechtdaltweewielers.nl/fietsen/merken'
        }
    ]
})

const bikes = [
    {
        link: 'gazelle.nl',
        title: 'Gazelle',
        imgSrc: 'bike/gazelle.jpg',
        text:
            'Een bekend Nederlands fietsmerk dat sinds 1892 bestaat. Vanuit Dieren produceert het merk kwalitatieve en duurzame fietsen, waaronder stadsfietsen en e-bikes. Gazelle staat bekend om comfort, innovatie en betrouwbaarheid.'
    },
    {
        link: 'burgersfietsen.nl',
        title: 'Burgers',
        imgSrc: 'bike/burgers-bikes.jpg',
        text:
            'In 1869 richt Henricus Burgers in Deventer de eerste fietsfabriek van Nederland op. Burgers groeide snel en introduceerde innovaties zoals de cardanfiets zonder ketting. Het merk speelde een grote rol in de vroege fietsontwikkeling.'
    },
    {
        link: 'kalkhoff-bikes.com/nl_nl/',
        title: 'Kalkhoff',
        imgSrc: 'bike/kalkhoff.jpg',
        text:
            'Een Duits fietsmerk dat al sinds 1919 actief is en onderdeel is van de Accell Group. Het merk staat bekend om zijn degelijke, comfortabele fietsen en heeft zich de afgelopen decennia gespecialiseerd in hoogwaardige e-bikes voor dagelijks en recreatief gebruik.'
    },
    {
        link: 'sensabikes.com',
        title: 'Sensa',
        imgSrc: 'bike/sensa-bikes.jpg',
        text:
            'Onderdeel van Intersens Bikes & Parts BV en ontwikkelt al meer dan 25 jaar sportieve fietsen. Het merk ontstond in Nederland na de opkomst van mountainbikes in de jaren 80.'
    },
    {
        link: 'bhbikes.com',
        title: 'BH Bikes',
        imgSrc: 'bike/bh-bikes.jpg',
        text:
            'Maakte in 1923 de overstap van wapenproductie naar fietsen. Het merk richtte zich op lichte, comfortabele en betaalbare fietsen en groeide uit tot een gevestigde naam.'
    },
    {
        link: 'ridley-bikes.com',
        title: 'Ridley',
        imgSrc: 'bike/ridley-bikes.jpg',
        text:
            'Ontwikkelt fietsen in België, het hart van de wielersport. De modellen worden getest in eigen windtunnels en op zware Belgische wegen voor maximale prestaties.'
    },
]
</script>

<template>
    <div id="brands">
        <rowOverlapsed v-for="(bike, index) in bikes" :key="index" class="row" :link="bike.link" :title="bike.title"
            :imgSrc="bike.imgSrc" :text="bike.text" />
    </div>
</template>

<style scoped>
@media (max-width: 1024px) {
    #brands {
        padding-top: 72px;
    }
}
</style>