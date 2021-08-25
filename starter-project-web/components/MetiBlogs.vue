<template>
    <v-container class="black--text">
    <h3 class="title green--text">All Blogs </h3>
    
    
      <v-col 
      
      v-for="post in allPosts"
      :key="post.id"
      cols="12"
      
      >
        <v-card class="todo" color="#FFFFFF" dark nuxt>
          <v-card-title class="postTitle mx-auto text-center black--text p-5">
            <p>
              {{ post.title }}
               
            </p>
            <v-btn v-on:click = "del(post.id)" class="del-btn padding-right: 5px; float:right; position:absolute; top:10px; right:10px;"><v-icon class="red--text">mdi-delete</v-icon></v-btn>
          </v-card-title>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapActions} from 'vuex';

import Vuetify from "vuetify";
export default {
    name:'Blogs',
    data() {
      return {
        title : '',
      }
    },
    computed : {
      ...mapGetters("meti", ["allPosts"])
    },
    methods :{
      del : function(id) {
        this.$store.dispatch("meti/deletePost", id);
        this.title = '';
      }
      
    },
    created() {
      this.$store.dispatch("meti/fetchTodos")
	},
}
</script>

<style scoped>
.del-btn{
  float:right;
  position: absolute;
  top:5px;
  right:10px;
  background-color: rgb(255, 255, 255) !important;

}
</style>