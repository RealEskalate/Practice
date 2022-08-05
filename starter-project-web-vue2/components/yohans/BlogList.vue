<template>
  <v-container>
    <div v-for="ablog in blogs" :key="ablog.id">
      <BlogItem :blog="ablog"></BlogItem>
    </div>
  </v-container>
</template>
<script>
import BlogItem from './BlogItem.vue'
export default {
  name: 'BlogList',
  components: { BlogItem },

  computed: {
    blogs() {
      return this.$store.state.yohans.blogs
    },
  },

  created() {},
}
</script>
