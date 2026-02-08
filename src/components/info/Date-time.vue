<script setup>
defineProps({
    day: String,
    timeFirst: String,
    timeMiddle: String,
    timeLast: String
})
</script>

<template>
    <div class='date-time'>
        <div class='date'>
            <p>{{ day }}: </p>
        </div>
        <div class='time'>
            <div>
                <p>{{ timeFirst }}</p>
            </div>
            <div v-if="timeMiddle !== null">
                <p>{{ timeMiddle }}</p>
            </div>
            <div>
                <p>{{ timeLast }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.date-time {
    display: flex;
    justify-content: space-between;
    margin: 24px 0;

    .date {
        margin: auto 0;
    }
}

p {
    margin: 0;
}
</style>