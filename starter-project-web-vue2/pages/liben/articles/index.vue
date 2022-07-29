<template>
  <div>
    <v-btn to="/liben/articles/create"> Create Article </v-btn>
    <LibenArticleSearch />
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" v-for="article in articles" :key="article.id" md="4">
          <LibenArticle :article="article" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template> 

<script>
import { mapGetters } from 'vuex'
import LibenArticleSearch from '@/components/liben/LibenArticleSearch.vue'
export default {
  components: { LibenArticleSearch },
  async fetch({ store, error }) {
    try {
      await store.dispatch('liben/getArticles')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch articles at this time. Please try agin.',
      })
    }
  },
  computed: mapGetters({
    articles: 'liben/articles',
  }),
}
</script>