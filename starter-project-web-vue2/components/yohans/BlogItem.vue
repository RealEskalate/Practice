<template>
  <v-card class="pa-10 ma-5">
    <v-row>
      <v-col cols="9">
        <nuxt-link style="text-decoration: none" :to="`/yohans/${blog.id}`">{{
          blog.title
        }}</nuxt-link>
        <p>{{ blog.content }}</p>
      </v-col>

      <v-col cols="1">
        <v-btn left text @click="setEdit(blog)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="1">
        <v-btn left text>
          <v-icon @click="() => deleteBlog(blog.id)">mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// do this by prop
import { mapActions } from 'vuex'
export default {
  props: {
    blog: { id: Number, title: String, content: String },
  },

  methods: {
    ...mapActions({
      deleteBlog: 'yohans/deleteBlog',
      setEdit: 'yohans/setEdit',
    }),
  },
}
</script>
