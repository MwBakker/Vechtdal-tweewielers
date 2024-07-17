<template>
  <div id="contact-form">
    <h2>Contactformulier</h2>
    <form class="vue-form" @submit.prevent="submit">
      <div>
        <p>Uw naam</p>
        <input v-model="name">
      </div>
      <div>
        <p>Uw email adres</p>
        <input v-model="email">
      </div>
      <div>
        <p>Uw telefoonnummer (optioneel)</p>
        <input v-model="phone">
      </div>
      <div>
        <p>Onderwerp</p>
        <input v-model="subject">
      </div>
      <div>
        <p>Beschrijving</p>
        <textarea v-model="description" cols="40" rows="5"></textarea>
      </div>
      <div v-if="!sent">
        <input id="button-send" type="submit" value="Verzenden">
      </div>
      <div v-if="sent">
        <p>Uw bericht verzonden</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact-form",
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      description: '',
      sent: false,
    };
  },
  methods: {
    submit: function () {
      let form = {};
      form.name = this.name;
      form.subject = this.subject;
      form.email = this.email;
      form.phone = this.phone;
      form.message = this.description;
      axios({
        url: '/mail.php',
        method: "POST",
        data: form
      }).then(() => {
        this.sent = true;
      });
    },
  },

};
</script>

<style scoped>
#contact-form {
  padding: 18px 0;
  margin: auto;
  width: 100%;

  div {
    width: 75%;
    margin: 12px auto;
  }

  p {
    font-size: 1rem;
    width: 70%;
    margin: 6px 0;
    text-align: left;
  }

  input,
  textarea {
    width: 100%;
    height: 24px;
    margin: auto;
    border: solid 2px #e0e4e2;
    background: none;
    border-radius: 6px;
    color: #e0e4e2;
  }

  textarea {
    height: 160px;
  }

  #button-send {
    height: 48px;
    font-size: 1rem;
  }
}
</style>