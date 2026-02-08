<script setup>
defineProps({
  msg: String
})
</script>

<template>
  <Transition name="slide-fade-right" appear>
    <div class="row">
      <div>
        <h1>Kleine reparaties: klaar terwijl u wacht</h1>
        <p>Indien de drukte het in de winkel toelaat kunnen kleine reparaties eventueel direct en snel voor u
          worden gerepareerd. Op een rustigere woensdag is die kans groter dan op een drukke zaterdag. Loop
          gerust even binnen of bel van te voren en we zullen er alles aan doen om u zo snel mogelijk te
          helpen!</p>
      </div>
    </div>
  </Transition>
  <img src="/assets/shop/maintenance/maintenance-3.jpg" alt="Werkplaats">
  <Transition name="slide-fade-left" appear>
    <div class="row-inverted">
      <div>
        <h1>Grote reparaties</h1>
        <p>Voor grotere reparaties kunt u natuurlijk ook bij ons terecht! Wij kunnen u vooraf laten weten wat de
          kosten zijn zodat u niet voor verrassingen komt te staan, vervolgens spreken we met u af wanneer de
          fiets weer op kan halen.</p>
      </div>
    </div>
  </Transition>
  <img src="/assets/shop/maintenance/maintenance-2.jpg" alt="Gereedschap">
  <div class="row">
    <div>
      <h1>Onderhoud</h1>
      <p>Bij Vechtdal tweewielers verzorgen onze gediplomeerde medewerkers niet alleen reparaties maar ook
        voor montage en onderhoud bent u bij ons aan het goede adres.</p>
    </div>
  </div>
  <img src="/assets/shop/maintenance/maintenance.jpg" alt="Werkplaats">
  <Transition name="slide-fade-right" appear>
    <div class="row-inverted">
      <div>
        <h1>Service</h1>
        <p>Wat kunt u verwachten van Vechtdal tweewielers:
          Reparaties snel en goed uitgevoerd door ons gecertificeerd personeel.
          Kleine reparaties? Indien mogelijk helpen wij u direct weer op weg!
          Reparatie van alle merken fietsen &amp; E-bikes.
          U weet van te voren wat de reparatie kost, dus nooit verrassingen achteraf.
          Kosteloos gebruik van een leenfiets.</p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.row,
.row-inverted {
  max-width: 1680px;
  margin: 48px auto;
  padding-inline: clamp(20px, 3vw, 64px);
  padding-right: 12vw;

  div {
    width: 60%;
  }

}

.row-inverted {
  padding-right: 0;
  padding-left: 20vw;
  float: right;
}

img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

p {
  text-align: justify;
}

h1 {
  text-align: left;
  margin: 0;
  font-size: calc(1.1rem + 0.8vw);
}

@media screen and (max-width: 1024px) {

  .row,
  .row-inverted {
    width: 90%;
    margin: 24px 5%;
    padding-inline: 0;
    padding: 0 16px;

    div {
      width: 100%;
    }

    h1 {
      text-align: center;
      margin: 16px 0;
    }

    p {
      text-align: left;
    }
  }
}
</style>