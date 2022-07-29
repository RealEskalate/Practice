<template>
  <form>
    <v-text-field
      v-model="title"
      :error-messages="titleErrors"
      label="Title"
      required
      @input="$v.title.$touch()"
      @blur="$v.title.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="description"
      :error-messages="descriptionErrors"
      label="Description"
      required
      @input="$v.description.$touch()"
      @blur="$v.description.$touch()"
    ></v-text-field>

    <v-textarea
      v-model="content"
      :error-messages="contentErrors"
      label="Content"
      required
      @input="$v.content.$touch()"
      @blur="$v.content.$touch()"
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
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
    title: { required },
    description: { required },
    content: { required },
  },
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
  }),

  computed: {
    titleErrors() {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.required && errors.push('Title is required.')
      return errors
    },
    descriptionErrors() {
      const errors = []
      if (!this.$v.description.$dirty) return errors
      !this.$v.description.required && errors.push('Description is required.')
      return errors
    },
    contentErrors() {
      const errors = []
      if (!this.$v.content.$dirty) return errors
      !this.$v.content.required && errors.push('Content is required.')
      return errors
    },
  },

  methods: {
    submit() {
      this.$v.$touch()
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
      this.$v.$reset()
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