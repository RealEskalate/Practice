<template>
  <div>
    <v-card class="my-4 mx-6" outlined width="330">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://source.unsplash.com/random/300x200?sig=${Math.random()}"
      >
        <v-card-title>{{ blog.title }} </v-card-title>
      </v-img>

      <v-card-subtitle class="pb-4">
        By {{ blog.authorUserId.fullName }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ blog.content }}</div>
      </v-card-text>

      <v-card-actions>
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="`/ruth/${blog._id} `"
        >
          <v-btn color="green" text> View Blog </v-btn>
        </nuxt-link>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" persistent max-width="600px">
          <template #activator="{ on, attrs }">
            <v-btn
              class="ma-2"
              icon
              small
              v-bind="attrs"
              :disabled="!isAuthor"
              color="green"
              v-on="on"
              @click="editArea(blog)"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Edit Blog</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="title"
                      dense
                      label="Title*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="content"
                      dense
                      label="Content*"
                      required
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions class="mx-4 mt-4">
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialog = false">
                Discard
              </v-btn>
              <v-btn color="green darken-1" text @click="updBlog(blog._id)">
                Update Blog
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn
          class="ma-2"
          icon
          small
          :disabled="!isAuthor"
          color="red"
          @click="deleteBlog(blog._id)"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RuthBlog',
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isAuthor: false,
      dialog: false,
      title: '',
      content: '',
      current: {},
    }
  },
  created() {
    if (this.$auth.$state.loggedIn) {
      this.isAuthor = this.blog.authorUserId._id === this.$auth.state.user._id
    }

    this.title = this.blog.title
    this.content = this.blog.content
  },
  methods: {
    ...mapActions('ruth', ['deleteBlog', 'updateBlog', 'fetchBlogs']),
    editArea(blog) {
      this.dialog = !this.dialog
      this.current = blog
    },
    updBlog(id) {
      this.updatedBlog = {
        _id: id,
        content: this.content,
        title: this.title,
        description: 'description',
      }
      this.$store.dispatch('ruth/updateBlog', this.updatedBlog)
      this.dialog = false
      this.fetchBlogs()
    },
  },
}
</script>
