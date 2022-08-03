<template>
  <v-dialog max-width="900px">
    <template #activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        <v-icon left> mdi-plus </v-icon>
        Add New Blog</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Blog</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" />
          <v-textarea label="Content" />
          <v-spacer></v-spacer>
          <v-btn class="success mx-0 mt-3">Add Blog</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AddBlog',
}
</script>
