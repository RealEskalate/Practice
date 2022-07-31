<template>
  <v-container>
          <v-card
            v-for="blog in blogs"
            :key="blog.id"
            color="#385F73"
            dark
            class="mb-6"
          >
            <v-card-title class="text-h5">
              {{ blog.title }}
            </v-card-title>

            <v-card-subtitle> {{ blog.content.substring(0, 10) + " ... " }} </v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                More
              </v-btn>
            </v-card-actions>
          </v-card>
    </v-container>
</template>

<script>

import { mapActions, mapState } from 'vuex';


export default {
    name: "BlogList",
    data(){
        return {

        }
    },
    computed: {...mapState("bisrat", ["blogs"])},
    created(){
        this.getBlogs()
    },
    methods: {
        ...mapActions('abraham', ['getBlogs', 'createBlog', 'deleteBlog', 'updateBlog'])
    }

    
}
</script>