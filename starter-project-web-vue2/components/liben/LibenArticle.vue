<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
    style="margin: 12px"
    :to="`/liben/articles/${article._id}`"
  >
    <v-card-title>{{ article.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="calculateRating(article.rating)"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
          style="padding-left: 8px"
        ></v-rating>

        <div class="grey--text ms-4" style="padding-left: 8px">
          by {{ article.authorUserId.fullName }}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1" style="margin-top: 8px">
        {{ formatTime(article.updatedAt) }}
      </div>

      <div>
        {{ article.description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tags</v-card-title>

    <v-card-text>
      <v-chip-group v-if="article.categories" column>
        <v-chip v-for="(cat, index) in article.categories" :key="index">{{
          cat
        }}</v-chip>
      </v-chip-group>
      <v-card-text v-else>No tags</v-card-text>
    </v-card-text>
  </v-card>
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
    calculateRating(obj) {
      const values = Object.values(obj)
      const size = Object.keys(obj).length
      const sum = values.reduce((accumulator, value) => {
        return accumulator + value
      }, 0)
      return sum / size
    },
    formatTime(t) {
      return moment(t).fromNow()
    },
  },
}
</script>
