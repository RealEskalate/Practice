<template>
  <div>
    <h1>{{ blog.title }}</h1>
    <hr />
    <div class="text-justify pa-4">
      <p>{{ blog.content }}</p>
    </div>
    <small>Created at: {{ blog.createdAt }}</small>
    <br />
    <v-btn absolute style="right: 9%" to="/yared" elevation="2" nuxt
      >Go Back</v-btn
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BlogDetail',
  async fetch({ store, params }) {
    try {
      const response = await store.dispatch('yared/fetchBlog', params.id)
      this.blog = response.data
    } catch (e) {
      // error()
    }
  },
  computed: {
    ...mapState('yared', ['blog']),
  },
}
</script>
