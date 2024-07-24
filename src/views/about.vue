<template>
  <div class="container">
    <img src="../assets/employers.png" alt="Joost en Michel">
    <Transition name="slide-fade-left" appear>
      <div id="overlay">
        <div id="text">
          <p>Vechtdal Tweewielers is sinds Mei 2022 gevestigd aan de Bruchterweg 21 te Hardenberg. Met deze vestiging werd een droom werkelijkheid voor Michel Schipper en Joost Brink</p>
          <br><br>
          <p>Michel en Joost, al eerder collega's van elkaar binnen de fietsenbranche, hebben hier hun kennis en kunde samengevoegd en dit pand (ooit bekend van Vasse koken en cadeau's) mogen openen. 
            Te vinden binnen deze vestiging zijn onder andere elektrische- stads- en kinderfietsen. Daarnaast vindt u ook een selectie aan gebruikte fietsen. Voor de sportievelingen is er een ruime 
            afdeling met mountainbikes en racefietsen.</p>
        </div>
      </div>
    </Transition>
  </div>
</template> 
  
<script>
export default {
  name: "infoPage",
};
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    flex: 1;
    width: 100%;
    object-fit: cover;
  }
}

#overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30%; height: 100%;
  bottom: 0;
  right: 0;
  background-color: rgb(18 18 18 / 0.75);
}

/* #text {
  font-size: 20px;
  margin: 25% 32px;
  white-space: nowrap;
} */

p { 
  word-break: break-word;
  white-space: normal;
}

/* @media screen and (min-width: 480px) and (max-width: 800px)  {
  .container { 
    height: 61vh;
  }
  #overlay { 
    width: 100%;
  }
  #text { 
    margin: 50% 16px;
  }
  #text p { 
    /* font-size: 11px; */
  /* } */ 
/* /} */
</style>