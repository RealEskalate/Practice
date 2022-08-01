
<template>
 
<v-card>
    <v-container>
      <v-row dense v-bind:key="blogPost.id" v-for="blogPost in allBlogPosts">
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
             {{blogPost.title}}
            </v-card-title>

            <v-card-subtitle>{{blogPost.content}}</v-card-subtitle>

            <!-- <v-card-actions>
              <v-btn text :to="'/dagmawit/' + blog._id">
                Read More
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
  export default {
    name: 'BlogPost',
    methods:{
      ...mapActions('dagmawit',['fetchBlogPosts'])
      

    },
    computed: mapGetters('dagmawit',["allBlogPosts"]),
    created(){
      this.fetchBlogPosts()
    }
  
  };
</script>





