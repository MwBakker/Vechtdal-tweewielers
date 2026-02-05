<script setup>
import Lines from '../Lines.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <div id="footer">
    <Lines />
    <div id="content">
      <div id="info">
        <div>
          <h2>Contact</h2>
          <span>
            <img src="/assets/icon/contact/location.png" />
            <p>Bruchterweg 21, Hardenberg</p>
          </span>
          <span>
            <img src="/assets/icon/contact/telephone.png" />
            <p>0523 225 104</p>
          </span>
          <span>
            <img src="/assets/icon/contact/mail.png" />
            <p>info@vechtdaltweewielers.nl</p>
          </span>
        </div>
        <div>
          <h2>Bedrijfsgegevens</h2>
          <span>
            <p>Kvk: 94378592</p>
          </span>
          <span>
            <p>Btw: NL866755524B01</p>
          </span>
        </div>
      </div>
      <div id="referrence">
        <div id="site-ref">
          <p>
            Build and design by:
            <a id="linked-in" href="https://www.linkedin.com/in/martijn-bakker-900a8787/">
              Softwarebakker
            </a>
          </p>
          <p>© {{ currentYear }} Vechtdal Tweewielers Hardenberg</p>
        </div>
        <div id="logos">
          <a href="https://www.facebook.com/vechtdaltweewielers/">
            <img class="logo" src="/assets/icon/social/fb-follow.png" />
          </a>
          <a href="https://www.instagram.com/vechtdaltweewielers/">
            <img class="logo" src="/assets/icon/social/insta.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: calc(0.7rem + 0.2vw);
  margin: 4px 12px;
  text-align: left;
}

#info {
  display: flex;
  margin-top: 1vh;
  justify-content: space-evenly;

  p {
    margin: 0;
  }

  span {
    display: flex;
    margin: 12px 0;
  }

  img {
    height: 20px;
    margin-right: 16px;
  }
}

#linked-in {
  text-decoration: underline;
  color: inherit;
}

#footer {
  position: relative;
  background-size: 85% auto;
  background-image:
    linear-gradient(to bottom, rgb(2 2 2 / 100%), rgb(16 16 16 / 85%)),
    url('/assets/background/bike-chain.png');
}

#referrence {
  padding: 6px 8px;
  display: flex;
  justify-content: space-between;
}

#site-ref-text p {
  text-align: left;
  margin: auto 0;
  margin: 4px 0;
  color: #ffffff85;
}

.logo {
  height: 26px;
  margin: 12px 6px;
}
</style>