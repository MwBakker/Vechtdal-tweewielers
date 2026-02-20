<script setup>
import { useSeoMeta, useHead } from '@unhead/vue'
import CustomButton from '@/components/Button.vue'

useSeoMeta({
  title: 'Bedrijfsfietsen',
  description:
    'Zakelijke en robuuste bedrijfsfietsen van Vechtdal Tweewielers. Ideaal voor bedrijven, met maatwerk, logo en elektrische opties.'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.vechtdaltweewielers.nl/fietsen/bedrijfs-gerelateerd'
    }
  ]
})

const reasons = [
  'Verantwoorde investering',
  'Kwaliteit uit eigen fabriek!',
  'Referenties'
]
</script>

<template>
  <div id="bike-company">
    <Transition name="slide-fade-right" appear>
      <div id="text">
        <p>
          De Vechtdal bedrijfsfiets is een robuuste fiets die tegen een stootje kan.
          Het sterke stalen frame en de oerdegelijke wielen zorgen voor een sterk geheel.
          De fiets is afgemonteerd met Shimano Nexus onderdelen en is verkrijgbaar met
          3 of 7 versnellingen en terugtraprem.
        </p>
        <h2>Waarom een Vechtdal bedrijfsfiets?</h2>
        <div v-for="reason in reasons" :key="reason" class="company-bike-sub">
          <div class="powerpoint">
            <img class="gear" src="/assets/icon/gear.png" />
            <h3>{{ reason }}</h3>
          </div>
        </div>
        <h2>Samenstelling van uw bedrijfsfiets</h2>
        <p>
          Uw bedrijfsfiets krijgt een uitstraling naar wens.
          Vechtdal Tweewielers biedt volop mogelijkheden om de fiets
          aan te passen aan uw huisstijl.
        </p>
        <h2>Kleuren</h2>
        <p>
          Verkrijgbaar in zwart, mat zwart, geel, oranje, rood,
          blauw, wit en groen — voor ieder bedrijf een passende kleur.
        </p>
        <h2>Met logo</h2>
        <p>
          Een Vechtdal bedrijfsfiets kan worden voorzien van een
          eigen logo en huisstijl-elementen.
        </p>
        <h2>Elektrisch</h2>
        <p>
          Elektrische bedrijfsfietsen worden steeds vaker ingezet.
          Ook bij Vechtdal Tweewielers is een e-bike als bedrijfsfiets mogelijk.
        </p>
        <h2>Interesse?</h2>
        <p>
          Neem vrijblijvend contact op voor een offerte
          voor bedrijfsfietsen.
        </p>
        <CustomButton link="contact">
          Neem contact op
        </CustomButton>
      </div>
    </Transition>
    <img id="main-img" src="/assets/shop/bike/bike-business.jpg" alt="Bedrijfsfiets" />
  </div>
</template>


<style scoped lang="scss">
#bike-company {
  display: flex;
  max-width: 1680px;
  margin: 0 auto;
  padding-inline: clamp(20px, 3vw, 64px);
}

.button {
  margin: 24px 0;
  position: initial;
}

.company-bike-sub p {
  margin: 0 0 0 50px;
}

#text {
  margin: 146px 4vh 24px auto;
  text-align: left;

  img {
    height: 2vh;
    margin: auto 24px auto 0;
  }
}

h2 {
  margin: 16px 0;
}

h3 {
  margin: 12px 0;
}

p {
  text-align: left;
}

#main-img {
  width: 50vw;
  margin-right: calc(50% - 50vw);
  object-fit: cover;

  -webkit-mask-image:
    linear-gradient(270deg, #000, transparent),
    linear-gradient(270deg, rgba(0, 0, 0, 0.5), transparent);
  -webkit-mask-size: 100% 50%;
  -webkit-mask-position: left top, left center;
}

.powerpoint {
  margin-left: 7.5%;
  display: flex;
}

@media (max-width: 1024px) {

  #bike-company {
    display: flex;
    flex-direction: column;
    margin: 106px 24px;
    padding-inline: 0;
  }

  #text {
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  #main-img {
    width: 100%;
  }

  #bike-company {
    display: block;
  }

  .button {
    margin: 36px auto;
  }
}
</style>