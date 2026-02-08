<script setup>
import { useEmployees } from '@/composables/UseEmployees'
import Portret from '@/components/Portret.vue'

const {
  employeeMaps,
  currentEmployee,
  currentIndex,
  selectEmployee
} = useEmployees(true) // 👈 auto-rotate
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
  max-width: 1680px;
  margin: 0 auto;
  padding-inline: clamp(20px, 3vw, 64px);
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

  div {
    height: 44vh;
  }
}

.hide {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>