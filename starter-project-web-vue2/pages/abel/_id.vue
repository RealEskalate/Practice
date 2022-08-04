<template>
  <v-card class="mx-auto deep-purple" min-height="250" max-width="344">
    <v-card-text>
      <div>{{ fullName }}</div>
      <p class="text-h5 text--primary">{{ title }}</p>
      <div class="text--secondary">{{content}}</div>
    </v-card-text>
    <v-card-actions >
      <v-btn text color="text--white"> Read blog </v-btn>
      <v-btn text color="text--white"> Delete blog </v-btn>
      <v-btn text color="text--white"> Update blog </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SingleBlog',
  props: {
    title: String,
    tag: String,
    content: String,
    fullName: String
  }
}
</script>
