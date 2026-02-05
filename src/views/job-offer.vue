<script setup>
defineProps({
  msg: String
})
</script>

<template>
  <div id="block-row">
    <Transition name="slide-fade-right" appear>
      <div class="block" id="block-text">
        <h1>Vacature: all-round fietsenmaker</h1>
        <p>Als allround fietsenmaker bij ons ben je verantwoordelijk voor het uitvoeren van reparaties en
          onderhoudswerkzaamheden aan diverse
          soorten fietsen, waaronder: stadsfietsen, elektrische fietsen, racefietsen en mountainbikes. Je streeft ernaar
          om onze klanten de best
          mogelijke service te bieden en hen te adviseren over de meest geschikte oplossingen voor hun fietsproblemen.
        </p>
        <p> Interesse? Stuur ons een bericht via ons contactformulier, of kom gerust langs.</p>

      </div>
    </Transition>
    <Transition name="slide-fade-left" appear>
      <div class="block">
        <img src="../assets/employees.jpg">
      </div>
    </Transition>
  </div>
</template>

<style scoped>
#block-row {
  display: flex;
  border-bottom: 0.1px solid rgb(50, 50, 50);
}

#block-text {
  padding: 16px 32px 0 16px;
}

p {
  text-align: left;
  color: #e0e4e2;
}

img {
  height: 35vh;
  object-fit: cover;
}

h1 {
  text-align: left;
  margin: 0;
}

h3 {
  margin: 40px 0 0 0;
}

@media screen and (min-width: 480px) and (max-width: 800px) {
  #block-row {
    display: block;
  }

  img {
    width: 100%;
  }
}
</style>