<script setup>
const navigate = (url) => {
    const target = url.startsWith('http') ? url : `https://${url}`
    window.location.href = target
}

const rows = [
    [
        {
            url: 'leas-a-bike.nl',
            logo: '/assets/logo/leaseabike.png',
            transition: 'slide-fade-right',
            delay: 0.5
        },
        {
            url: 'fiscfree.nl',
            logo: '/assets/logo/fiscfree.png',
            transition: 'slide-fade-right',
            delay: 0.75
        },
        {
            url: 'hellorider.com',
            logo: '/assets/logo/hellorider.png',
            transition: 'slide-fade-right',
            delay: 1
        }
    ],
    [
        {
            url: 'leasefiets.nl',
            logo: '/assets/logo/leasefiets.jpg',
            transition: 'slide-fade-left',
            delay: 1.5
        },
        {
            url: 'nationalefietsprojecten.nl',
            logo: '/assets/logo/nationalefietsprojecten.jpg',
            transition: 'slide-fade-left',
            delay: 1.75
        },
        {
            url: 'frieslandlease.nl',
            logo: '/assets/logo/frieslandlease.jpg',
            transition: 'slide-fade-left',
            delay: 2
        }
    ]
]

</script>

<template>
    <div id="content-lease">
        <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="block-row">
            <Transition v-for="block in row" :key="block.url" :name="block.transition" appear
                :style="{ transitionDelay: `${block.delay}s` }">
                <div class="block" @click="navigate(block.url)" :style="{ backgroundImage: `url(${block.logo})` }" />
            </Transition>
        </div>
        <Transition name="slide-fade-up" appear style="transition-delay: 3s">
            <div id="text-lease">
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
    max-width: 1680px;
    margin: 0 auto;
    padding-inline: clamp(20px, 3vw, 64px);

    #text-lease {
        margin: 8vh 0;

        h1 {
            margin: 2vh 0;
        }
    }
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
    background-size: contain;
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