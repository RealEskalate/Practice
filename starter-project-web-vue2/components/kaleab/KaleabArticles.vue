<template>
<v-container>
  <v-row class='mb-5' align="center">
    <v-row >
      <v-hover v-if="$auth.loggedIn">
      <AddArticle/>
    </v-hover>
    <div v-if="$auth.loggedIn">
    <v-btn color='blue' @click="$auth.logOut">
      Log Out
    </v-btn>
    </div>
    <v-row v-if="!$auth.loggedIn" class="mb-5">
      <v-btn class='mr-2' to="/abraham/login">Log In</v-btn> 
      <v-btn class='ml-2' to="/abraham/Sign Up">Sign Up</v-btn>
    </v-row>
    
    </v-row>
  
  </v-row>
  <v-dialog 
  v-model='dialog' 
  class="mt-5"
  persistent 
  max-width="60%">
      <v-card
        class="mx-auto mb-5"
        max-width="100%" 
        elevation="5" >
        <v-form class="px-3">
        <v-text-field v-model="Title" label="Title" />
        <v-textarea v-model="Content" label="Content" />
        <v-textarea v-model="Description" label="Description" />
        <v-spacer></v-spacer>
        <v-row justify="space-between">
          <v-btn class="success mx-0 mb-4 mr-4 ml-4" color="blue" @click="update()">Save</v-btn>
        <v-btn class="success mx-0 mb-4 mr-4 " color="blue" @click="dialog = false">Cancel</v-btn>
        </v-row>
    </v-form>
      </v-card>

  </v-dialog>
  
  <v-card
    v-for="article in allArticles"
    :key="article.id"
    class="mx-auto mb-5 mt-5"
    max-width="80%" 
    elevation="5" 
  >
    <v-img
      :src="article.imageUrls[0]"
      height="200px"
    ></v-img>

    <v-card-title>
    <nuxt-link
    style="text-decoration: none; color: inherit"
    :to="'/kaleab/' + article._id"
  >
    <p>
      {{ article.title }}
    </p>
  </nuxt-link>
    </v-card-title>

    <v-card-subtitle>
      {{article.content}}
    </v-card-subtitle>
    <v-spacer></v-spacer>
    <v-card-action v-if="$auth.loggedIn">
     <v-row>
      <v-btn 
      class="ml-5"
      depressed
      @click="edit(article)"
      >
      <v-icon >
        mdi-pencil
      </v-icon>
    </v-btn>
    <v-spacer></v-spacer>
       <v-btn 
       class="mr-5"
      depressed
      @click="deleteArticles(article._id)"
      
    >
      <v-icon >
        mdi-delete
      </v-icon>
    </v-btn>
     </v-row>
    </v-card-action>
  
    
  </v-card>
  
</v-container>
  
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import AddArticle from './KaleabAddArticle.vue'

export default {
    name: "Articles",
    components: {
      AddArticle
    },
    data(){
      return {
        Title: '',
        Content: '',
        Description: '',
        dialog: false,
        updateId: '',        show:false,

      }
    },
    computed: mapGetters("kaleab",["allArticles"]),
      created(){
        this.fetchArticles();
    },
    methods: {
        ...mapActions("kaleab",["fetchArticles", "deleteArticles","updateArticles"]),
        edit(editArticle){
          this.dialog = !this.dialog
          this.updateId = editArticle._id
          this.Title = editArticle.title
          this.Content = editArticle.content
          this.Description = editArticle.description

        },
        update(){
          this.dialog = !this.dialog
          this.updateArticles(
            {
            _id: this.updateId,
            title: this.Title,
            content: this.Content,
            description: this.Description
          }
          )
        },
 
    },
    

}
</script>
