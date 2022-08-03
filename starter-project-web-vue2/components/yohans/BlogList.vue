<template>
  <div>
    <EditBlog v-if="editComponenet"></EditBlog>
    <div v-for="ablog in blogs" :key="ablog.id">
      <BlogItem :blog="ablog"></BlogItem>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import BlogItem from './BlogItem.vue'
import EditBlog from './EditBlog.vue'
export default {
  name: 'BlogList',
  components: { BlogItem, EditBlog },

  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      blogs: 'yohans/blogs',
      editComponenet: 'yohans/editComponenet',
      currentBlog: 'yohans/currentBlog',
    }),

    ...mapState({
      editComponenet: (state) => state.yohans.editComponenet,
      currentBlog: (state) => state.yohans.currentBlog,
    }),
  },
}
</script>
