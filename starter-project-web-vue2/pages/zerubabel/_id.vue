<template>
  <v-container>
    <v-container v-if="blog != null">
      <v-row>
        <v-btn dark color="primary" class="text-black">
          <nuxt-link to="/zerubabel" class="text-decoration-none">
            <v-icon left> mdi-arrow-left </v-icon>Back
          </nuxt-link>
        </v-btn>
      </v-row>
      <v-row class="pa-6 d-flex flex-column mt-10">
        <v-row class="d-flex flex-column">
          <span class="text-h2 text-black">{{ blog.title }}</span>
          <hr class="mt-5" />
          <h3 class="text-subtitle-1 mt-10">Author: {{ blog.author }}</h3>
        </v-row>
        <v-row>
          <span class="text-subtitle-1 mt-5">Content: {{ blog.content }}</span>
          <p class="mt-10">{{ blog.description }}</p>
        </v-row>
      </v-row>
    </v-container>
    <v-container v-else class="text-center text-h6">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <v-container class="text-grey"> Loading... </v-container>
    </v-container>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: null,
      blog: null,
    }
  },
  computed: {
    ...mapState('zerubabel', ['blogs']),
  },
  created() {
    const path = this.$route.fullPath.split('/')
    this.id = path[path.length - 1]
    this.blogs.forEach((element) => {
      if (element._id === parseInt(this.id)) {
        this.blog = element
      }
    })
  },
}
</script>
