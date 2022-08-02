<template>
  <v-app>
    <v-main>
      <BlogList />
    </v-main>
  </v-app>
</template>

<script>
import BlogList from '../../components/amsale/AmsaleBlogList.vue'
export default {
  name: 'Ipage',
  components: { BlogList },
}
</script>
