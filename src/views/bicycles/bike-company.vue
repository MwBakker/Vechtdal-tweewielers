<script>
export default {
  name: "bikeCompanyPage",
  data() {
    return {
      isMobile: window.innerWidth <= 1024,
    }
  },
  methods: {
    clicked(route) {
      this.$root.$refs.navBar.clickedInPage(route, this.$root.$refs.navBar.$refs.li_contact);
    },
    clickedMobile(route) {
      this.$root.$refs.navBar_mobile.clicked(route, 'contact');
    }
  },
};
</script>

<template>
  <div id="bike-company">
    <Transition name="slide-fade-right" appear>
      <div id="text">
        <h1>Vechtdal bedrijfsfietsen</h1>
        <p>De Vechtdal bedrijfsfiets is een robuuste fiets welke tegen een stootje
          kan. het sterke stalen frame zorgen samen met de oerdegelijke wielen
          voor een sterk geheel. De fiets is afgemonteerd met Shimano nexus
          onderdelen en is te verkrijgen met 3 of 7 versnellingen en terugtrap rem systeem.</p>
        <br />
        <h2>Waarom een Vechtdal bedrijfsfiets?</h2>
        <div class="company-bike-sub">
          <div class='powerpoint'>
            <img class='gear' src="/assets/icon/gear.png" />
            <h3>Verantwoorde investering</h3>
          </div>
        </div>
        <br />
        <div class='company-bike-sub'>
          <div class='powerpoint'>
            <img class='gear' src="/assets/icon/gear.png" />
            <h3>Kwaliteit uit eigen fabriek!</h3>
          </div>
        </div>
        <br />
        <div class='company-bike-sub'>
          <div class='powerpoint'>
            <img class='gear' src="/assets/icon/gear.png" />
            <h3>Referenties</h3>
          </div>
        </div>
        <br />
        <h2>Samenstelling van uw bedrijfsfiets</h2>
        <p>Uw bedrijfsfiets dient een uitstraling naar uw wens te hebben. Vechtdal
          Tweewielers biedt u de mogelijkheid uw bedrijfsfiets naar uw smaak te zetten</p>
        <br />
        <h2>Kleuren</h2>
        <p>Verkrijgbaar in de kleuren zwart, mat zwart, geel,
          oranje, rood, blauw, wit en groen. Voor ieder bedrijf is er een
          bijpassende kleur beschikbaar.</p>
        <br />
        <h2>Met logo</h2>
        <p>Een Vechtdal bedrijfsfiets kan worden voorzien van een
          eigen logo en huisstijl elementen.</p>
        <br />
        <h2>Elektrisch</h2>
        <p>De Elektrische bedrijfsfiets wordt steeds vaker ingezet voor bedrijven en
          organisaties. Ook bij Vechtdal tweewielers is het mogelijk om een
          bedrijfs ebike in te zetten als bedrijfsfiets.</p>
        <br />
        <h2>Interesse?</h2>
        <p>Neem vrijblijvend contact op en wij verstrekken u graag een offerte voor het
          kopen van bedrijfsfietsen.</p>
        <button class="button" @click="isMobile <= 1024 ? clickedMobile('/verhuur', 'rental') : clicked('/contact')">
          <p>Neem contact op</p>
        </button>
      </div>
    </Transition>
    <img id="main-img" src="/assets/shop/bike/bike-business.jpg" />
  </div>
</template>

<style scoped>
#bike-company {
  display: flex;
}

.button {
  margin: 24px 0;
  position: initial;
}

.company-bike-sub p {
  margin: 0 0 0 50px;
}

#text {
  width: 42.5%;
  margin: 12px auto;
  text-align: left;

  img {
    height: 3vh;
    margin: auto 24px auto 0;
  }
}

h3 {
  margin: 12px 0;
}

p {
  text-align: left;
}

#main-img {
  -webkit-mask-image: linear-gradient(270deg, #000, transparent), linear-gradient(270deg, rgba(0, 0, 0, .5), transparent);
  -webkit-mask-size: 100% 50%;
  -webkit-mask-position: left top, left center;
  width: 55%;
  object-fit: cover;
}

.powerpoint {
  margin-left: 7.5%;
  display: flex;
}

@media (max-width: 1024px) {
  #text {
    width: 90%;
    text-align: center;
    margin: 0 auto;
  }

  #main-img {
    width: 100%;
  }

  #bike-company {
    display: block;
  }
}
</style>