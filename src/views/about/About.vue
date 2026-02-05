<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Portret from '../../components/Portret.vue'

const currentIndex = ref(0)
const intervalId = ref(null)
const INTERVAL_TIME = 5000

const employeeMaps = [
  {
    name: 'Joost',
    color: 'ff8647',
    delay: 0.1,
    role: 'Mede-eigenaar',
    intro:
      '2 decennia werkervaring in de tweewielerbranche als monteur, verkoper en accountmanager.',
    interest: 'Mountainbiken, padellen en motorrijden',
  },
  {
    name: 'Michel',
    color: '600026',
    delay: 0.4,
    role: 'Mede-eigenaar',
    intro:
      'Draait op alle flanken mee en neemt de boekhouding voor zijn rekening.',
    interest: 'Mountainbiken, auto rally en motorrijden',
  },
  {
    name: 'Robin',
    color: '600026',
    delay: 0.4,
    role: 'Monteur / verkoper',
    intro:
      'Al ruim 20 jaar een vaste waarde binnen de fietsenbranche.',
    interest: "Auto's, en motorsport",
  },
  {
    name: 'Bram',
    color: 'ff5c49',
    delay: 0.7,
    role: 'Monteur / verkoper',
    intro:
      'Begon als bijbaan maar groeide al snel door tot volwaardig medewerker.',
    interest: 'Wielrennen en mountainbiken',
  },
  {
    name: 'Berjan',
    color: 'd61a67',
    delay: 1.0,
    role: 'Monteur / verkoper',
    intro:
      'Met bijna 20 jaar ervaring grotendeels actief in de werkplaats.',
    interest: 'Fietscross en motorsport',
  },
]

const currentEmployee = computed(() => employeeMaps[currentIndex.value])

const startInterval = () => {
  stopInterval()
  intervalId.value = setInterval(nextEmployee, INTERVAL_TIME)
}

const stopInterval = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

const nextEmployee = () => {
  currentIndex.value = (currentIndex.value + 1) % employeeMaps.length
}

const selectEmployee = (index) => {
  currentIndex.value = index
  startInterval()
}

onMounted(() => {
  startInterval()
})

onBeforeUnmount(() => {
  stopInterval()
})
</script>

<template>
  <div id="about">
    <div id="portrets">
      <div v-for="(item, index) in employeeMaps" :key="item.name">
        <Transition name="slide-fade-right" appear :style="{
          transitionDelay:
            item.name !== currentEmployee.name ? `${item.delay}s` : '0s'
        }">
          <div id="employee" @click="selectEmployee(index)">
            <Portret :imgSrc="item.name.toLowerCase()" :colour="item.color"
              :class="{ hide: item.name === currentEmployee.name }" />
          </div>
        </Transition>
      </div>
    </div>
    <div id="content">
      <Portret :imgSrc="currentEmployee.name.toLowerCase()" :colour="currentEmployee.color" />
      <div id="text">
        <h1>{{ currentEmployee.name }}</h1>
        <h2>{{ currentEmployee.role }}</h2>
        <p id="intro">{{ currentEmployee.intro }}</p>
        <p>Interesses: {{ currentEmployee.interest }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1,
h2 {
  text-align: center;
}

#about {
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
}

#portrets {
  flex: 2;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
}

#employee {
  cursor: pointer;
}

#content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  #intro {
    padding-top: 20px;
  }
}

.hide {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>