<template>
  <v-contair>
    <h1>Register</h1>
    <UserAuthForm
      buttonText="Register"
      :submitForm="registerUser"
      hasNamee="true"
    />
  </v-contair>
</template>

<script>
import UserAuthForm from '@/components/abraham/UserAuthForm.vue'
export default {
  components: {
    UserAuthForm,
  },
  methods: {
    registerUser(registerationinfo) {
      debugger
      alert('You presssed  a button')
    },
  },
}
</script>
