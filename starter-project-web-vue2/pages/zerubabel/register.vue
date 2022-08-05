<template>
  <v-contair>
    <h1>Register</h1>
    <UserAuthForm
      button-text="Register"
      :submit-form="registerUser"
      has-namee="true"
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
