<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to delete this article?
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="show = false">
            Cancel
          </v-btn>

          <v-btn color="red darken-1" text @click="removeArticle(id)">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    visible: Boolean,
    title: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      },
    },
  },
  methods: {
    ...mapActions('keiredin', ['deleteBlog']),
    async removeArticle(id) {
      try {
        await this.deleteBlog(id)
        this.show = false
        this.$router.back()
      } catch (e) {
        return this.$nuxt.error({
          statusCode: e.statusCode,
          message: e.message,
        })
      }
    },
  },
}
</script>
