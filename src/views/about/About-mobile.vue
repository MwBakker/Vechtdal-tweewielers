<script setup>
import { useEmployees } from '@/composables/UseEmployees'
import Portret from '@/components/Portret.vue'

const { employeeMaps } = useEmployees()
</script>


<template>
    <div id="about">
        <div v-for="item in employeeMaps" :key="item.name">
            <Portret :imgSrc="item.name.toLowerCase()" :colour="item.color" />
            <h1>{{ item.name }}</h1>
            <h2>{{ item.role }}</h2>
            <p>{{ item.intro }}</p>
            <p>Interesses: {{ item.interest }}</p>
        </div>
    </div>
</template>

<style scoped>
#about {
    padding: 0 24px;
}

p {
    text-align: center;
}

h2 {
    margin: 4vh 0;
}
</style>