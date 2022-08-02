<template>
  <div>
    <div class="block latestPostBlock">
      <v-container>
        <h2 class="text-center">Latest Blogs</h2>
        <v-row>
          <v-col v-for="blog in allBlogs" :key="blog._id" cols="12" md="4">
            <v-card outlined class="mx-auto">
              <v-card-title>{{ blog.title }}</v-card-title>

              <v-card-subtitle class="pb-0">{{ blog.content }}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>{{ blog.description }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn fab depressed x-small dark color="blue lighten-1">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
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
    </div>

    <!-- <h3>BlogList</h3>
    <div class="blogs">
      <div v-for="blog in allBlogs" :key="blog._id">
        {{ blog.title }}
        <v-btn depressed class="blue lighten-1 white--text">Edit</v-btn>
        <v-btn depressed class="red white--text">Delete</v-btn>
        <v-btn fab depressed small dark color="blue lighten-1">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn fab depressed small dark color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BlogList',
  computed: {
    ...mapGetters('aymen', ['allBlogs']),
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
h3 {
  text-align: center;
}
</style>
