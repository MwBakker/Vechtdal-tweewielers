<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
    items: { type: Array, required: true },
    speed: { type: Number, default: 0.5 },
})

const offset = ref(0)
const trackEl = ref(null)

let frameId = null
let baseWidth = 0
let last = 0
let ro = null

const doubled = computed(() => [...props.items, ...props.items])

function measure() {
    if (!trackEl.value) return
    baseWidth = Math.floor(trackEl.value.scrollWidth / 2)
}

function waitForImages() {
    const imgs = trackEl.value?.querySelectorAll('img') || []
    return Promise.all(
        Array.from(imgs).map(img =>
            img.complete
                ? Promise.resolve()
                : new Promise(resolve => {
                    img.onload = resolve
                    img.onerror = resolve
                })
        )
    )
}

function animate(now) {
    const delta = (now - last) / 1000
    last = now
    offset.value += props.speed * 100 * delta

    if (offset.value >= baseWidth) {
        offset.value -= baseWidth
    }

    frameId = requestAnimationFrame(animate)
}

onMounted(async () => {
    await nextTick()
    await waitForImages()

    measure()

    ro = new ResizeObserver(measure)
    ro.observe(trackEl.value)

    last = performance.now()
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

<style scoped lang="scss">
#wrapper {
    width: 100%;
    height: 24vh;
    margin: 16vh auto 0 auto;
    overflow: hidden;
}

.track {
    display: flex;
    gap: 5vw;
    white-space: nowrap;
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
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

@media (max-width: 1024px) {
    #wrapper {
        height: 120px;
    }

    img {
        height: 72px;
    }
}
</style>
