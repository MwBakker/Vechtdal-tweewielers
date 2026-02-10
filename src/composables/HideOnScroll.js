import { ref, onMounted, onUnmounted } from 'vue'

export function useHideOnScroll({
    threshold = 80,
    delta = 10
} = {}) {
    const visible = ref(true)
    let lastY = window.scrollY

    function onScroll() {
        const y = window.scrollY
        if (Math.abs(y - lastY) < delta) return

        visible.value = y < threshold || y < lastY
        lastY = y
    }

    onMounted(() => {
        window.addEventListener('scroll', onScroll, { passive: true })
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    })

    return {
        visible
    }
}
