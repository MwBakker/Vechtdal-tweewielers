<template>
  <div id='footer'>
    <Lines />
    <div id="content">
      <div id="site-ref">
        <p>Build and design by: <a id="linked-in"
            href="https://www.linkedin.com/in/martijn-bakker-900a8787/">Softwarebakker</a></p>
        <p>© Vechtdal Tweewielers Hardenberg</p>
      </div>
      <div id='logos'>
        <a href='https://www.facebook.com/vechtdaltweewielers/'><img class='logo'
            src='@/assets/icons/fb-follow.png' /></a>
        <a href='https://www.instagram.com/vechtdaltweewielers/'><img class='logo' src='@/assets/icons/insta.png' /></a>
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

  #content {
    padding: 6px 8px;
    display: flex;
    justify-content: space-between;
  }
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