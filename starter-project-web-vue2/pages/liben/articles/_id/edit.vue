<template>
  <v-container>
    <v-row justify="center">
      <v-col md="8" cols="12">
        <h1>Edit Article</h1>
        <LibenArticleForm :article="article" @on-submit="editArticle" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions('liben', ['updateArticle']),
    async editArticle(articleForm) {
      try {
        await this.updateArticle({ _id: this.article._id, ...articleForm })
        this.$router.back()
      } catch (e) {
        return this.$nuxt.error({
          statusCode: e.statusCode,
          message: e.message,
        })
      }
    },
  },
  async fetch({ store, params, error }) {
    try {
      await store.dispatch('liben/getArticle', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch articles at this time. Please try agin.',
      })
    }
  },
  computed: mapGetters({
    article: 'liben/article',
  }),
}
</script>