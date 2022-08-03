<template>
  <v-container>
    <v-card width="500" class="ma-auto">
      <v-form class="pa-10">
        <v-subheader>
          <h1>log in here</h1>
        </v-subheader>

        <v-text-field
          label="Email"
          v-model="emailModel"
          :rules="emailRules"
        ></v-text-field>

        <v-text-field
          label="Password"
          :type="showPassword ? 'password' : 'text'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          v-model="passwordModel"
          @click:append="showPassword = !showPassword"
        ></v-text-field>

        <nuxtLink to="/yohans">
          <v-btn color="blue" v-ripple="false" @click="logIn"> LogIn </v-btn>
        </nuxtLink>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      emailModel: '',
      passwordModel: '',
      showPassword: true,

      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

      passwordRules: [
        (v) => !!v || 'password is required',
        (v) => v.length > 8 || 'password must have greater than 8 charactores',
      ],
    }
  },
  methods: {
    ...mapActions({
      logIn: 'yohans/logIn',
    }),
    lengthRule(a, b) {
      console.log('valuedation')
      return (v) => v.length < 12 || 'eroor'
    },
  },
}
</script>
