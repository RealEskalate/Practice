<template>
  <div class="mt-5 mb-5 mr-4">
    <v-row align="end" justify="space-around">
      <v-spacer></v-spacer>
      <v-btn v-if="isAuthor" tile color="success" @click="show = !show">
        <v-icon left> mdi-pencil </v-icon>
        Edit
      </v-btn>
    </v-row>
    <v-expand-transition>
      <div v-show="show" class="mt-5">
        <v-card class="editform">
          <v-card-title> Edit Blog </v-card-title>

          <form>
            <v-text-field
              v-model="updatedBlog.title"
              label="Title"
              :placeholder="blog.title"
            ></v-text-field>
            <v-textarea
              v-model="updatedBlog.content"
              label="Content"
            ></v-textarea>

            <v-btn class="mr-4" @click="onSave()"> save </v-btn>
            <v-btn> clear </v-btn>
          </form>
        </v-card>
        <v-snackbar v-model="snackbar" color="green">
          Edited

          <template #action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    snackbar: false,
    show: false,
    updatedBlog: {},
  }),
  computed: {
    isAuthor() {
      return this.$auth.loggedIn && this.blog.authorUserId
        ? this.blog.authorUserId._id === this.$auth.user._id
        : 'loading'
    },
  },

  created() {
    this.updatedBlog.title = this.blog.title
    this.updatedBlog.content = this.blog.content
  },
  methods: {
    ...mapActions('amsale', ['editBlog']),
    onSave() {
      this.editBlog({ blog: this.updatedBlog, id: this.blog._id })
      this.snackbar = true
      window.location.reload()
      this.show = false
    },
  },
}
</script>
<style scoped>
.editform {
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
}
</style>
