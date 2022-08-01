<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on">
        <v-icon left> mdi-plus </v-icon>
        Add blog
      </v-btn>
    </template>
    <v-card>
      <v-card-title> add blog</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="titleField" label="title"></v-text-field>
          <v-textarea v-model="contentField" label="content"></v-textarea>
          <v-btn
            color="secondary"
            @click="addBlog({ title: titleField, content: contentField })"
          >
            add blog
          </v-btn>
          <v-spacer></v-spacer>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      titleField: '',
      contentField: '',
    }
  },

  methods: {
    ...mapActions({ addBlog: 'yohans/addBlog' }),
  },
}
</script>
