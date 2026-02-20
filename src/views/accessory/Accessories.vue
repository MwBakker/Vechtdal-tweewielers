<script setup>
import RowOverlapsed from '../../components/RowOverlapsed.vue'
import { useSeoMeta, useHead } from '@unhead/vue'

useSeoMeta({
    title: 'Fietsaccessoires',
    description:
        'Bekijk ons assortiment fietsaccessoires bij Vechtdal Tweewielers in Hardenberg. Van fietstassen en sloten tot helmen en verlichting.'
})

useHead({
    link: [
        {
            rel: 'canonical',
            href: 'https://www.vechtdaltweewielers.nl/accessoires'
        }
    ]
})

const accessories = [
    {
        link: 'movanext.nl',
        title: 'MovaNext',
        imgSrc: 'accessory/movanext.jpg',
        text: ` Deze fietsendrager is ideaal voor het vervoeren van twee e-bikes, zonder de maximale trekhaakbelasting van kleinere (elektrische of hybride) auto’s te overschrijden.
                Dankzij het gepatenteerde en veilige klemsysteem zit de drager binnen enkele seconden stevig vast.
                De MovaNext wordt in Nederland ontworpen en geassembleerd, is voorzien van een 13-polige Jaeger stekker en beschikt over een RDW-veiligheidskeurmerk.`
    },
    {
        title: 'Fietshelmen',
        imgSrc: 'accessory/helmets.jpg',
        text: ` Het aantal fietsongelukken met ernstig (hersen)letsel neemt toe.
                Het dragen van een fietshelm vermindert de kans op ernstig
                hersenletsel met ongeveer 60 procent en de kans op dodelijk
                letsel zelfs met 71 procent.

                Vechtdal Tweewielers beschikt over een breed assortiment
                fietshelmen voor verschillende typen fietsers.`
    }
]
</script>

<template>
    <div id="accosseries">
        <RowOverlapsed v-for="(item, index) in accessories" :key="index" class="row" :link="item.link"
            :title="item.title" :imgSrc="item.imgSrc" :text="item.text" />
    </div>
</template>

<style scoped lang="scss">
@media (max-width: 1024px) {
    #accosseries {
        padding-top: 56px;
    }
}
</style>