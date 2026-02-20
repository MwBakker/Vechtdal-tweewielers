<script setup>
import Lines from '@/components/Lines.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <div id="footer">
    <Lines size="6px" inverted />
    <div id="content">
      <div id="info">
        <div>
          <h4>Contact</h4>
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
          <h4>Bedrijfsgegevens</h4>
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
          <router-link id="privacy" to="/juridisch">Privacy & Juridisch</router-link>
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

<style scoped lang="scss">
#footer {
  position: relative;
  background-size: 35% auto;
  background-image:
    linear-gradient(to bottom, rgb(2 2 2 / 100%), rgb(16 16 16 / 85%)),
    url('/assets/background/bike-chain.png');
}

#content {
  max-width: 1680px;
  margin: 0 auto;
  padding: clamp(36px, 2vw, 24px);
}

p,
#privacy {
  margin: 4px 12px;
  text-align: left;
}

#info {
  display: flex;
  justify-content: space-evenly;
  gap: 36px;
  flex-wrap: wrap;

  p {
    margin: 0;
  }

  span {
    display: flex;
    align-items: center;
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

#privacy {
  text-decoration: underline;
}

#site-ref {
  display: flex;
  flex-direction: column;
}

#referrence {
  margin-top: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 26px;
  margin: 12px 6px;
}

@media (max-width: 768px) {

  #footer {
    background-size: 100% auto;
  }

  #content {
    padding: 24px 0;
  }

  #referrence {
    margin-top: 2vh;
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
    }

    #logos {
      margin-top: 3vh;
    }
  }
}
</style>