<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md5>
        <v-card class="elevation-12">
          <v-toolbar dark color="indigo darken-4">
            <v-toolbar-title>Signin</v-toolbar-title>
          </v-toolbar>
          <v-alert color="error" :value="error" icon="mdi-close">
            The email or password is incorrect.
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
              @click.prevent="signin($event)"
            >
              <v-progress-circular
                v-if="islogging"
                :size="25"
                :width="2"
                indeterminate
                color="white"
              ></v-progress-circular>
              <h4 v-else>Signin</h4>
            </v-btn>
          </v-layout>
          <v-layout class="align-center justify-center">
            <v-card-actions>
              Don't have an account? &nbsp;
              <v-btn class="indigo--text" text to="/aymen/signup">Signup</v-btn>
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
  name: 'SigninForm',
  data() {
    return {
      userInfo: {
        email: '',
        password: '',
      },
      error: false,
      islogging: false,
    }
  },
  methods: {
    ...mapActions('aymen', ['login']),
    async signin(e) {
      e.preventDefault()
      this.islogging = true
      const res = await this.login(this.userInfo)
      if (res) {
        this.$router.push('/aymen')
      } else {
        this.islogging = false
        this.error = true
      }
    },
  },
}
</script>
