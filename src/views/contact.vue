<script setup>
import { ref, onMounted, nextTick } from "vue";
import CustomMap from "../components/info/MapsCustom.vue";
import OpeningTimes from "../components/info/OpeningTimes.vue";
import Addresss from "../components/info/Address.vue";
import ContactForm from "../components/info/ContactForm.vue";
import { useSeoMeta, useHead } from '@unhead/vue'

useSeoMeta({
  title: 'Contact',
  description:
    'Neem contact op met Vechtdal Tweewielers in Hardenberg voor vragen over fietsen, e-bikes, onderhoud, lease of verhuur.'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.vechtdaltweewielers.nl/contact'
    }
  ]
})

const googleMapsKey = ref(null);
const showMap = ref(false);

const fetchApiKey = async () => {
  const response = await fetch("/proxy/key_maps.php");
  const key = await response.text();
  googleMapsKey.value = key.trim();
  await nextTick();
  showMap.value = true;
};

onMounted(fetchApiKey);
</script>

<template>
  <div id="contact">
    <div id="top-column">
      <Transition name="slide-fade-right" appear>
        <div class="side-block">
          <h2>Openingstijden</h2>
          <OpeningTimes />
        </div>
      </Transition>
      <Transition name="slide-fade-left" appear>
        <div class="side-block">
          <h2>Contactformulier</h2>
          <ContactForm />
        </div>
      </Transition>
    </div>
    <Transition name="slide-fade-up" appear>
      <div id="middle-block" class="side-block">
        <Addresss />
      </div>
    </Transition>
    <customMap v-if="googleMapsKey && showMap" id="bottom-column" :api-key="googleMapsKey" />
    <div v-else id="bottom-column" class="loading-map">
      Kaart aan het laden...
    </div>
  </div>
</template>

<style scoped lang="scss">
#contact {
  padding-top: 132px;
}

p {
  margin: 0;
}

#top-column,
.side-block {
  display: flex;
}

#top-column,
#middle-block {
  max-width: 1680px;
  margin-inline: clamp(24px, 3vw, 64px);
  margin: 0 auto 24px auto;
}

.side-block {
  flex: 1;

  div {
    width: 100%;
    margin: auto;
  }
}

.side-block {
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  margin: 4px 0.5% 0 0.5%;
  border-radius: 25px;
  background: rgb(2 2 2 / 42%);
  position: relative;
}

#header-alert {
  position: absolute;
  bottom: 0;
  font-style: italic;
  left: 5%;
  right: 5%;
  width: 80%;
}

#middle-block {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 24px 6.25vw;
}

#bottom-column {
  height: 29.6vh;
}

.loading-map {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #242f3e;
  color: #746855;
  font-size: 1.2em;
}

h2 {
  margin: 8px 0 0 0;
}

@media (max-width: 1024px) {
  #top-column {
    display: block;
  }

  #contact {
    padding-top: 72px;
  }

  .side-block {
    margin: 24px 16px;
  }

  #middle-block {
    gap: 2vh;
    margin: 24px 16px;
    justify-content: center;
    align-items: center;
  }
}
</style>
