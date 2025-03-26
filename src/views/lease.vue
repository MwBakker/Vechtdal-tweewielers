<template>
    <div>
        <div class="block-row">
            <Transition style="transition-delay: 0.5s" name="slide-fade-right" appear>
                <div @click="navigate('leas-a-bike.nl')" class="block"
                    :style="{ backgroundImage: `url(${logoLeaseABike})` }"></div>
            </Transition>
            <Transition style="transition-delay: 0.75s" name="slide-fade-right" appear>
                <div @click="navigate('fiscfree.nl')" class="block"
                    :style="{ backgroundImage: `url(${logoFiscFree})` }"></div>
            </Transition>
            <Transition style="transition-delay: 1s" name="slide-fade-right" appear>
                <div @click="navigate('hellorider.com')" class="block"
                    :style="{ backgroundImage: `url(${logoHelloRider})` }"></div>
            </Transition>
        </div>
        <div class="block-row">
            <Transition style="transition-delay: 1.5s" name="slide-fade-left" appear>
                <div @click="navigate('leasefiets.nl')" class="block"
                    :style="{ backgroundImage: `url(${logoFietsLease})` }"></div>
            </Transition>
            <Transition style="transition-delay: 1.75s" name="slide-fade-left" appear>
                <div @click="navigate('nationalefietsprojecten.nl')" class="block"
                    :style="{ backgroundImage: `url(${logoNationaleFietsProjecten})` }"></div>
            </Transition>
            <Transition style="transition-delay: 2s" name="slide-fade-left" appear>
                <div @click="navigate('frieslandlease.nl')" class="block"
                    :style="{ backgroundImage: `url(${logoFrieslandLease})` }"></div>
            </Transition>
        </div>
        <Transition style="transition-delay: 3s" name="slide-fade-up" appear>
            <div>
                <h1>Overige fietsplannen</h1>
                <p>Indien uw gewenste fietsplan hier niet tussen staat kijken wij naar de mogelijkheden voor een
                    fietsplan
                    buiten het bovenstaande aanbod</p>
            </div>
        </Transition>

    </div>
</template>

<script setup>
import logoLeaseABike from '@/assets/logos/leaseabike.png';
import logoFiscFree from '@/assets/logos/fiscfree.png';
import logoFrieslandLease from '@/assets/logos/frieslandlease.jpg';
import logoHelloRider from '@/assets/logos/hellorider.png';
import logoFietsLease from '@/assets/logos/leasefiets.jpg';
import logoNationaleFietsProjecten from '@/assets/logos/nationalefietsprojecten.jpg';

const navigate = (url) => {
    window.location.href = "Https://" + url;
};

</script>

<style scoped>
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