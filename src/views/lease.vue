<script setup>
const navigate = (url) => {
    window.location.href = `https://${url}`
}

const logos = {
    leaseABike: '/assets/logo/leaseabike.png',
    fiscFree: '/assets/logo/fiscfree.png',
    helloRider: '/assets/logo/hellorider.png',
    leaseFiets: '/assets/logo/leasefiets.jpg',
    nationaleFietsProjecten: '/assets/logo/nationalefietsprojecten.jpg',
    frieslandLease: '/assets/logo/frieslandlease.jpg'
}
</script>

<template>
    <div id="content-lease">
        <div class="block-row">
            <Transition style="transition-delay: 0.5s" name="slide-fade-right" appear>
                <div @click="navigate('leas-a-bike.nl')" class="block"
                    :style="{ backgroundImage: `url(${logos.leaseABike})` }"></div>
            </Transition>
            <Transition style="transition-delay: 0.75s" name="slide-fade-right" appear>
                <div @click="navigate('fiscfree.nl')" class="block"
                    :style="{ backgroundImage: `url(${logos.fiscFree})` }"></div>
            </Transition>
            <Transition style="transition-delay: 1s" name="slide-fade-right" appear>
                <div @click="navigate('hellorider.com')" class="block"
                    :style="{ backgroundImage: `url(${logos.helloRider})` }"></div>
            </Transition>
        </div>
        <div class="block-row">
            <Transition style="transition-delay: 1.5s" name="slide-fade-left" appear>
                <div @click="navigate('leasefiets.nl')" class="block"
                    :style="{ backgroundImage: `url(${logos.leaseFiets})` }"></div>
            </Transition>
            <Transition style="transition-delay: 1.75s" name="slide-fade-left" appear>
                <div @click="navigate('nationalefietsprojecten.nl')" class="block"
                    :style="{ backgroundImage: `url(${logos.nationaleFietsProjecten})` }"></div>
            </Transition>
            <Transition style="transition-delay: 2s" name="slide-fade-left" appear>
                <div @click="navigate('frieslandlease.nl')" class="block"
                    :style="{ backgroundImage: `url(${logos.frieslandLease})` }"></div>
            </Transition>
        </div>
        <Transition style="transition-delay: 3s" name="slide-fade-up" appear>
            <div>
                <h1>Overige fietsplannen</h1>
                <p>
                    Indien uw gewenste fietsplan hier niet tussen staat kijken wij naar de
                    mogelijkheden voor een fietsplan buiten het bovenstaande aanbod
                </p>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
#content-lease {
    padding: 0 6.5%;
}

.block-row {
    display: flex;
}

h1 {
    margin: 0;
}

.block {
    cursor: pointer;
    flex: 1;
    display: flex;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(255, 255, 255, 0.98);
    flex-direction: column;
    margin: 2.25%;
    border: 3px solid #d61a67;
    border-radius: 20px;
    height: 225px;
}

@media (max-width: 1024px) {
    .block-row {
        display: block;
    }

    h1 {
        margin: 36px 0;
    }
}
</style>