<template>
  <v-card class="pa-10 ma-5">
    <v-row>
      <v-col cols="9">
        <nuxt-link style="text-decoration: none" :to="`/yohans/ ${blog.id}`">{{
          blog.title
        }}</nuxt-link>
        <p>{{ blog.content }}</p>
      </v-col>

      <v-col cols="1">
        <v-btn left text>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="1">
        <v-btn left text>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// do this by prop
export default {
  props: {
    blog: { title: String, content: String },
  },
}
</script>
