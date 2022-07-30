<template>
  <div class="addblog">
    <AddBlogButton :text="showAddBlog ? 'Close' : 'Add Blog'" :color= "showAddBlog ? 'red' : 'blue'" @toggle-add-blog="toggleAddBlog"/>
    <div v-if="showAddBlog">
    <AddBlogForm @add-blog="addBlog"/>
    </div>
    <h1>Test Blog Page</h1>
    <p>This is where the content of the blog would go! List of all the blogs.</p>
    <BlogList :blogs="blogs" @delete-blog="deleteBlog"/>
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
            showAddBlog: true
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
    
    created(){
            this.blogs = [{
                id: 1,
                title: "Blog test one",
                content: "This is the content of the test Blog one"
            },
            {
                id: 2,
                title: "Blog test two",
                content: "This is the content of the test Blog two"
            },
            {
                id: 3,
                title: "Blog test three",
                content: "This is the content of the test Blog three"
            },
            {
                id: 4,
                title: "Blog test four",
                content: "This is the content of the test Blog four"
            }]
        },
    
    methods:{
        addBlog(blog){
            this.blogs = [...this.blogs,blog]
        },
        deleteBlog(id){
            this.blogs = this.blogs.filter((blog) => blog.id !== id)
        },
        toggleAddBlog(){
            this.showAddBlog = !this.showAddBlog
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
    background: blue;
    padding: 5px 10px;
    color: white;
    display: inline-block;
    margin: 2px;
    border-radius: 10px;

}

</style>