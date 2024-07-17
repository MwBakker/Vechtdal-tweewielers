<template>
  <div class="row">
    <Transition name="slide-fade-right" appear>
      <div id="overlay">
        <div id="text">
          <h1>Vechtdal bedrijfsfietsen</h1>
          <h2>Dé robuuste fiets voor uw bedrijf</h2>
          <p>De Vechtdal bedrijfsfiets is een robuuste fiets welke tegen een stootje
            kan. het sterke stalen frame zorgen samen met de oerdegelijke wielen
            voor een sterk geheel. De fiets is afgemonteerd met Shimano nexus
            onderdelen en is te verkrijgen met 3 versnellingen of 7 versnellingen.
            Naast de duurzame Nexus versnellingen en terugtrap rem systeem is
            de fiets onderhoudsarm en zeer degelijk in gebruik.</p>
          <br/>
          <h2>Waarom een Vechtdal bedrijfsfiets?</h2>
          <br/>
            <div class="company-bike-sub">
              <div class='powerpoint'><img class='gear' src='../../assets/icons/gear.png'/>
                <h3>Verantwoorde investering</h3>
              </div>
              <p>die ook nog een bijdrage kan leveren aan de
                  uitstraling van uw bedrijf. Dit door de bedrijfsfietsen te voorzien van uw
                  eigen logo, kleur en huisstijl.
                  Dan verder met de Vechtdal bedrijfsfietsen zijn van zeer hoogwaardige
                  kwaliteit en duurzame materialen gemaakt.</p>
            </div>
            <br/>
            <div class='company-bike-sub'>
              <div class='powerpoint'><img class='gear' src='../../assets/icons/gear.png'/>
                <h3>Kwaliteit uit eigen fabriek!</h3>
              </div>
              <p>Voor een bedrijfsfiets bent u bij Vechtdal tweewielers aan het juiste
                  adres. De ideale fiets voor uw bedrijf wordt in eigen fabriek met de
                  hand vervaardigd. De Vechtdal bedrijfsfiets is een praktische robuuste
                  fiets voor uw bedrijf welke voorzien is van een handig opvallend
                  framenummer voor uw eigen registratie. De solide bedrijfsfiets die in
                  eigen kleur samengesteld kan worden heeft een traditionele, doch
                  simple geometrie waardoor de fiets voor een brede doelgroep
                  inzetbaar is. De Bedrijfsfietsen zijn te verkrijgen in zowel 28 inch als 26
                  inch. Zo kan de 26 inch ingezet worden voor kleinere personeelsleden
                  waarbij de 28 inch een solide maat is voor de middelgrote tot grotere
                  personeelsleden. De bedrijfsfiets is ook beschikbaar in een elektrisch
                  model voorzien van een krachtige Shimano Steps middenmotor.</p>
            </div>
            <br/>
            <div class='company-bike-sub'>
              <div class='powerpoint'><img class='gear' src='../../assets/icons/gear.png'/>
                <h3>Referenties</h3>
              </div>
              <p>De Bedrijfsfiets wordt ingezet voor verschillende organisaties. Van
                ziekenhuizen tot vakantieparken. Ook in de voedingsmiddelen-industrie
                en op de bouwplaats zijn bedrijfsfietsen niet weg te denken. 
                Een bedrijfsfiets is hierin een betrokken rijdend visitekaartje.</p>
            </div>
          <br/>
          <h2>Samenstelling van uw bedrijfsfiets</h2>
          <p>Uw bedrijfsfiets dient een uitstraling naar uw wens te hebben. Vechtdal
              Tweewielers biedt u de mogelijkheid uw bedrijfsfiets naar uw smaak te zetten</p>
          <div id="bike-company-customazation">
            <h3>Kleuren</h3>
              <p>De bedrijfsfietsen zijn verkrijgbaar in de kleuren zwart, mat zwart, geel,
                  oranje, rood, blauw, wit en groen. Voor ieder bedrijf is er een
                  bijpassende kleur beschikbaar.</p>
              <br/>
              <h3>Met logo</h3>
              <p>Tevens is het mogelijk om de Vechtdal bedrijfsfiets te voorzien van een
                  eigen logo en huisstijl elementen. Zo creëert u een bedrijfsfiets die
                  opvalt en zorgt voor eenheid binnen uw bedrijf. Dankzij de opvallende
                  kleur mogelijkheden in combinatie met uw eigen logo draagt de
                  bedrijfsfiets ook nog bij aan de merkbekendheid en het duurzame
                  imago van uw bedrijf.</p>
              <br/>
              <h3>Elektrisch</h3>
              <p>De Elektrische bedrijfsfiets wordt steeds vaker ingezet voor bedrijven en
                  organisaties. Ook bij Vechtdal tweewielers is het mogelijk om een
                  bedrijfs ebike in te zetten als bedrijfsfiets.</p>
              </div>
          <br/>
          <br/>
          <h2>Bedrijfsfiets kopen?</h2>
          <p>Geïnteresseerd in het kopen van een Bedrijfsfiets van Vechtdal? Neem
            vrijblijvend contact op en wij verstrekken u graag een offerte voor het
            kopen van bedrijfsfietsen.</p>
          <p id="contact-link" @click="isMobile <= 800 ? clickedMobile('/verhuur', 'rental') : clicked('/contact')">Neem contact met ons op</p>
        </div>
      </div>
    </Transition>
    <div class="rowImg"></div>
  </div>
</template> 

<script>
export default {
  name: "bikeCompanyPage",
  data() {
    return {
        isMobile: window.innerWidth <= 800,
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

<style scoped>

p {
  text-align: justify;
}

.row {
  flex: 1;
  display: flex;
  flex-direction: row;
  position: relative;
  a {
    margin-top: 32px;
    color: inherit; 
  }
}

h2 {
  margin: 0; padding: 0;
  height: 20px;
}

h3 {
  margin: 0; padding: 0;
}

#contact-link { 
  text-decoration: underline;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
}

.powerpoint {
  margin-left: 24px;
  overflow: hidden;
}
.gear {
  height: 24px;
  float: left;
}

#bike-company-customazation p { 
  margin: 0; padding: 0;
}

.company-bike-sub h3 {
  margin: 0; padding: 0;
  margin-left: 46px;
}

.company-bike-sub p {
  margin: 0; padding-bottom: 8px;
  margin-left: 72px;
}

.rowImg {
  flex: 2;
  object-fit: cover;
  background: url(../../../assets/bike-company.jpg);
  background-size: 100% 100%;
  background-position: right;
  background-repeat: no-repeat;
  -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0)), linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0));
  -webkit-mask-size: 100% 50%; 
  -webkit-mask-position: left top, left center; 
}

#overlay {
  flex: 1;
}

#text {
  text-align: left;
  font-size: 16px;
  margin: 0 32px;
  white-space: nowrap;
}

p { 
  word-break: break-word;
  white-space: normal;
} 

@media screen and (min-width: 480px) and (max-width: 800px)  {
    .row {
      flex-direction: column;
    }
    .rowImg {
      flex: 2;
    }
    #overlay {
      flex: none;
      padding: 0px;
    }
    #text { 
      font-size: 11px;
      margin: 0 16px;
      a {
        position: initial;
      }
    }
    .rowImg { 
      background: url(../../../assets/bike-company-2.jpg);
      background-size: cover;
      min-height: 32vh;
      -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), 
                          linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0));
      -webkit-mask-size: 100% 100%; 
    }
    #contact-link { 
      font-size: 14px;
    }
  }
</style>