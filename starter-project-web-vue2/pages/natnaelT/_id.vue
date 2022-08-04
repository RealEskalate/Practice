<template>
  <div>
    <nuxt-link to="/natnaelT/">
      <v-btn class="ma-2" color="#1F7087" dark>
        <v-icon dark left> mdi-arrow-left </v-icon>Back
      </v-btn>
    </nuxt-link>
    <v-card>
      <h2>{{ blog.title }}</h2>
      <v-container>
        <p>{{ blog.content }}</p>
      </v-container>
    </v-card>
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
      this.blog = response.data
    } catch (err) {
      this.$nuxt.error({
        statusCode: err.statusCode,
        message: err.message,
      })
    }
  },
}
</script>
