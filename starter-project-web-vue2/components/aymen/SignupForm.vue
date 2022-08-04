<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md5>
        <v-card class="elevation-12">
          <v-toolbar dark color="indigo darken-4">
            <v-toolbar-title>Signup</v-toolbar-title>
          </v-toolbar>
          <v-alert color="error" :value="error" icon="mdi-close">
            Something went wrong, try again.
          </v-alert>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="userInfo.email"
                prepend-icon="mdi-email"
                name="email"
                label="Email"
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="userInfo.fullName"
                prepend-icon="mdi-account"
                name="fullname"
                label="Full Name"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="userInfo.password"
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-layout class="align-center justify-center">
            <v-btn
              color="indigo darken-4 white--text"
              @click.prevent="signup()"
            >
              <v-progress-circular
                v-if="islogging"
                :size="25"
                :width="2"
                indeterminate
                color="white"
              ></v-progress-circular>
              <h4 v-else>Signup</h4>
            </v-btn>
          </v-layout>
          <v-layout class="align-center justify-center">
            <v-card-actions>
              Already have an account? &nbsp;
              <v-btn class="indigo--text" text to="/aymen/signin">Signin</v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SignupForm',
  data() {
    return {
      userInfo: {
        email: '',
        fullName: '',
        password: '',
      },
      error: false,
      issignup: false,
    }
  },
  methods: {
    ...mapActions('aymen', ['register']),
    async signup() {
      this.issignup = true
      const res = await this.register(this.userInfo)
      if (res) {
        this.issignup = false
        this.$router.push('/signup')
      } else {
        this.error = true
        this.issignup = false
      }
    },
  },
}
</script>
