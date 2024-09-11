<template>
  <div id="top-column">
    <Transition name="slide-fade-right" appear>
      <div class='side-block'>
        <OpeningTimes />
      </div>
    </Transition>
    <Transition name="slide-fade-left" appear>
      <div class='side-block'>
        <ContactForm />
      </div>
    </Transition>
  </div>
  <div id="middle-column">
    <Transition name="slide-fade-up" appear>
      <div class='side-block'>
        <Addresss />
      </div>
    </Transition>
  </div>
  <customMap id="bottom-column" />
</template>

<script>
import CustomMap from '../components/maps-custom.vue';
import OpeningTimes from '../components/opening-times.vue'
import Addresss from '../components/address.vue'
import ContactForm from '../components/contact-form.vue';

export default {
  components: { OpeningTimes, Addresss, ContactForm, CustomMap, },
  name: "contact",
};
</script>

<style scoped>
p {
  margin: 0;
}

#top-column,
.side-block {
  display: flex;
}

.side-block {
  flex: 1;

  div {
    width: 100%;
    margin: auto;
  }
}

.side-block {
  margin: 4px 0.5% 0 .5%;
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
  width: 90%;
}

#middle-column {
  margin: 12px 0;
}

#bottom-column {
  height: 27vh;
}

h2 {
  margin: 8px 0 0 0;
}

@media (max-width: 1024px) {
  #top-column {
    display: block;
  }
  #info {
    align-items: center;
  }
}
</style>