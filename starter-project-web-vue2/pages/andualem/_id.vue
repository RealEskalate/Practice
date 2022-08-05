<template>
  <div>
    <nuxt-link style="text-decoration: none" :to="'/andualem/'">
      <v-btn class="success">Back to Blogs</v-btn>
    </nuxt-link>
    <h2>Title: {{ title }}</h2>
    <hr />
    <h4>{{ content }}</h4>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      content: '',
      title: '',
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    try {
      const res = await axios.get(
        `https://blog-app-backend.onrender.com/api/articles/${this.$route.params.id}`,
        config
      )
      console.log(res)
      this.content = res.data.content
      this.title = res.data.title
    } catch (err) {
      console.log(err)
    }
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
