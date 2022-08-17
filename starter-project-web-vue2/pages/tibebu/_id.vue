<template>
  <div>
    <nuxt-link :to="'/tibebu/'">
      <v-btn dark class="success pa-2 mb-2 mx-7 mt-3"
        >Back To Blogs</v-btn
      ></nuxt-link
    >
    <h2>Title: {{ blog.title }}</h2>
    <hr />
    <h4>{{ blog.content }}</h4>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      content: '',
      title: '',
    }
  },
  computed: { ...mapState('tibebu', ['blog']) },
  created() {
    this.getSingleBlog(this.$route.params.id)
  },
  methods: {
    ...mapActions('tibebu', ['getSingleBlog']),
  },
}
</script>

<style>
h2 {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15pt;
  margin-top: 25px;
  margin-bottom: 20px;
}

h4 {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12pt;
  margin-top: 25px;
}
</style>
