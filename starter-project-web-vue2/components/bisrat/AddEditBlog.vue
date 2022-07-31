<template>
	<div style="margin:auto;max-width:600px !important;padding-bottom:30px">
  <h2><span v-if="blog.id==null">Add Blog</span><span v-if="blog.id!=null">Update Blog</span></h2>
  
  <form>
    <v-text-field
      v-model="blog.title"
	  label="Title"
    ></v-text-field>
    <v-textarea
      v-model="blog.content"
	  label="Content"
	  solo
	  
    ></v-textarea>
	
    <v-btn
      class="mr-4"
      @click="onSubmit"
    >
      submit
    </v-btn>
  </form>
  </div>
</template>

<script>

import { mapActions } from "vuex"

export default {
	name: "AddEditComponent",
	props: ["updateBlog"],
    data(){
        return {
			 blog: {
                id: null,
                title: "",
                content: ""
            },
			titleRules: [v => v.length > 9 || "title is required and must be at least 10 chars"],
			contentRules: [v => v.length > 99 || "content is required and must be at least 100 chars"]
        }
    },
    created(){
        if (this.updateBlog !== undefined){
            this.blog = this.updateBlog
        }
    },
    methods: {
        ...mapActions("bisrat", ["createBlog", "updateBlog"]),
		onSubmit(){
			if(this.blog.id == null){
			  this.createBlog(this.blog);
			} else {
			  this.updateBlog(this.blog);
			} 
		}
    }
}
</script>