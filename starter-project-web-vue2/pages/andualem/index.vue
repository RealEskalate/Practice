<template>
  <v-app>
    <v-container>
      <v-container>
        <v-dialog max-width="600px">
          <template #activator="{ on }">
            <v-btn v-on="on"> Add Blog </v-btn>
          </template>

          <v-card>
            <v-card-title> Add a New Blog </v-card-title>
            <v-card-text>
              <v-text-field v-model="blogTitle" label="title" outlined>
              </v-text-field>

              <v-textarea v-model="blogContent" label="content"> </v-textarea>
              <v-btn @click="onSubmit">Add Blog</v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
      <v-container>
        <div v-if="isEdit">
          <v-col cols="12">
            <p class="edit-post">Edit post</p>
            <v-text-field
              :v-model="blogTitle"
              :value="current.title"
              label="Title"
              placeholder="title"
            >
            </v-text-field>
            <v-textarea
              :v-model="blogContent"
              :value="current.content"
              label="content"
              placeholder="content"
            >
            </v-textarea>
            <v-btn @click="update">Save</v-btn>
          </v-col>
        </div>
      </v-container>
      <!-- <v-card> -->

      <v-row v-for="(item, index) in blogs" :key="index">
        <v-col cols="12">
          <v-card color="white">
            <v-row>
              <v-col cols="10">
                <v-card-title>
                  <nuxt-link
                    style="text-decoration: none; color: inherit"
                    :to="'/andualem/' + item._id"
                  >
                    <h1>{{ item.title }}</h1>
                  </nuxt-link>
                </v-card-title>
                <v-card-text>
                  <p>{{ item.content }}</p>
                </v-card-text>
              </v-col>
              <v-btn
                left
                text
                class="grey--text"
                cols="1"
                @click="edit_area(item)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                left
                text
                class="grey--text"
                cols="1"
                @click="deleteBlog(item._id)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-card> -->
  </v-app>
</template>
<script>
import { mapState, mapActions } from 'Vuex'
export default {
  name: 'Index',
  data() {
    return {
      current: {},
      blogTitle: '',
      blogContent: '',
      blogPost: {},
      isEdit: false,
    }
  },
  computed: { ...mapState('andualem', ['blogs']) },
  created() {
    this.fetchBlogs()
  },
  methods: {
    ...mapActions('andualem', [
      'fetchBlogs',
      'updateBlog',
      'addBlog',
      'deleteBlog',
    ]),
    edit_area(blog) {
      this.isEdit = !this.isEdit
      this.current = blog
    },
    update() {
      // e.preventDefault()
      this.isEdit = !this.isEdit

      this.updateBlog({
        id: this.current._id,
        title: this.current.title,
        content: this.current.content,
      })
    },
    onSubmit(e) {
      e.preventDefault()
      this.blogPost = {
        title: this.blogTitle,
        content: this.blogContent,
        description: 'description',
      }
      this.addBlog(this.blogPost)
      this.blogContent = ''
      this.blogTitle = ''
    },
  },
}
</script>
