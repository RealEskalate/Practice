<template>
<div class="blog">
      <v-card
    :to="'/yared/blogs/' + blog._id"
    class="mx-auto"
    max-width="400"
    nuxt
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{blog.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      ID: {{blog._id}}
    </v-card-subtitle>
   <v-card-actions>
      <v-btn
        color="yellow"
      >
        Update
      </v-btn>
      <v-btn
      style="position:absolute; right:0%;"
      class="mx-2"
      fab
      dark
      small
      color="red"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
    </v-card-actions>
  </v-card>
</div>
    
</template>

<script>
export default {
    name: "Blog",
    props:{
        blog: Object,
    }
    
}
</script>

<style scoped>
.blog{
    display: grid;
    margin:20px;
}
</style>