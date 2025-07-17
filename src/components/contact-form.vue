<template>
  <form class="vue-form" @submit.prevent="submit">
    <input placeholder="Uw naam" v-model="name">
    <input placeholder="Uw e-mail" v-model="email">
    <input placeholder="Uw telefoon nummer (optioneel)" v-model="phone">
    <input placeholder="Onderwerp" v-model="subject">
    <textarea placeholder="Uw bericht" v-model="message" cols="40" rows="5"></textarea>
    <input class="button" v-if="!sent" id="button-send" type="submit" value="Verzenden">
    <p v-else>Uw bericht is verzonden!</p>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: "contact-form",
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      sent: false,
    };
  },
  methods: {
    submit: function () {
      let form = {};
      if (this.name == ''
        || (this.email == '' && this.phone == '')
        || this.subject == ''
        || this.message == '') {
        alert('Niet alle nodige velden zijn ingevuld!');
        return;
      }
      form.name = this.name;
      form.email = this.email;
      form.phone = this.phone;
      form.subject = this.subject;
      form.message = this.message;
      axios({
        url: '../../mail.php',
        method: "POST",
        data: form
      }).then((response) => {
        this.sent = true;
      });
    },
  },

};
</script>

<style scoped>
form {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
}

input,
textarea {
  width: 97%;
  margin: 12px 0;
  padding: 10px;
  border: solid 2px #e0e4e2;
  background: none;
  border-radius: 6px;
  color: #e0e4e2;
}

textarea {
  height: 160px;
}

#button-send {
  width: 100%;
  position: initial;
}
</style>