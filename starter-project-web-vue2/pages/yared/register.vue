<template>
  <v-container>
    <h1>Register</h1>
    <hr />
    <v-form ref="form" v-model="valid" class="pa-md-14" lazy-validation>
      <v-text-field
        v-model="userInfo.name"
        :rules="[maxLength('name', 20)]"
        label="Full Name"
        required
      ></v-text-field>
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
        @click="registerUser"
      >
        Sign up
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
        fullName: '',
        email: '',
        password: '',
      },
      ...validations,
    }
  },
  methods: {
    async registerUser() {
      await this.$store.dispatch('yared/registerUser', this.userInfo)
      this.$router.push('yared/login')
    },
  },
}
</script>
