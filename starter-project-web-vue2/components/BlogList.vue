<template>
  <v-container>
    <div v-for="ablog in blogs" :key="ablog.id">
      <BlogItem :blog="ablog"></BlogItem>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      blogs: [
        { id: 1, title: 'a', content: 'content of a' },
        { id: 2, title: 'b', content: 'content of b' },
        { id: 3, title: 'c', content: 'content of c' },
        { id: 4, title: 'd', content: 'content of d' },
      ],
    }
  },
}
</script>
