<template>
   <rowOverlapsed class="row" link="movanext.nl" title="MovaNext" imgSrc="movanext.jpg"
                  text="Licht, compact en makkelijk zijn de 3 kernwoorden om de MovaNext te omschrijven. Steeds vaker is men op zoek naar een lichte fietsendrager omdat de combinatie van twee zware E-Bikes 
                        en het eigen gewicht van de fietsendrager boven de maximale belasting van vooral kleine, elektrische of hybride auto's uitkomt. 
                        De MovaNext is hiervoor de beste keuze. Dankzij het unieke gepatenteerde- en uiterst veilige klemsysteem, zit de MovaNext in slechts enkele seconden rotsvast op de trekhaak. 
                        Deze drager wordt geleverd met een 13 polig Jaeger stekker. Onze fietsendrager is een Nederlands ontwerp en wordt ook in Nederland geassembleerd. 
                        MovaNext heeft een bewezen kwaliteit en een RDW veiligheidskeur, mede hierdoor is onze fietsendrager uit meerdere tests als beste getest als beste of aanrader gekomen." />
    <!-- <div class="row">
      <Transition name="slide-fade-right" appear>
        <div id="overlay">
          <div id="text">
            <h1>MovaNext</h1>
            <p></p>
            <a href="https://movanext.nl">Bezoek de website</a>
          </div>
        </div>
      </Transition>
      <div class="rowImg"></div>
    </div> -->
  </template> 
  
  <script>
  import rowOverlapsed from '../../components/row-overlapsed.vue';
  export default {
    components: { rowOverlapsed },
    name: "bikeCarrier",
  };
  </script>
  
  <style scoped>
  .row {
    flex: 1;
  }
  </style>