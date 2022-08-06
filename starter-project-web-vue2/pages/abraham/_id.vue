<template>
  <div>
    <nuxt-link :to="'/abraham/'">
      <v-btn dark class="success pa-2 mb-2 mx-7 mt-3"
        >Back To Blogs</v-btn
      ></nuxt-link
    >
    <h2>Title: {{ title }}</h2>
    <hr />
    <h4>{{ content }}</h4>
  </div>
</template>

<script>
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
      const res = await this.$axios.get(
        `https://blog-app-backend.onrender.com/api/articles/${this.$route.params.id}`,
        config
      )

      this.content = res.data.content
      this.title = res.data.title
    } catch (err) {}
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
