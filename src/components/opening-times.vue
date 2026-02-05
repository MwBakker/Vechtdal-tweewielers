<script setup>
import { ref } from 'vue'
import DateTime from '../components/Date-time.vue'

const alert = ref('in de periode van 24 december t/m 6 januari zijn wij gesloten')

function holidays() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    const xmasSeasonStart = new Date(`${currentYear}-12-15`)
    const xmasSeasonEnd = new Date(`${currentYear + 1}-01-03`)

    return currentDate >= xmasSeasonStart && currentDate <= xmasSeasonEnd
}
</script>

<template>
    <div id="dates-block">
        <DateTime day="Maandag" timeFirst="- Gesloten -" />
        <DateTime day="Dinsdag" timeFirst="08:30 - 12:30" timeLast="13:00 - 18:00" />
        <DateTime day="Woensdag" timeFirst="08:30 - 12:30" timeLast="13:00 - 18:00" />
        <DateTime day="Donderdag" timeFirst="08:30 - 12:30" timeMiddle="13:00 - 18:00" timeLast="18:30 - 20:00" />
        <DateTime day="Vrijdag" timeFirst="08:30 - 12:30" timeLast="13:00 - 18:00" />
        <DateTime day="Zaterdag" timeFirst="08:30 - 12:30" timeLast="13:00 - 16:00" />
        <h2 v-if="holidays()" id="header-alert">{{ alert }}</h2>
    </div>
</template>

<style scoped>
#dates-block {
    margin: auto;
}
</style>