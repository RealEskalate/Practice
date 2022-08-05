<template>
  <v-container>
    <h1>Login</h1>
    <hr />
    <v-form ref="form" v-model="valid" class="pa-md-14" lazy-validation>
      <v-text-field
        v-model="userInfo.email"
        :rules="[emailFormat()]"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="userInfo.password"
        :rules="[minLength('password', 3)]"
        type="password"
        label="Password"
        required
      ></v-text-field>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="loginUser(userInfo)"
      >
        Login
      </v-btn>
    </v-form>
  </v-container>
</template>
<script>
import validations from '~/utils/validations'
export default {
  name: 'Login',
  data() {
    return {
      valid: false,
      userInfo: {
        email: 'aben@gmail.com',
        password: '123',
      },
      ...validations,
    }
  },
  methods: {
    async loginUser(loginInfo) {
      await this.$auth.loginWith('local', {
        data: loginInfo,
      })
    },
  },
}
</script>
