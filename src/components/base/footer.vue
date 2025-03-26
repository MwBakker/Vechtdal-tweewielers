<template>
  <div id='footer'>
    <Lines />
    <div id="content">
      <div id="info">
        <div>
          <h2>Contact</h2>
          <span><img :src="getImageSrc(`icons/location.png`)"><p>Bruchterweg 21, Hardenberg</p></span>
          <span><img :src="getImageSrc(`icons/telephone.png`)"><p>0523 225 104</p></span>
          <span><img :src="getImageSrc(`icons/mail.png`)"><p>info@vechtdaltweewielers.nl</p></span>
        </div>
        <div>
          <h2>Bedrijfsgegevens</h2>
          <span><p>Kvk: 12345678910</p></span>
          <span><p>Btw: 12345678910</p></span>
        </div>
      </div>
      <div id="referrence">
        <div id="site-ref">
          <p>Build and design by: <a id="linked-in"
              href="https://www.linkedin.com/in/martijn-bakker-900a8787/">Softwarebakker</a></p>
          <p>© 2025 Vechtdal Tweewielers Hardenberg</p>
        </div>
        <div id='logos'>
          <a href='https://www.facebook.com/vechtdaltweewielers/'><img class='logo'
              src='@/assets/icons/fb-follow.png' /></a>
          <a href='https://www.instagram.com/vechtdaltweewielers/'><img class='logo'
              :src="getImageSrc('icons/insta.png')" /></a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Lines from '../lines.vue'
export default {
  name: 'footerSection',
  components: { Lines },
  props: {
    msg: String
  }
}
</script>
<style scoped>
p {
  font-size: calc(0.7rem + 0.2vw);
  margin: 4px 12px;
  text-align: left;
}

#info {
  display: flex;
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
  background-size: 15% auto;
  background-repeat: repeat;
  background-image:
    linear-gradient(to bottom, rgb(2 2 2 / 100%), rgb(16 16 16 / 92.5%)),
    url('../../assets/bike-chain.png');
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