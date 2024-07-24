<template>
  <div id="background-rental">
    <Transition name="slide-fade-right" appear>
      <div class="rental-block">
        <div class="block-title">
          <h1>Stadsfiets</h1>
        </div>
        <div class="block-prices">
          <p>Per dag: </p>
          <p>€ 15</p>
        </div>
        <div class="block-prices">
          <p>Per week: </p>
          <p>€ 75</p>
        </div>
      </div>
    </Transition>
    <Transition name="slide-fade-right" appear>
      <div style="transition-delay: 0.25s" class="rental-block">
        <div class="block-title">
          <h1>Mountainbike</h1>
        </div>
        <div class="block-prices">
          <p>Per dag: </p>
          <p>€ &nbsp;25*</p>
        </div>
        <div class="block-prices">
          <p>Per week: </p>
          <p>€ 125*</p>
        </div>
        <div id="bottom-text"><i>* prijzen inclusief helm</i></div>
      </div>
    </Transition>
    <Transition name="slide-fade-right" appear>
      <div style="transition-delay: 0.5s" class="rental-block">
        <div class="block-title">
          <h1>E-bike</h1>
        </div>
        <div class="block-prices">
          <p>Per dag: </p>
          <p>€ &nbsp;25</p>
        </div>
        <div class="block-prices">
          <p>Per week: </p>
          <p>€ 125</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'rental-page',
}
</script>

<style scoped>
#background-rental {
  flex: 1;
  background-image: url("../assets/bike-rental.jpg");
  background-size: 100% 100%;
  object-fit: cover;
}

.rental-block {
  position: relative;
  margin: 32px;
  border: 3px solid #600026;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  width: 30%;
  height: 17.5%;

  h1 {
    /* font-size: 24px; */
    margin: 0;
  }
}

.block-title {
  padding: 12px;
}

.block-title,
.block-prices {
  text-align: left;
}

.block-prices {
  overflow: hidden;
  margin-left: 25%;

  p {
    float: left;
    width: 50%;
    margin: 0 0 16px 0;
    /* font-size: 1.2rem; */
  }
}

#bottom-text {
  position: absolute;
  text-align: right;
  /* font-size: 11px; */
  bottom: 0;
  right: 0;
  margin: 6px;
  margin-right: 12px;
}

@media screen and (min-width: 480px) and (max-width: 800px) {
  #background-rental {
    height: 100%;
    background-size: cover;
  }

  .rental-block {
    margin: 7.5% 5%;
    border: 2px solid #600026;
    width: 90%;
    height: 25%;

    /* h1 {
      font-size: 16px;
      margin: 0;
    } */
  }

  .block-prices {
    margin-left: 25%;

    p {
      float: left;
      width: 50%;
      margin: 0 0 8px 0;
      /* font-size: 14px; */
    }
  }

  #bottom-text {
    /* font-size: 6px; */
  }
}

/* @media screen and (min-width: 450px) and (min-height:300px) and (max-height:800px) {
  .rental-block {
    height: 40%;
  }
} */
</style>