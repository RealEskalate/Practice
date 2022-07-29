<template>
  <v-toolbar color="cyan">
    <v-toolbar-title>
      <v-container>
        <v-text-field
          label="Comment..."
          :rules="rules"
          hide-details="auto"
          v-model="comment"
        ></v-text-field>
      </v-container>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="addComment">
      <v-icon> mdi-arrow-up-bold-box-outline</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      rules: [
        (value) => !!value || 'Required.',
        (value) => (value && value.length >= 3) || 'Min 3 characters',
      ],
      comment: '',
    }
  },
  methods: {
    ...mapActions('liben', ['createComment']),
    async addComment() {
      if (this.comment) {
        try {
          await this.createComment({
            id: this.$route.params.id,
            text: this.comment,
          })
          this.comment = ''
        } catch (e) {
          return this.$nuxt.error({
            statusCode: e.statusCode,
            message: e.message,
          })
        }
      }
    },
  },
}
</script>
