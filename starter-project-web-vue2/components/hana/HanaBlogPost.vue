<template>
  <v-card class="my-8 mx-12" max-width="644" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="`/hana/${blog._id} `"
        >
          <v-list-item-title class="text-h5 mb-1">
            {{ blog.title }}
          </v-list-item-title>
        </nuxt-link>
        <v-list-item-subtitle>{{ blog.details }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-list-item-action>
        <EditBlog :blogger="blog" />
      </v-list-item-action>
      <v-btn
        tile
        color="error"
        :disabled="!isAuthor"
        @click="deleteBlog(blog._id)"
      >
        <v-icon center pa-4> mdi-delete </v-icon>
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex'
import EditBlog from './EditBlog.vue'
export default {
  name: 'HanaBlogPost',
  components: { EditBlog },
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isAuthor: true,
    }
  },
  created() {
    this.isAuthor = this.blog.authorUserId._id === this.$auth.$state.user._id
  },
  methods: {
    ...mapActions('hana', ['deleteBlog']),
  },
}
</script>
