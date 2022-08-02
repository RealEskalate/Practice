<template>
  <form ref="form">
    <v-text-field
      v-model="formData.title"
      :rules="reqRules"
      label="Title"
      required
    ></v-text-field>

    <v-text-field
      v-model="formData.description"
      :rules="reqRules"
      label="Description"
      required
    ></v-text-field>

    <v-textarea
      v-model="formData.content"
      :rules="reqRules"
      label="Content"
      required
    ></v-textarea>

    <v-text-field
      v-model="formData.categories"
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
  data() {
    return {
      formData: { title: '', description: '', content: '', categories: '' },
      reqRules: [(v) => !!v || 'This field is required'],
    }
  },
  created() {
    if (!this.article.empty) {
      this.formData.title = this.article.title
      this.formData.description = this.article.description
      this.formData.content = this.article.content
      this.formData.categories =
        this.article.categories && this.article.categories.join()
    }
  },
  methods: {
    submit() {
      this.formData.categories =
        this.formData.categories &&
        this.formData.categories.split(',').map((item) => item.trim())
      this.$emit('on-submit', this.formData)
    },
    clear() {
      this.$refs.form.reset()
      this.formData.title = ''
      this.formData.description = ''
      this.formData.content = ''
      this.formData.categories = ''
    },
  },
}
</script>
