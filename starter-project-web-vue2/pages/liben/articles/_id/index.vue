<template>
  <v-container>
    <v-row>
      <v-col md="12">
        <v-row no-gutters>
          <v-col cols="12" md="8">
            <LibenArticleDetail :article="article" />
          </v-col>
          <v-col cols="12" md="4">
            <v-container>
              <LibenCommentForm />
              <v-card max-width="450" class="mx-auto">
                <v-list three-line>
                  <template>
                    <v-subheader>Comments</v-subheader>
                    <LibenArticleComment
                      v-for="comment in comments"
                      :key="comment._id"
                      :comment="comment"
                    />
                  </template>
                </v-list>
              </v-card>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import LibenArticleDetail from '@/components/liben/LibenArticleDetail.vue'
import LibenArticleComment from '@/components/liben/LibenArticleComment.vue'
import LibenCommentForm from '@/components/liben/LibenCommentForm.vue'
export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('liben/getArticle', params.id)
      await store.dispatch('liben/getComments', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch article. #' + params.id,
      })
    }
  },
  computed: mapGetters({
    article: 'liben/article',
    comments: 'liben/comments',
  }),
  components: { LibenArticleDetail, LibenArticleComment, LibenCommentForm },
}
</script>
