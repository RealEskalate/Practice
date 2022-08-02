<template>
<div>
<div v-for="blog in blogs" :key="blog.id">
    <SingleBlog :blog="blog" @delete-blog="$emit('delete-blog',blog.id)"/>
    <p>
      
    </p>
  </div>
</div>
</template>

<script>
import SingleBlog from './SingleBlog.vue'
export default {
name:"BlogList",
props:{
blogs: Array
},
components:{
    SingleBlog
},
emits: ["delete-blog"]
}
</script>
