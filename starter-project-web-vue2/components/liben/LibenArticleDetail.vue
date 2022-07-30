<template>
  <div>
    <v-container>
      <v-row class="float-right" no-gutters>
        <v-col>
          <v-btn icon left text :to="`/liben/articles/${article._id} /edit`">
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn icon @click.stop="dialog = true">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- dialog -->
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="text-h5">
            Are you sure you want to delete this article?
          </v-card-title>

          <v-card-text> Remember this action is irreversible. </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">
              Cancel
            </v-btn>

            <v-btn
              color="green darken-1"
              text
              @click="removeArticle(article._id)"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--  -->
    <h1>{{ article.title }}</h1>
    <v-container>
      <v-row>
        <span>{{ formatTime(article.updatedAt) }}</span>
        <v-spacer></v-spacer>
        <span>by {{ article.authorUserId.fullName }}</span>
      </v-row>
    </v-container>
    <p style="font-size: 22px">{{ article.description }}</p>

    <v-carousel v-if="article.imageUrls.length != 0">
      <v-carousel-item
        v-for="(item, i) in article.imageUrls"
        :key="i"
        :src="item"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <p style="font-size: 22px">{{ article.content }}</p>
  </div>
</template>
<script>
import moment from 'moment'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      dialog: false,
    }
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('liben', ['deleteArticle']),
    formatTime(t) {
      return moment(t).fromNow()
    },
    async removeArticle(id) {
      try {
        await this.deleteArticle(id)
        this.dialog = false
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