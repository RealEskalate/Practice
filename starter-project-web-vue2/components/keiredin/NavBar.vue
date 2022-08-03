<template>
  <div class="font">
    <v-app-bar
      class="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      fixed
    >
      <v-spacer></v-spacer>
      <v-toolbar-title >Blogs</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="$auth.loggedIn">
        {{ $auth.user.fullName }}
        <v-btn @click="$auth.logout()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn to="/keiredin/login">Login</v-btn>
        <v-btn to="/keiredin/register">Register</v-btn>
      </div>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'NavigationBar',
  data() {
    return {}
  }
}
</script>

<style scoped>
.font {
  font-family: Helvetica, Arial, sans-serif;
  padding-top: 4rem;
}
</style>






