<template>
  <v-container class="ma-auto d-flex justify-center">
    <img
      width="300"
      height="500"
      src="https://www.quoteambition.com/wp-content/uploads/2021/05/Carl-Jung-Quote-Unconscious-Conscious-210521.jpg?ezimgfmt=rs:382x382/rscb1/ng:webp/ngcb1"
    />
    <v-card width="500">
      <v-form class="pa-10">
        <v-subheader>
          <h1>register here</h1>
        </v-subheader>

        <v-text-field
          label="your name"
          v-model="nameModel"
          :rules="nameRules"
          outlined
        ></v-text-field>

        <v-text-field
          label="your Email"
          v-model="emailModel"
          :rules="emailRules"
          outlined
        ></v-text-field>

        <v-text-field
          label="Password"
          :type="showPassword ? 'password' : 'text'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          v-model="passwordModel"
          @click:append="showPassword = !showPassword"
          outlined
        ></v-text-field>

        <v-col class="d-flex justify-space-between align-center pa-0">
          <v-checkbox v-ripple="false" label="Remeber me" />
          <a> Forget Password?</a>
        </v-col>

        <nuxtLink to="/yohans">
          <v-btn
            style="width: 100%"
            color="blue"
            v-ripple="false"
            @click="logIn"
          >
            join now
          </v-btn>
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
      nameModel: '',
      emailModel: '',
      passwordModel: '',
      showPassword: true,

      nameRules: [
        (v) => !!v || 'name is required',
        (v) => v.length < 45 || 'name too long',
      ],

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
