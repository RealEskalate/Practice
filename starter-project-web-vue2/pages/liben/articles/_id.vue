<template>
  <v-container>
    <v-row>
      <v-col md="12">
        <v-row no-gutters>
          <v-col md="8">
            <LibenArticleDetail :article="article" />
          </v-col>
          <v-col md="4">
            <v-container>
              <LibenCommentForm />
              <v-card max-width="450" class="mx-auto">
                <v-list three-line>
                  <template>
                    <v-subheader v-once>Comments</v-subheader>
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
import { mapState } from 'vuex'
import LibenArticleDetail from '@/components/liben/LibenArticleDetail.vue'
import LibenArticleComment from '@/components/liben/LibenArticleComment.vue'
import LibenCommentForm from '@/components/liben/LibenCommentForm.vue'
export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('getArticle', params.id)
      await store.dispatch('getComments', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch article. #' + params.id,
      })
    }
  },
  computed: mapState({
    article: (state) => state.libenBlogs.article,
    comments: (state) => state.libenBlogs.comments,
  }),
  components: { LibenArticleDetail, LibenArticleComment, LibenCommentForm },
}
</script>
