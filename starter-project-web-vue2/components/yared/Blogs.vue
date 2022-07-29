<template>
    <div>
        <div class="title">
            <h1>List of Blogs</h1>
        </div>
        <hr>        
        <div v-for="blog in blogs" :key="blog.id">
            <Blog :blog="blog" />
        </div>
        <v-btn
              color="blue"
              fab
              dark
              elevation="10"
              style="position:fixed; bottom:10%; right:5%;"
            >
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
      
    </div>
</template>
<script>
import axios from 'axios'
import Blog from './Blog.vue'
export default {
    name:"Blogs",
    components:{
        Blog
    },
    data(){
        return{
            blogs: []
        }
    },
    methods: {
        async fetchBlogs(){
            const res = await axios.get('https://blog-app-backend.onrender.com/api/articles/all')
            const data = res.data.slice(0,3)
            console.log(data)
            return data
        },
        // async addBlog(newBLog){
        //     const res = await axios.post('https://blog-app-backend.onrender.com/api/articles/all',newBlog)

        // },
    },

    async created(){
        this.blogs = await this.fetchBlogs()
    }
    
}
</script>
<style scoped>
.title{
    width: 100%;
    display:inline-flex;
    margin: 20px 10px;
    align-items: center;
}
</style>