<template>
  <v-container>
    <v-row justify="center">
      <v-col md="8" cols="12">
        <h1>Create Article</h1>
        <LibenArticleForm @on-submit="createNewArticle" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('liben', ['createArticle']),
    async createNewArticle(articleForm) {
      try {
        await this.createArticle(articleForm)
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