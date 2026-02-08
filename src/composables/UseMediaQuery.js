import { ref, onMounted, onUnmounted } from 'vue'

export function useMediaQuery(query) {
    const matches = ref(false)
    let media

    onMounted(() => {
        media = window.matchMedia(query)
        matches.value = media.matches
        media.addEventListener('change', e => matches.value = e.matches)
    })

    onUnmounted(() => {
        media?.removeEventListener('change', () => { })
    })

    return matches
}
