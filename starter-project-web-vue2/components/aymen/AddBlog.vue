<template>
  <v-container>
    <v-dialog max-width="600px">
      <template #activator="{ on, attrs }">
        <v-btn class="success" dark v-bind="attrs" v-on="on">
          Add new blog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>Add a New Blog</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field v-model="blogInfo.title" label="Title" prepend-icon="mdi-folder"></v-text-field>
            <v-text-field v-model="blogInfo.content" label="Content"></v-text-field>
            <v-textare v-model="blogInfo.description" label="Description"></v-textare>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'AddBlog',
  data() {
    return {
      blogInfo: {
        title: "",
        content: "",
        description: ""
      }
    }
  }
}
</script>
