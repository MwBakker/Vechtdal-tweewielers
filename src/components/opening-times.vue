<template>
    <div id="dates-block">
        <DateTime day="Maandag" timeFirst="- Gesloten -" />
        <DateTime day="Dinsdag" timeFirst="08:30 - 12:30" timeLast="13:00 - 18:00" />
        <DateTime day="Woensdag" timeFirst="08:30 - 12:30" timeLast="13:00 - 18:00" />
        <DateTime day="Donderdag" timeFirst="08:30 - 12:30" timeMiddle="13:00 - 18:00" timeLast="18:30 - 21:00" />
        <DateTime day="Vrijdag" timeFirst="08:30 - 12:30" timeLast="13:00 - 18:00" />
        <DateTime day="Zaterdag" timeFirst="08:30 - 12:30" timeLast="13:00 - 16:00" />
        <h2 v-if="holidays()" id="header-alert">{{ alert }}</h2>
    </div>
</template>

<script>
import DateTime from './date-time.vue';

export default {
    components: { DateTime },
    name: "opening-times",
    data() {
        return {
            alert: "in de periode van 25 december t/m 2 januari zijn wij gesloten",
        };
    },
    methods: {
        holidays() {
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();

            var xmasSeasonStart = new Date(currentYear.toString() + '-12-15');
            var xmasSeasonEnd = new Date((currentYear + 1).toString() + '-01-03');

            if (currentDate >= xmasSeasonStart && currentDate <= xmasSeasonEnd) {
                return true;
            }
        },
    },
};
</script>

<style scoped>
#dates-block {
    margin: auto;
}
</style>