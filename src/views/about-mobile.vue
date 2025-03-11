<template>
    <div id="about">
        <div v-for="(item) in employeeMaps" :key="item.id">
            <Portret :imgSrc=item.name.toLowerCase() :colour=item.color />
            <h1>{{ item.name }}</h1>
            <h2>{{ item.role }}</h2>
            <p id="intro">{{ item.intro }}</p>
            <p id="interests">Interesses: {{ item.interest }}</p>
        </div>
    </div>
</template>

<script>

import Portret from '../components/portret.vue'

export default {
    name: "portrets",
    components: { Portret },
    data() {
        return {
            currentIndex: 2,
            intervalId: null,
            employeeMaps: [
                {
                    'name': 'Joost',
                    'color': 'ff8647',
                    'delay': '0.1',
                    'role': 'Mede-eigenaar',
                    'intro': "2 decennia werkervaring in de tweewielerbranche als monteur, verkoper en accountmanager. Verantwoordelijk voor een groot gedeelte van de inkoop, staat veel in de winkel als verkoper en springt indien nodig bij in de werkplaats.",
                    'interest': "Mountainbiken, padellen en motorrijden.",
                },
                {
                    'name': 'Michel',
                    'color': '600026',
                    'delay': '0.4',
                    'role': 'Mede-eigenaar',
                    'intro': 'Draait op alle flanken mee en neemt de boekhouding voor zijn rekening. Springt in de werkplaats bij wanneer nodig maar is vooral veel in de winkel te zien. Ook is hij erg gestructureerd en heeft hij de planning snel klaar staan. Beschikt over ruim 2 decennia ervaring in de tweewieler branmche.',
                    'interest': 'Mountainbiken, auto rally en motorrijden'
                },
                {
                    'name': 'Bram',
                    'color': 'ff5c49',
                    'delay': '1.3',
                    'role': 'Monteur / verkoper',
                    'intro': 'inmiddels al een tijdje werkzaam bij Vechtdal tweewielers. Begon als bijbaan maar groeide al snel door tot volwaardig medewerker. Hij staat mensen graag te woord is uiterst toegankelijk en gedreven.',
                    'interest': 'Wielrennen en mountainbiken',
                },
                {
                    'name': 'Berjan',
                    'color': 'd61a67',
                    'delay': '1.6',
                    'role': 'Monteur / verkoper',
                    'intro': 'Met ruim 15 jaar ervaring staat Berjan grotendeels samen met Robin in de werkplaats. Controleert en diagnosticeert reparaties en zorgt voor passende oplossingen. Bij drukte springt hij bij met verkopen en het aannemen van alle reparaties.',
                    'interest': 'Fietscross en motorsport',
                },
            ]
        };
    }
}

</script>

<style scoped>
#about {
    width: 80%; 
    margin: 0 auto;
    padding: 0 24px;
}

p {
    text-align: left;
}
</style>