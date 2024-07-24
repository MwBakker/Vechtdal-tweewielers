<template>
    <div class='date_time'>
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

<script>
export default {
    name: "dateTime",
    props: {
        day: String,
        timeFirst: String,
        timeMiddle: String,
        timeLast: String
    }
};
</script>

<style scoped>
p {
    /* font-size: 1.2rem; */
}

.date_time {
    width: 75%;
    display: flex;
    height: 60px;
    margin: 32px auto;
}

.date {
    margin: auto;
    width: 50%;
}

.time {
    margin: auto;
    flex: 1;
}

.time p {
    margin: 0;
}
</style>