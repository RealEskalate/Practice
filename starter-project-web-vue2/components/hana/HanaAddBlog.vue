<template>
  <v-row justify="left pa-9">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on, attrs }">
        <v-btn color="red" dark v-bind="attrs" v-on="on"> Add Blog </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add New Blog</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="Title"
                  label="Title*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="Content"
                  label="Blog post*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false"> Close </v-btn>
          <v-btn color="green darken-1" text @click="onSubmit"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HanaAddBlog',
  data: () => ({
    dialog: false,
    Title: '',
    Content: '',
  }),

  methods: {
    ...mapActions('hana', ['addBlog']),
    onSubmit(e) {
      e.preventDefault()
      this.blogPost = {
        title: this.Title,
        content: this.Content,
        description: 'description',
      }
      this.addBlog(this.blogPost)
      this.dialog = false
    },
  },
}
</script>
