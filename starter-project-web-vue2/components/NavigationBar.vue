<template>
  <div class="font">
    <v-app-bar
      class="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      fixed
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>
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
    return {
      title: 'HakimHub Web Members',
    }
  },
}
</script>

<style scoped>
.font {
  font-family: Helvetica, Arial, sans-serif;
  padding-top: 4rem;
}
</style>
