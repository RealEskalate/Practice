
<template>
 
<v-card>
    <v-container>
      <v-row dense v-bind:key="blogPost.id" v-for="blogPost in blogPosts">
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
             {{blogPost.title}}
            </v-card-title>

            <v-card-subtitle>{{blogPost.content}}</v-card-subtitle>

            <v-card-actions>
              <v-btn text :to="'/singlePage' + blog._id">
                Read More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'BlogPost',
  
  }
</script>





