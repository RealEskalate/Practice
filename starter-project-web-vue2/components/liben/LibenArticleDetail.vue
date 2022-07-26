<template>
  <div>
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
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatTime(t) {
      return moment(t).fromNow()
    },
  },
}
</script>