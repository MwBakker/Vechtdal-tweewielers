<template>
    <div class="row">
      <Transition name="slide-fade-right" appear>
        <div id="overlay">
          <div id="text">
            <h2>{{title}}</h2>
            <p>{{text}}</p>
            <a :href="link">Bezoek de website</a>
          </div>
        </div>
      </Transition>
      <div class='row-img' :style="{ backgroundImage: `url(${'../../assets/' + imgSrc})` }"></div>
    </div>
  </template> 
  
  <script>
  export default {
    name: "overlapsedRow",
    props: {
        link: String,
        imgSrc: String,
        title: String,
        text: String,
    }
  };
  </script>
  
<style scoped>
  .row {
    position: relative;
    border-bottom: 0.1px solid rgb(50, 50, 50);
    display: flex;
    flex-direction: row;
  }
  
  .row-img {
    min-height: 42vh;
    -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0)), 
                        linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0));
    -webkit-mask-size: 100% 50%; 
    -webkit-mask-position: left top, left center; 
    flex: 5;
    object-fit: cover;
    background-size: 100% 100%;
    background-position: right;
    background-repeat: no-repeat;
  }
  #overlay {
    flex: 2;
    padding: 0 32px;
  }
  #text { 
    height: 100%;
    text-align: left;
    white-space: nowrap;
    /* font-size: 14px; */
    a {
      position: absolute;
      bottom: 32px;
      color: inherit;
    }
  }
  
  p { 
    text-align: justify;
    word-break: break-word;
    white-space: normal;
  } 

  /* @media screen and (min-width: 480px) and (max-width: 800px)  {
    .row {
      flex-direction: column;
    }
    #overlay {
      padding: 0 16px;
    }
    #text { 
      font-size: 11px;
    }
    #text a {
      position: initial;
    }
    .row-img { 
      min-height: 23vh;
      -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), 
                          linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0));
      -webkit-mask-size: 100% 100%; 
    }
  } */
</style>