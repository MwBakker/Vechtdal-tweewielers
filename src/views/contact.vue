<script setup>
import { ref, onMounted, nextTick } from "vue";
import CustomMap from "../components/info/Maps-custom.vue";
import OpeningTimes from "../components/info/Opening-times.vue";
import Addresss from "../components/info/Address.vue";
import ContactForm from "../components/info/Contact-form.vue";

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
  <div>
    <div id="top-column">
      <Transition name="slide-fade-right" appear>
        <div class="side-block">
          <OpeningTimes />
        </div>
      </Transition>
      <Transition name="slide-fade-left" appear>
        <div class="side-block">
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

<style scoped>
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
  margin: 24px auto;
}

.side-block {
  flex: 1;

  div {
    width: 100%;
    margin: auto;
  }
}

.side-block {
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
  display: flex;
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
}

@media (max-width: 480px) {
  #middle-block {
    gap: 2vh;
    justify-content: center;
    align-items: center;
  }
}
</style>
