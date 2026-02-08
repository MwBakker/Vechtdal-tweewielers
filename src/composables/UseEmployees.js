import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const INTERVAL_TIME = 5000

const employeeMaps = [
    {
        name: 'Joost',
        color: 'ff8647',
        delay: 0.1,
        role: 'Mede-eigenaar',
        intro:
            '2 decennia werkervaring in de tweewielerbranche als monteur, verkoper en accountmanager.',
        interest: 'Mountainbiken, padellen en motorrijden',
    },
    {
        name: 'Michel',
        color: '600026',
        delay: 0.4,
        role: 'Mede-eigenaar',
        intro:
            'Draait op alle flanken mee en neemt de boekhouding voor zijn rekening.',
        interest: 'Mountainbiken, auto rally en motorrijden',
    },
    {
        name: 'Robin',
        color: '600026',
        delay: 0.4,
        role: 'Monteur / verkoper',
        intro: 'Al ruim 20 jaar een vaste waarde binnen de fietsenbranche.',
        interest: "Auto's, en motorsport",
    },
    {
        name: 'Bram',
        color: 'ff5c49',
        delay: 0.7,
        role: 'Monteur / verkoper',
        intro:
            'Begon als bijbaan maar groeide al snel door tot volwaardig medewerker.',
        interest: 'Wielrennen en mountainbiken',
    },
    {
        name: 'Berjan',
        color: 'd61a67',
        delay: 1.0,
        role: 'Monteur / verkoper',
        intro:
            'Met bijna 20 jaar ervaring grotendeels actief in de werkplaats.',
        interest: 'Fietscross en motorsport',
    },
]

export function useEmployees(autoRotate = false) {
    const currentIndex = ref(0)
    const intervalId = ref(null)

    const currentEmployee = computed(
        () => employeeMaps[currentIndex.value]
    )

    const nextEmployee = () => {
        currentIndex.value =
            (currentIndex.value + 1) % employeeMaps.length
    }

    const selectEmployee = (index) => {
        currentIndex.value = index
    }

    const startInterval = () => {
        stopInterval()
        intervalId.value = setInterval(nextEmployee, INTERVAL_TIME)
    }

    const stopInterval = () => {
        if (intervalId.value) {
            clearInterval(intervalId.value)
            intervalId.value = null
        }
    }

    if (autoRotate) {
        onMounted(startInterval)
        onBeforeUnmount(stopInterval)
    }

    return {
        employeeMaps,
        currentEmployee,
        currentIndex,
        selectEmployee,
    }
}
