<template>
  <v-card
    class="mx-auto red lighten-4 d-flex flex-column justify-space-between"
    min-height="300"
    max-width="344"
  >
    <v-card-text>
      <div>
        {{
          blog.authorUserId.fullName !== null
            ? blog.authorUserId.fullName
            : 'Unknown'
        }}
      </div>
      <p class="text-h5 text--primary">{{ blog.title }}</p>
      <div class="text--secondary">{{ blog.content }}</div>
      <div class="text--secondary">{{ blog.description }}</div>
    </v-card-text>
    <v-card-actions class="d-flex flex-wrap">
      <nuxt-link :to="'/abel/' + blog._id">
        <v-btn text color="text--white"> Read blog </v-btn></nuxt-link
      >
      <v-btn text color="text--white" @click="deleteBlog(blog._id)">
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
    blog: Object,
  },
  methods: {
    ...mapActions('abel', ['deleteBlog']),
  },
}
</script>
