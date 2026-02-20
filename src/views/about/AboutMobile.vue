<script setup>
import { useEmployees } from '@/composables/UseEmployees'
import Portret from '@/components/Portret.vue'

const { employeeMaps } = useEmployees()
</script>

<template>
    <div id="about">
        <div v-for="item in employeeMaps" :key="item.name">
            <Portret :imgSrc="item.name.toLowerCase()" :colour="item.color" />
            <h2>{{ item.name }}</h2>
            <h3>{{ item.role }}</h3>
            <p>{{ item.intro }}</p>
            <p>Interesses: {{ item.interest }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
#about {
    padding: 72px 24px 24px 24px;
}

p {
    text-align: center;
}

h2 {
    margin: 4vh 0;
}
</style>