<template>
  <v-card>
    <v-app-bar
      app
      class="purple"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-toolbar-title class="white--text">
        {{ title }}
      </v-toolbar-title>
    </v-app-bar>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      title: 'Web Team Members Dashboard'
    }
  }
}
</script>
