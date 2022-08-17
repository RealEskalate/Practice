<template>
  <div>
    <div v-show="$auth.user._id == blog.authorUserId._id">
      <UpdateBlog :blog="blog" />
      <v-btn
        style="position: absolute; right: 5%"
        class="mx-2"
        fab
        dark
        small
        color="red"
        @click="removeBlog(blog._id)"
      >
        <v-icon dark> mdi-minus </v-icon>
      </v-btn>
    </div>
    <h1>{{ blog.title }}</h1>
    <hr />
    <div class="text-justify pa-4">
      <p>{{ blog.content }}</p>
      <div
        v-for="(img, idx) in blog.imageUrls"
        :key="idx"
        class="d-inline pa-3"
      >
        <img :src="img" width="300px" />
      </div>
    </div>
    <small>Created at: {{ blog.createdAt }}</small>
    <br />
    <v-btn absolute style="right: 9%" to="/yared" elevation="2" nuxt
      >Go Back</v-btn
    >
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'BlogDetail',
  async fetch({ store, params }) {
    try {
      const response = await store.dispatch('yared/fetchBlog', params.id)
      this.blog = response.data
    } catch (e) {
      // this.$nuxt.error({
      //   statusCode: e.statusCode,
      //   message: e.message,
      // })
    }
  },
  computed: {
    ...mapState('yared', ['blog']),
  },
  methods: {
    ...mapActions({
      deleteBlog: 'yared/deleteBlog',
    }),
    removeBlog(id) {
      if (confirm('Are you sure?')) {
        this.deleteBlog(id)
        this.$router.back()
      }
    },
  },
}
</script>
