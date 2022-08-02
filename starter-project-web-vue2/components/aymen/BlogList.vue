<template>
  <v-container>
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Latest</span>
        <span>Blogs</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row>
      <v-col v-for="blog in allBlogs" :key="blog._id" cols="12" md="4">
        <v-card outlined class="mx-auto">
          <v-card-title>{{ blog.title }}</v-card-title>

          <v-card-subtitle class="pb-0">{{ blog.content }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{ blog.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text>More</v-btn>
            <v-spacer></v-spacer>
            <v-btn fab depressed x-small dark color="blue lighten-1">
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              fab
              depressed
              x-small
              dark
              color="red"
              @click="deleteBlog(blog._id)"
            >
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BlogList',
  computed: {
    ...mapGetters('aymen', ['allBlogs', 'token']),
  },
  created() {
    this.fetchBlogs()
  },
  methods: {
    ...mapActions('aymen', ['fetchBlogs', 'deleteBlog']),
  },
}
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
