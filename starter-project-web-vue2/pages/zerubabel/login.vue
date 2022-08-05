<template>
  <v-container>
    <h1>LogIn</h1>
    <UserAuthForm button-text="Login" :submit-form="loginUser" />
  </v-container>
</template>

<script>
import UserAuthForm from '@/components/abraham/UserAuthForm.vue'
export default {
  components: {
    UserAuthForm,
  },
  methods: {
    async loginUser(loginInfo) {
      const res = await this.$auth.loginWith('local', {
        data: loginInfo,
      })
      console.log(res)
    },
  },
}
</script>
