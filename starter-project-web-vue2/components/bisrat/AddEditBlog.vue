<template>
  <div style="margin: auto; max-width: 600px !important; padding-bottom: 30px">
    <h2>
      <span v-if="id == null">Add Blog</span><span v-else>Update Blog</span>
    </h2>

    <form>
      <v-text-field v-model="title" label="Title"></v-text-field>
      <v-textarea v-model="content" label="Content" solo></v-textarea>

      <v-btn class="mr-4" @click="onSubmit">
        {{ getButtonText() }}
      </v-btn>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AddEditComponent',
  data() {
    return {
      id: null,
      title: '',
      content: '',
      titleRules: [
        (v) =>
          v.length > 9 || 'title is required and must be at least 10 chars',
      ],
      contentRules: [
        (v) =>
          v.length > 99 || 'content is required and must be at least 100 chars',
      ],
    }
  },
  computed: { ...mapState('bisrat', ['blog']) },
  created() {
    if (this.blog) {
      this.id = this.blog._id
      this.title = this.blog.title
      this.content = this.blog.content
    }
  },
  methods: {
    ...mapActions('bisrat', [
      'setFormOpen',
      'createBlog',
      'updateBlog',
      'setUpdateBlog',
      'formOpen',
    ]),
    clearBlog() {
      this.id = null
      this.title = ''
      this.content = ''
    },
    onSubmit() {
      const newBlog = {
        _id: this.id,
        title: this.title,
        content: this.content,
        description: 'some description',
      }
      if (this.id == null) {
        this.createBlog(newBlog)
      } else {
        this.updateBlog(newBlog)
      }
      this.clearBlog()
      this.setUpdateBlog(null)
      this.setFormOpen(false)
    },
    getButtonText() {
      if (this.id == null) {
        return 'Add'
      }
      return 'Update'
    },
  },
}
</script>
