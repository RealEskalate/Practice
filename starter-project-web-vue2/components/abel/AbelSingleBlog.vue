<template>
  <v-card
    class="mx-auto red lighten-4 d-flex flex-column justify-space-between"
    min-height="300"
    max-width="344"
  >
    <v-card-text>
      <div>{{ fullName }}</div>
      <p class="text-h5 text--primary">{{ title }}</p>
      <div class="text--secondary">{{ content }}</div>
      <div class="text--secondary">{{ description }}</div>
    </v-card-text>
    <v-card-actions class="d-flex flex-wrap">
      <nuxt-link :to="'/abel/' + id">
        <v-btn text color="text--white"> Read blog </v-btn></nuxt-link
      >
      <v-btn text color="text--white" @click="deleteBlog(id)">
        Delete blog
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SingleBlog',
  props: {
    title: String,
    description: String,
    content: String,
    id: String,
  },
  methods: {
    ...mapActions('abel', ['deleteBlog']),
  },
}
</script>
