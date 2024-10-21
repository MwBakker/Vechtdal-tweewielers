<template>
  <div id="portrets">
    <Transition style="transition-delay: 0.1s" name="slide-fade-right" appear>
      <Portret title="Joost" imgSrc="joost" colour="ff8647" />
    </Transition>
    <Transition style="transition-delay: 0.25s" name="slide-fade-right" appear>
      <Portret title="Michel" imgSrc="michel" colour="ff5c49" />
    </Transition>
    <Transition style="transition-delay: 0.45s" name="slide-fade-down" appear>
      <Portret title="Jan" imgSrc="jan" colour="d61a67" />
    </Transition>
    <Transition style="transition-delay: 0.25s" name="slide-fade-left" appear>
      <Portret title="Bram" imgSrc="gert" colour="600026" />
    </Transition>
    <Transition style="transition-delay: 0.45s" name="slide-fade-left" appear>
      <Portret title="Robin" imgSrc="roy" colour="ff8647" />
    </Transition>
  </div>
  <Transition style="transition-delay: 1.5s" name="slide-fade-up" appear>
    <div id="text">
      <p>Vechtdal Tweewielers is sinds Mei 2022 gevestigd aan de Bruchterweg 21 te Hardenberg. Met deze vestiging werd
        een
        droom werkelijkheid voor Michel Schipper en Joost Brink</p>
      <br>
      <p>Michel en Joost, al eerder collega's van elkaar binnen de fietsenbranche, hebben hier hun kennis en kunde
        samengevoegd en dit pand (ooit bekend van Vasse koken en cadeau's) mogen openen. Inmiddels is het team met
        diverse
        enthousiaste werknemers uitgebreid.</p>
    </div>
  </Transition>
</template>

<script>

import Portret from '../components/portret.vue'

export default {
  name: "portrets",
  components: { Portret }
};
</script>

<style scoped>
#portrets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 24px;
}

#text {
  padding: 80px 20%;
}
</style>