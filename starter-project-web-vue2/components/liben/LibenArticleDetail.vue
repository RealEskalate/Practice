<template>
  <div>
    <v-container>
      <v-row class="float-right" no-gutters>
        <v-col>
          <v-btn icon left text :to="`/liben/articles/${article._id}/edit`">
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
    <LibenDialog
      :id="article._id"
      :title="article.title"
      :visible="dialog"
      @close="dialog = false"
    />
    <h1>{{ article.title }}</h1>
    <v-container>
      <v-row>
        <span>{{ formatTime(article.updatedAt) }}</span>
        <v-spacer></v-spacer>
        <span>by {{ article.authorUserId.fullName }}</span>
      </v-row>
    </v-container>
    <p style="font-size: 22px">{{ article.description }}</p>

    <v-carousel v-if="article.imageUrls && article.imageUrls.length != 0">
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
import LibenDialog from './LibenDialog.vue'
export default {
  components: { LibenDialog },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    formatTime(t) {
      return moment(t).fromNow()
    },
  },
}
</script>
