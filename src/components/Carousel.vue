<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
    items: { type: Array, required: true },
    speed: { type: Number, default: 1.5 },
})

const offset = ref(0)
const trackEl = ref(null)
let last = performance.now()

const doubled = computed(() => [...props.items, ...props.items])

let frameId = null
let baseWidth = 0
let ro

function measure() {
    if (!trackEl.value) return
    baseWidth = trackEl.value.scrollWidth / 2
}

function animate(now) {
    const delta = now - last
    last = now
    offset.value += props.speed * (delta / 16.67)
    if (offset.value >= baseWidth) {
        offset.value -= baseWidth
    }
    frameId = requestAnimationFrame(animate)
}

onMounted(async () => {
    await nextTick()
    measure()
    ro = new ResizeObserver(measure)
    ro.observe(trackEl.value)
    frameId = requestAnimationFrame(animate)
})

onUnmounted(() => {
    if (frameId) cancelAnimationFrame(frameId)
    ro?.disconnect()
})
</script>

<template>
    <div id="wrapper">
        <div ref="trackEl" class="track" :style="{ transform: `translate3d(-${offset}px, 0, 0)` }">
            <div class="item" v-for="(item, i) in doubled" :key="i">
                <img :src="`/assets/logo/${item}.png`" />
            </div>
        </div>
    </div>
</template>

<style scoped>
#wrapper {
    width: 100%;
    height: 24vh;
    margin: 16vh auto 0 auto;
    overflow: hidden;
}

.track {
    display: flex;
    gap: 5vw;
    /* 👈 spacing mag alles zijn */
    white-space: nowrap;
    will-change: transform;
}

.item {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
}

img {
    height: 132px;
    width: auto;
    display: block;
    user-select: none;
    pointer-events: none;
}
</style>
