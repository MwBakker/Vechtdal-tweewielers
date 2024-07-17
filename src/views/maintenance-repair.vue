<template>
    <div>
      <Transition name="slide-fade-right" appear>
        <div class="row">
          <h1>Kleine reparaties: klaar terwijl u wacht</h1>
          <p>Indien de drukte het in de winkel toelaat kunnen kleine reparaties eventueel direct en snel voor u
              worden gerepareerd. Op een rustigere woensdag is die kans groter dan op een drukke zaterdag. Loop
              gerust even binnen of bel van te voren en we zullen er alles aan doen om u zo snel mogelijk te
              helpen!</p> 
        </div>
      </Transition>
      <img src="../assets/maintenance-3.jpg" alt="Werkplaats">
      <Transition name="slide-fade-left" appear>
        <div class="row-inverted">
          <h1>Grote reparaties</h1>
          <p>Voor grotere reparaties kunt u natuurlijk ook bij ons terecht! Wij kunnen u vooraf laten weten wat de
            kosten zijn zodat u niet voor verrassingen komt te staan, vervolgens spreken we met u af wanneer de
            fiets weer op kan halen.</p> 
        </div>
      </Transition>
      <img src="../assets/maintenance-2.jpg" alt="Gereedschap">
      <div class="row">
        <h1>Onderhoud</h1>
        <p>Bij Vechtdal tweewielers verzorgen onze gediplomeerde medewerkers niet alleen reparaties maar ook
           voor montage en onderhoud bent u bij ons aan het goede adres.</p> 
      </div>
      <img src="../assets/maintenance.jpg" alt="Werkplaats">
      <Transition name="slide-fade-right" appear>  
        <div class="row-inverted">
          <h1>Service</h1>
          <p>Wat kunt u verwachten van Vechtdal tweewielers:
            Reparaties snel en goed uitgevoerd door ons gecertificeerd personeel.
            Kleine reparaties? Indien mogelijk helpen wij u direct weer op weg!
            Reparatie van alle merken fietsen &amp; E-bikes.
            U weet van te voren wat de reparatie kost, dus nooit verrassingen achteraf.
            Kosteloos gebruik van een leenfiets.</p> 
        </div>
      </Transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'maintencanceRepairPage',
    props: {
      msg: String
    }
  }
  </script>
  <style scoped>
  
  .row, .row-inverted {
    float: left;
    width: 47%;
    margin: 1.5%;
    text-align: left;
  }
  .row-inverted { 
    float: right;
  }

  img { 
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  p { 
    text-align: justify;
    color: #e0e4e2;
  }
  
  h1 { 
    font-size: 32px;
    margin: 0;
  }
  
  h3 {
    margin: 40px 0 0 0;
  }
  
  @media screen and (min-width: 480px) and (max-width: 800px)  {
    
  .row, .row-inverted{
    width: 90%;
    margin: 16px;
    }
  }
  p {
    text-align: left;
  }
</style>
  