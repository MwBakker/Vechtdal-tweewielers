<template>
  <div id="about">
    <div id="portrets">
      <div v-for="(item, index) in employeeMaps" :key="item.id">
        <Transition
          :style="{ 'transition-delay': (item.name != employeeMaps[currentIndex].name) ? `${item.delay}s` : '0s' }"
          name="slide-fade-right" appear>
          <div id="employee" @click="selectEmployee(index)">
            <Portret :imgSrc=item.name.toLowerCase() :colour=item.color
              :class="{ hide: (item.name === employeeMaps[currentIndex].name) }" />
          </div>
        </Transition>
      </div>
    </div>
    <div id="text">
      <Portret :imgSrc="employeeMaps[this.currentIndex]['name'].toLowerCase()"
        :colour="employeeMaps[this.currentIndex]['color']" />
      <h1>{{ employeeMaps[this.currentIndex]['name'] }}</h1>
      <h2>{{ employeeMaps[this.currentIndex]['role'] }}</h2>
      <p id="intro">{{ employeeMaps[this.currentIndex]['intro'] }}</p>
      <p>Interesses: {{ employeeMaps[this.currentIndex]['interest'] }}</p>
    </div>
  </div>
</template>

<script>
import Portret from '../components/portret.vue'

export default {
  name: "portrets",
  mounted() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1);
      if (this.currentIndex > 5) this.currentIndex = 0;
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  components: { Portret },
  methods: {
    selectEmployee(index) {
      this.currentIndex = index;
    }
  },
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
          'name': 'Jan',
          'color': 'd61a67',
          'delay': '0.7',
          'role': 'Monteur',
          'intro': 'Na jarenlange ervaring bij Philips en VDL als engineer wilde hij nog graag doorwerken na zijn pensioen. Werkt inmiddels al een tijdje bij Vechtdal tweewielers en is aanwezig op Donderdag en Vrijdag. Is een technisch specialist en dit zie je terug in zijn werk. Hij is verantwoordelijk voor de eerste montage van alle nieuwe fietsen en kijkt of deze technisch in perfecte staat zijn.',
          'interest': 'Wielrennen, schaatsen skeeleren en cnc besturingen',
        },
        {
          'name': 'Robin',
          'color': 'ff8647',
          'delay': '1',
          'role': 'Monteur / verkoper',
          'intro': 'Al ruim 2 decennia werkzaam in de fietsenbranche, geen probleem is hem te groot. Weet voor elke situatie een passende oplossing. Werkt overzichtelijk, transparant naar klanten en beschikt over zeer veel technische kennis.',
          'interest': 'Auto’s en motorsport',
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
h1,
h2 {
  text-align: center;
}

#about {
  display: flex;
  margin: auto 0;
}

#portrets {
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 24px;
}

#employee {
  cursor: pointer;
}

#text {
  width: 40%;
  margin: auto;
  padding: 0 72px;

  #intro {
    text-align: left;
    padding-top: 20px;
    height: 280px;
  }
}

.hide {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>