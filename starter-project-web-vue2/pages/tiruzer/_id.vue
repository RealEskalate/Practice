<template>
  <TiruzerBlogDetail/>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TiruzerBlogDetail from '../../components/tiruzer/TiruzerBlogDetail.vue'

export default {
  computed: {...mapState('tiruzer', ['blogs','blogDetail'])},
  components: {
    TiruzerBlogDetail
  },
  created() {
    const id = this.$route.params.id
    console.log(this.blogs.length)
    for(const blog of this.blogs){
        console.log(blog)
        if(blog._id === id){
            console.log(blog)
            this.setBlogDetail(blog)
            break
        }
    }
  },
  methods: {
    ...mapActions('tiruzer', ['setBlogDetail'])
  }
}
</script>

