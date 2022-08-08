<template>
  <div>
    <nuxt-link style="text-decoration: none; color: inherit" :to="'/keiredin'">
      <v-btn dark class="white black--text pa-2 mb-2 mt-3">
        <v-icon class="mr-2"> mdi-arrow-left-bold-circle-outline </v-icon>
      </v-btn>
    </nuxt-link>
    <h1>Edit Blog</h1>
    <KeiredinBlogEdit :blog="blog" @on-submit="editBlog" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import KeiredinBlogEdit from '../../../components/keiredin/KeiredinBlogEdit.vue'

export default {
  name: 'EditPage',
  components: { KeiredinBlogEdit },

  async fetch({ store, params, error }) {
    try {
      await store.dispatch('keiredin/fetchBlog', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch articles at this time. Please try agin.',
      })
    }
  },

  computed: {
    ...mapGetters('keiredin', ['blog']),
  },
  methods: {
    ...mapActions('keiredin', ['updateBlog']),
    async editBlog(blogEditForm) {
      try {
        await this.updateBlog({ _id: this.blog._id, ...blogEditForm })
        this.$router.back()
      } catch (e) {
        return this.$nuxt.error({
          statusCode: e.statusCode,
          message: e.message,
        })
      }
    },
  },
}
</script>
