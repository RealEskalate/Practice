<template>
  <v-container>
          <div style="display:flex;justify-content:center;padding-bottom:30px">
  
            <v-btn color="primary">
                  Add Blog
            </v-btn>
          </div>
		  
			<div>
				<AddEditComponent />
			</div>
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
              <v-btn text color="green">
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
          formStatus: 0, // 0 - not opened, 1 - update mode, 2 - create mode
          newBlogTitle: "",
        }
    },
    computed: {...mapState("bisrat", ["blogs"])},
    created(){
        this.getBlogs()
    },
    methods: {
        ...mapActions('bisrat', ['getBlogs', 'deleteBlog']),
        onBlogDelete(blog){
          this.deleteBlog(blog);
        } 
    }

    
}
</script>