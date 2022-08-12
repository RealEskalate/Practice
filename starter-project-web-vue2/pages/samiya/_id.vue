<template>
  <div>
    
    <h1>{{blog.title}}</h1>
    <h2>{{blog.description}}</h2>
    <p>{{blog.content}}</p>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
                blog: {}
        }
    },
    computed: {
        ...mapGetters(['oneBlog'])
    },
    async created() {
        if(this.$route.params.id){
           await this.fetchBlog(this.$route.params.id)
           if(this.oneBlog){
            this.blog = this.oneBlog
           }
        }
    },
    methods: {
        ...mapActions(['fetchBlog']),
    },
   }
</script>

