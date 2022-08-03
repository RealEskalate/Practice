<template>
<v-card>
  <v-card-title>
    <h2>Login</h2>
  </v-card-title>

  <v-card-text>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="userInfo.email"
        :rules="[required('email'), emailFormat()]"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="userInfo.password"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[required('password'), minLength('password', 3)]"
        counter="true"
        @click:append="showPassword = !showPassword"
      />

    </v-form>
  </v-card-text>

  <v-card-actions>
    <v-btn
      outlined
      rounded
      text
    >
      Login
    </v-btn>
  </v-card-actions>

</v-card>
</template>



<script>
import validations from '@/utils/validations'
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        email: '',
        password: '',
      },
      ...validations,
    }
  }
}
</script>
