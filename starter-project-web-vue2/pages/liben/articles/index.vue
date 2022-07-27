<template>
  <div>
    <LibenArticleSearch />
    <v-container>
      <v-row no-gutters>
        <v-col v-for="blog in blogs" :key="blog.id" cols="4">
          <LibenArticle :blog="blog" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template> 

<script>
import { mapState } from 'vuex'
import LibenArticleSearch from '~/components/liben/LibenArticleSearch.vue'
export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch('getArticles')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch articles at this time. Please try agin.',
      })
    }
  },
  computed: mapState({
    blogs: (state) => state.libenBlogs.articles,
  }),
  components: { LibenArticleSearch },
}
</script>