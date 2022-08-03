<template>
  <v-toolbar flat app>
    <v-toolbar-title class="text-uppercase grey--text">
      <span class="font-weight-light">Latest</span>
      <span>Blogs</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat color="grey" @click="signout()">
      <span>Sign Out</span>
      <v-icon right>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    signout() {
      localStorage.removeItem('token')
      this.$router.push('/aymen/signin')
    },
  },
}
</script>
