<template>
  <v-form>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-container>
            <v-text-field
              v-model="message"
              append-outer-icon="mdi-magnify"
              clear-icon="mdi-close-circle"
              clearable
              label="Search"
              type="text"
              @click:append-outer="search"
              @click:clear="clearMessage"
            ></v-text-field>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    message: '',
  }),

  methods: {
    ...mapActions('liben', ['searchArticle']),
    async search() {
      if (this.message) {
        try {
          await this.searchArticle(this.message)
        } catch (e) {
          return this.$nuxt.error({
            statusCode: e.statusCode,
            message: e.message,
          })
        }
      }
    },
    clearMessage() {
      this.message = ''
    },
  },
}
</script>