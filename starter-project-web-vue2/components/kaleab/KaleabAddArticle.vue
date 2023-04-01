<template>
     <v-row>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="70%"
    >
       <v-card
        class="mx-auto mb-5"
        max-width="100%" 
        elevation="5" >
    <v-card-text>
    <v-form class="px-3">
        <v-text-field v-model="Title" label="Title" />
        <v-textarea v-model="Content" label="Content" />
        <v-textarea v-model="Description" label="Description" />
        <v-spacer></v-spacer>
        <v-row justify="space-between">
          <v-btn class="success mx-0 mt-4 mr-4" color="blue" @click="onSubmit">Save</v-btn>
        <v-btn class="success mx-0 mt-4 mr-4" color="blue" @click="dialog = false">Cancel</v-btn>
        </v-row>
    </v-form>
    </v-card-text>
    <v-spacer></v-spacer>
  </v-card>
     </v-dialog>
     <v-btn
          color="blue"
          @click="dialog = true">
          Add Article
        </v-btn>
     </v-row>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: "AddArticle",
    data(){
        return {
            Title: '',
            Content: '',
            Description: '',
            newArticle: {},
            dialog: false
        }
    },
    methods: {
      ...mapActions('kaleab', ['addArticles']),
      onSubmit(e){
        e.preventDefault()
        this.newArticle = {
          title: this.Title,
          content: this.Content,
          description: this.Description
        }
        this.addArticles(this.newArticle)
        this.Content = ''
        this.Title = ''
        this.Description = ''
        this.dialog = false

      },
    }
}


</script>