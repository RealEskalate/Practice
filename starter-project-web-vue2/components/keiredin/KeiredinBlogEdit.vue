<template>
  <form ref="form">
    <h1>{{ blog.title }}</h1>
    <v-text-field v-model="title" label="Title" required></v-text-field>

    <v-text-field
      v-model="description"
      label="Description"
      required
    ></v-text-field>

    <v-textarea v-model="content" label="Content" required></v-textarea>

    <v-btn class="mr-4" @click="submit"> submit </v-btn>
  </form>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      title: '',
      description: '',
      content: '',
      formData: {},
    }
  },

  created() {
    if (!this.blog.empty) {
      this.title = this.blog.title
      this.description = this.blog.description
      this.content = this.blog.content
    }
  },

  methods: {
    submit() {
      this.formData = {
        title: this.title,
        description: this.description,
        content: this.content,
      }
      this.$emit('on-submit', this.formData)
    },
  },
}
</script>
