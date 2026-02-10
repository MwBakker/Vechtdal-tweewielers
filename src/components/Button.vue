<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    link: {
        type: String,
        required: true
    },
    external: {
        type: Boolean,
        default: false
    }
})

function handleClick() {
    if (!props.external) {
        router.push({ name: props.link })
    }
}
</script>

<template>
    <a v-if="external" class="button" :href="`https://${link}`" target="_blank" rel="noopener noreferrer">
        <slot></slot>
    </a>
    <button v-else class="button" type="button" @click="handleClick">
        <slot></slot>
    </button>
</template>

<style scoped>
.button {
    z-index: 35;
    width: 240px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.93);
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
}
</style>
