<template>
  <div class="addblog">
    <AddBlogButton :text="showAddBlog ? 'Close' : 'Add Blog'" :color= "showAddBlog ? 'red' : 'blue'" @toggle-add-blog="toggleAddBlog"/>
    <div v-if="showAddBlog" class="addblogform">
    <AddBlogForm @add-blog="addBlog"/>
    </div>
    <div class="bloglist">
    <BlogList :blogs="blogs" @delete-blog="deleteBlog"/>
    </div>
  </div>
</template>

<script>
import AddBlogForm from '~/components/natnaelT/AddBlogForm.vue';
import AddBlogButton from '~/components/natnaelT/AddBlogButton.vue';
import BlogList from '~/components/natnaelT/BlogList.vue';
export default {
    components: {
    AddBlogButton,
    AddBlogForm,
    BlogList
},
    data() {
        return{
            blogs:[],
            showAddBlog: false
        }
    },
    head() {
        return {
            title: "Blog App",
            meta: [{
                    hid: "description",
                    name: "Blog page",
                    content: "Blog to save thoughts"
                }]
        };
    },
    
    async created(){
            this.blogs = await this.fetchBlog()
        },
    
    methods:{
        async addBlog(blog){
            const res = await fetch('https://blog-app-backend.onrender.com/api/articles/', {
                method: "POST",
                headers:{
                    'Content-type': "application/json"
                },
                body: JSON.stringify(blog)
            })
            const data = await res.json()
            this.blogs = [...this.blogs,data]
        },
        deleteBlog(id){
            this.blogs = this.blogs.filter((blog) => blog.id !== id)
        },
        toggleAddBlog(){
            this.showAddBlog = !this.showAddBlog
        },
        async fetchBlog(){
            const res = await fetch('https://blog-app-backend.onrender.com/api/articles/all')
            const data = await res.json()
            return data
        }
    }
    
}
</script>

<style>

.addblog p{
    font-style: italic;
}

.addblog nuxt-link{
    display: inline-block;
    background: blue;
    color: aliceblue;
    padding: 0.3rem 1rem;
    margin-right: 0.5rem;
}

.btn{
    justify-content: center;
    background: blue;
    padding: 5px 10px;
    color: white;
    display: inline-block;
    margin: 2px;
    border-radius: 10px;

}

</style>