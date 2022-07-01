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
      <AddBlog />
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
import AddBlog from './AddBlog.vue'
export default {
  name: 'NavigationBar',
  data() {
    return {
      title: 'The Blog Posts Website',
    }
  },
  components: { AddBlog },
}
</script>

<style scoped>
.font {
  font-family: Helvetica, Arial, sans-serif;
  padding-top: 4rem;
}
</style>
