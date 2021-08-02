<template>
  <v-card>
    <v-app-bar
      app
      class="purple"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-list class="purple">
        <v-list-tile>
          <v-list-tile-content>
            <NuxtLink to="/adona">
              <v-list-tile-title class="white--text"> Adona </v-list-tile-title>
            </NuxtLink>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-app-bar>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      title: "Web Team Members Dashboard",
    }
  }
}
</script>
