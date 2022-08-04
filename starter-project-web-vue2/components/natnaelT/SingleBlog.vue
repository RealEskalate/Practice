<template>
  <div class="card">
    <v-card-text>
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.content }}</p>
      <v-btn class="btn" @click="$emit('update-blog', blog.id)">Update</v-btn>
      <v-btn class="btn" @click="$emit('delete-blog', blog.id)">Delete</v-btn>
      <nuxt-link style="text-decoration: none" :to="'/natnaelT/' + blog._id">
        <v-btn> Show more </v-btn>
      </nuxt-link>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'SingleBlog',
  props: {
    blog: Object,
  },
  emits: ['delete-blog', 'update-blog'],
}
</script>
