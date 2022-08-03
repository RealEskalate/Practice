<template>
  <v-card class="mx-auto ma-8" max-width="544" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="`/hana/${blog._id} `"
        >
          <v-list-item-title class="text-h5 mb-1">
            {{ blog.title }} <small>{{ blog._id }}</small>
          </v-list-item-title>
        </nuxt-link>
        <v-list-item-subtitle>{{ blog.details }}</v-list-item-subtitle>
        <v-list-item-subtitle>By:{{ blog.author }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn tile color="success">
        <v-icon center pa-4> mdi-pencil </v-icon>
        Edit
      </v-btn>
      <v-btn tile color="error">
        <v-icon center pa-4> mdi-delete </v-icon>
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'HanaBlogPost',
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>
