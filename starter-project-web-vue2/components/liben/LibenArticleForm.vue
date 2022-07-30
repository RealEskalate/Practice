<template>
  <form ref="form">
    <v-text-field
      v-model="title"
      :rules="titleRules"
      label="Title"
      required
    ></v-text-field>

    <v-text-field
      v-model="description"
      :rules="descriptionRules"
      label="Description"
      required
    ></v-text-field>

    <v-textarea
      v-model="content"
      :rules="contentRules"
      label="Content"
      required
    ></v-textarea>

    <v-text-field
      v-model="categories"
      label="Categories comma separated"
    ></v-text-field>

    <v-btn class="mr-4" @click="submit"> submit </v-btn>
    <v-btn @click="clear"> clear </v-btn>
  </form>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => ({ empty: true }),
    },
  },
  data: () => ({
    title: '',
    description: '',
    content: '',
    categories: '',
    titleRules: [(v) => !!v || 'Title is required'],
    descriptionRules: [(v) => !!v || 'Description is required'],
    contentRules: [(v) => !!v || 'Content is required'],
  }),
  methods: {
    submit() {
      this.$emit('on-submit', {
        title: this.title,
        description: this.description,
        content: this.content,
        categories:
          this.categories &&
          this.categories.split(',').map((item) => item.trim()),
      })
    },
    clear() {
      this.$refs.form.reset()
      this.title = ''
      this.description = ''
      this.content = ''
      this.categories = ''
    },
  },
  created() {
    if (!this.article.empty) {
      this.title = this.article.title
      this.description = this.article.description
      this.content = this.article.content
      this.categories =
        this.article.categories && this.article.categories.join()
    }
  },
}
</script>