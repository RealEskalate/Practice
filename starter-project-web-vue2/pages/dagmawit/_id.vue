<template>
  <div>
    <nuxt-link to="/dagmawit/">
      <v-btn class="ma-2" color="#1F7087" dark>
        <v-icon dark left> mdi-arrow-left </v-icon>Back
      </v-btn>
    </nuxt-link>
    <br />
    <p></p>
    <h1 align="center">Blog: {{ blog.title }}</h1>

    <v-container
      ><h4>{{ blog.content }}</h4></v-container
    >
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
      },
    }
  },

  async created() {
    try {
      const response = await axios.get(
        `https://blog-app-backend.onrender.com/api/articles/${this.$route.params.id}`
      )
      this.blog = this.response.data
    } catch (err) {
      this.$nuxt.error({
        statusCode: err.statusCode,
        message: err.message,
      })
    }
  },
}
</script>
