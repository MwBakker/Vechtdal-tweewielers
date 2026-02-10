<script setup>
import { useEmployees } from '@/composables/UseEmployees'
import Portret from '@/components/Portret.vue'
import { useSeoMeta, useHead } from '@unhead/vue'

useSeoMeta({
  title: 'Over ons',
  description:
    'Lees meer over Vechtdal Tweewielers in Hardenberg. Een betrokken fietsenwinkel met passie voor kwaliteit, service en vakmanschap.'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.vechtdaltweewielers.nl/over'
    }
  ]
})

const {
  employeeMaps,
  currentEmployee,
  selectEmployee
} = useEmployees(true)
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
      <div>
        <h2>{{ currentEmployee.name }}</h2>
        <h3>{{ currentEmployee.role }}</h3>
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
  max-width: 1680px;
  padding-top: 132px;
  margin: 0 auto;
  padding-inline: clamp(20px, 3vw, 64px);
  display: flex;
  justify-content: space-between;
}

#portrets {
  flex: 2;
  gap: 24px;
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

  div {
    height: 44vh;
  }
}

.hide {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>