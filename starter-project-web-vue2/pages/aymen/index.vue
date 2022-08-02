<template>
  <v-app>
    <BlogList />
  </v-app>
</template>

<script>
import BlogList from '../../components/aymen/BlogList.vue'

export default {
  name: 'App',
  components: {
    BlogList,
  },
}
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
