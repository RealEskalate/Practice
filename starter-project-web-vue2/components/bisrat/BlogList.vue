<template>
  <v-container>
          <div style="display:flex;justify-content:center;padding-bottom:30px">
  
            <v-btn color="primary" @click="onAddButtonClick">
                  Add Blog
            </v-btn>
          </div>
		  
			<div v-if="formOpen">
				<AddEditComponent />
			</div>
          <v-card
            v-for="blog in blogs"
            :key="blog._id"
            color="#385F73"
            dark
            class="mb-6"
			
          >
            <v-card-title class="text-h5">
              {{ blog.title }}
            </v-card-title>

            <v-card-subtitle> {{ blog.content.substring(0, 10) + " ... " }} </v-card-subtitle>

            <v-card-actions>
			  <nuxt-link
                  style="text-decoration: none; color: inherit"
                  :to="'/bisrat/blogs/' + blog._id"
                >
              <v-btn text>
                More
              </v-btn>
			  </nuxt-link>
              <v-btn text color="green" @click="onBlogUpdate(blog)">
                Update
              </v-btn>
              <v-btn text color="red" @click="onBlogDelete(blog)">
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
    </v-container>
</template>

<script>

import { mapActions, mapState } from 'vuex';
import AddEditComponent from './AddEditBlog.vue';


export default {
    name: "BlogList",
	components: {AddEditComponent},
    data(){
        return {
          newBlogTitle: ""
        }
    },
    computed: {...mapState("bisrat", ["blogs", "formOpen"])},
    created(){
        this.getBlogs()
    },
    methods: {
        ...mapActions('bisrat', ['getBlogs', 'deleteBlog', 'setBlog', 'setFormOpen']),
        onBlogDelete(blog){
          this.deleteBlog(blog);
        },
		onBlogUpdate(blog){
		  this.setBlog(blog)
		  this.setFormOpen(true)
        },
		onAddButtonClick(){
			this.setFormOpen(!this.formOpen)
			this.setBlog(null)
		}
    }

    
}
</script>