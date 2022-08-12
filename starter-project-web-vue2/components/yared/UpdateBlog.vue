<template>
  <v-dialog max-width="600">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" color="yellow" v-on="on"> Update </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Update Blog</h2>
      </v-card-title>
      <v-form class="px-12">
        <v-text-field
          v-model="currentBlog.title"
          :counter="20"
          label="Title"
          required
        >
        </v-text-field>

        <v-text-field v-model="currentBlog.content" label="Content" required>
        </v-text-field>

        <v-btn color="success" class="ma-4" @click="onUpdate">
          Update Blog
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    blog: Object,
  },
  data() {
    return {
      currentBlog: {
        id: this.blog._id,
        title: this.blog.title,
        content: this.blog.content,
      },
    }
  },
  methods: {
    ...mapActions({
      updateBlog: 'yared/updateBlog',
    }),
    onUpdate(e) {
      this.updateBlog(this.currentBlog)
    },
  },
}
</script>
