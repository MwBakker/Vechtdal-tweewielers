<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const phone = ref('')
const subject = ref('')
const message = ref('')
const sent = ref(false)

function submit() {
  if (
    name.value === '' ||
    (email.value === '' && phone.value === '') ||
    subject.value === '' ||
    message.value === ''
  ) {
    alert('Niet alle nodige velden zijn ingevuld!')
    return
  }

  const form = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    subject: subject.value,
    message: message.value
  }

  axios({
    url: '../../mail.php',
    method: 'POST',
    data: form
  }).then(() => {
    sent.value = true
  })
}
</script>

<template>
  <form @submit.prevent="submit">
    <input placeholder="Uw naam" v-model="name">
    <input placeholder="Uw e-mail" v-model="email">
    <input placeholder="Uw telefoon nummer (optioneel)" v-model="phone">
    <input placeholder="Onderwerp" v-model="subject">
    <textarea placeholder="Uw bericht" v-model="message" cols="40" rows="5"></textarea>
    <input class="button" v-if="!sent" id="button-send" type="submit" value="Verzenden">
    <p v-else>Uw bericht is verzonden!</p>
  </form>
</template>

<style scoped>
form {
  width: 72.5%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 97%;
  position: initial;
}

@media (max-width: 1024px) {
  form {
    width: 97%;
  }
}

@media (max-width: 500px) {
  form {
    width: 100%;
  }
}
</style>