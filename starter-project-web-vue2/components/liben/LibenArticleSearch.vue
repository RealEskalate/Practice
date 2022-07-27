<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="6">
          <v-container>
            <v-text-field
              v-model="message"
              :append-outer-icon="'mdi-magnify'"
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

  computed: {
    icon() {
      return this.icons[this.iconIndex]
    },
  },

  methods: {
    ...mapActions('liben', ['searchArticle']),
    async search() {
      if (this.message) {
        try {
          await this.searchArticle(this.message)
        } catch (e) {
          // error({
          //   statusCode: 503,
          //   message: 'Unable to post comment at this time. Please try agin.',
          // })
        }
      }
    },
    clearMessage() {
      this.message = ''
    },
  },
}
</script>