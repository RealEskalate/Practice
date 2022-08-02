
<template>
  <v-card max-width="900" class="mx-auto">
    <v-container>
      <h1 align="center">Blog Posts</h1>
      <v-row dense v-bind:key="blogPost.id" v-for="blogPost in allBlogPosts">
        <v-col cols="12">
          <v-card color="#1F7087" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  {{ blogPost.title }}
                </v-card-title>

                <v-card-subtitle>{{ blogPost.content }}</v-card-subtitle>
                <nuxt-link :to="'/dagmawit/' + blogPost._id">
                  <v-card-actions>
                    <v-btn text class="grey--text"> Read More </v-btn>
                  </v-card-actions>
                </nuxt-link>
              </div>
              <div>
                <v-btn text class="grey--text">
                  <v-icon> mdi-pencil </v-icon>
                </v-btn>

                <v-btn text class="grey--text">
                  <v-icon> mdi-delete </v-icon>
                </v-btn>
              </div>
            </div>

            <!-- <v-card-actions>
              <v-btn text :to="'/dagmawit/' + blog._id"> Read More </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BlogPost',
  methods: {
    ...mapActions('dagmawit', ['fetchBlogPosts']),
  },
  computed: mapGetters('dagmawit', ['allBlogPosts']),
  created() {
    this.fetchBlogPosts()
  },
}
</script>








