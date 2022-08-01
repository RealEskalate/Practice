<template>
<div>
    <v-dialog
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
              v-bind="attrs"
              v-on="on"
              color="blue"
              fab
              dark
              elevation="10"
              style="position:fixed; bottom:10%; right:5%;"
            >
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
      </template>
      <v-card>
        <v-card-title>
            <h2>Add a New Blog</h2>
        </v-card-title>
        <v-form
    class= "px-12"
    lazy-validation
  >
    <v-text-field
      v-model="title"
      :counter="20"
      label="Title"
      required
    ></v-text-field>

    <v-text-field
      v-model="content"
      label="Content"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="ma-4"
      @click="onSubmit"
    >
      Add Blog
    </v-btn>
    </v-form>
    </v-card>
    </v-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"AddBlog",
    data(){
        return{
            title:"",
            content:"",
            description: "this is a sample description",
        }

    },
    methods:{
        ...mapActions({
          addBlog : 'yared/addBlog'
        }),
        onSubmit(e){
            e.preventDefault()
            const newBlog = {
                title: this.title,
                content: this.content,
                description: this.description
            }
            this.addBlog(newBlog)
            this.title= ""
            this.content = ""
            
        }
    }
}
</script>