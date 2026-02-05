<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'

const isMobile = ref(window.innerWidth <= 800)

const { proxy } = getCurrentInstance()

function clicked(route, name, dynamic) {
    if (isMobile.value) {
        proxy.$root.$refs.navBar_mobile?.clicked(route, name)
    } else {
        proxy.$root.$refs.navBar?.clickedInPage(route, dynamic)
    }
}

function checkMobile() {
    isMobile.value = window.innerWidth <= 800
}

onMounted(() => {
    window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
})
</script>

<template>
    <div id="fixed-bg">
        <div id="fixed-bg-text-block-overlay">
            <div id="repair-info" class="info-text">
                <h1>Onderhoud en Reparatie</h1>
                <br class="breakline">
                <p>Zorgeloos blijven fietsen? Uw fiets is bij ons in goede handen! </p>
                <Transition name="slide-fade-up" appear>
                    <div id="btn-maintenance" class="button"
                        @click="clicked('/onderhoud-en-reparatie', 'maintenance', this.$root.$refs.navBar.$refs.li_maintenance)">
                        Meer informatie
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
#fixed-bg {
    position: relative;
    height: 72vh;
    background-image: url('/assets/shop/maintenance/maintenance.jpg');
    min-height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

#repair-info {
    margin: 9vh 24px;
    text-align: center;
}

#fixed-bg-text-block-overlay {
    margin: 0;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    background-color: rgba(18, 18, 18, 0.95);
}

#btn-maintenance {
    position: relative;
    bottom: 0;
    width: 10%;
    margin: 32px auto 0 auto;
}

@media (max-width: 1024px) {
    #btn-maintenance {
        width: 50%;
    }
}
</style>