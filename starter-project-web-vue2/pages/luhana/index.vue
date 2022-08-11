<template>
  <v-app>
    <v-main>
      <BlogList />
    </v-main>
  </v-app>
</template>

<script>
import BlogList from '../../components/luhana/LuhanaBlogList.vue'

export default {
  name: 'IndexPage',
  components: {
    BlogList,
  },
}
</script>
