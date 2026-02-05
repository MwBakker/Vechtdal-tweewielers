<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
    title: String,
    subject: String,
    routePath: String,
    route: String,
})

const router = useRouter()

const selected = ref('home')

function clicked(route, name) {
    selected.value = name
    router.push(route)
    window.scrollTo(0, 0)
}
</script>


<template>
    <li class='li-nav' @click="clicked(routePath, subject)">
        <div class='li-select'>
            <img :style="{ opacity: selected == subject ? 1 : 0 }" src="@/assets/icons/gear.png" />
            <p>{{ title }}</p>
            <img :style="{ opacity: selected == subject ? 1 : 0 }" src="@/assets/icons/gear.png" />
        </div>
    </li>
</template>

<style scoped>
p {
    font-style: oblique;
    margin: 0;
}

.li-select {
    width: 30%;
    margin: auto;
    display: flex;
    justify-content: space-between;

    img {
        height: 19px;
        transition: opacity 0.5s;
    }
}
</style>