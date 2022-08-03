<template>
  <div class="card">
    <v-card-text>
    <h2>{{blog.title}}</h2>
    <p>{{blog.content}}</p>
    <v-btn class="btn">Update</v-btn>
    <v-btn class="btn" @click="$emit('delete-blog',blog.id)">Delete</v-btn>
    </v-card-text>
    
    <!-- <nuxt-link :to="{ path: '/natnaelT/_id', query:{a:1,b:2}}">Show more</nuxt-link> -->
  </div>
</template>

<script>
export default {
    name: "SingleBlog",
    props: {
        blog: Object
    },
    emits: ["delete-blog"]
}
</script>