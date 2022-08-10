<template>
  <div>
    <nuxt-link style="text-decoration: none; color: inherit" :to="'/keiredin'">
      <v-btn dark class="white black--text pa-2 mb-2 mt-3">
        <v-icon class="mr-2"> mdi-arrow-left-bold-circle-outline </v-icon>
      </v-btn>
    </nuxt-link>
    <KeiredinBlogDetail :blog="blog" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import KeiredinBlogDetail from '../../../components/keiredin/KeiredinBlogDetail.vue'
export default {
  name: 'DetailPage',
  components: { KeiredinBlogDetail },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('keiredin/fetchBlog', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch blog. #' + params.id,
      })
    }
  },
  computed: {
    ...mapGetters('keiredin', ['blog']),
  },
}
</script>
