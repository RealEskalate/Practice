<template>
  <div>
    <h1>{{ blog }}</h1>
    <hr />
    <div class="description">
      <p>{{ blog.content }}</p>
    </div>
    <small>Created at: {{ date }}</small>
    <br />
    <v-btn absolute style="right: 9%" to="/yared" elevation="2" nuxt
      >Go Back</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  data() {
    return {
      blog: {},
      date: this.giveDate(),
    }
  },
  async mounted() {
        const res = await this.$axios.get(
        `https://blog-app-backend.onrender.com/api/articles/${this.$route.params.id}`
        )
        this.blog = res.data
  },
  methods: {
    giveDate() {
      return Date(this.blog)
    },
  },
}
</script>
<style scoped>
.description {
  margin: 20px 30px;
}
</style>
