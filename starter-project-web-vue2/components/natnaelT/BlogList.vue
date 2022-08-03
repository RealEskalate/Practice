<template>
<div>
<div class="singleblog" v-for="blog in allBlogs" :key="blog.id">
    <SingleBlog :blog="blog" @delete-blog="deleteBlog(blog.id)" @update-blog="updateBlog(blog.id)"/>
    
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import SingleBlog from './SingleBlog.vue';

export default {
name:"BlogList",
methods:{
    ...mapActions('natnaelT',['fetchBlogs','deleteBlog','updateBlog']),
},
computed: mapGetters('natnaelT',['allBlogs']),
created(){
    this.fetchBlogs();
},

components:{
    SingleBlog
}
}
</script>
<style>

.btn {
    display: flex;
    padding: 1px; 
    margin: 1px;
    border-radius: 0.5px;
}

.singleblog{
  border: 1px solid;
  border-radius: 6px;
  padding: 10px;
  margin: 15px;
  box-shadow: 1px 1px 4px gray;
}

</style>