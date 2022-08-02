<template>
  <v-container class="font">
    <v-container class="pa-2 mb-6 mx-7 mt-3">
      <AbrahamAddBlog />
    </v-container>
    <v-container v-if="edit_area" class="px-0 black--text">
      <p class="edit-post">Edit Post</p>
      <v-text-field
        v-model="blog_title"
        outlined
        class="text-black"
        :value="current.title"
        label="Title"
      />
      <v-text-field
        v-model="blog_content"
        outlined
        class="text-black"
        :value="current.body"
        label="Content"
      />
      <v-btn class="pa-2 mb-2 mx-7 mt-3" dark @click="update">Save</v-btn>
    </v-container>

    <v-row
      v-for="blog in blogs"
      :key="blog.id"
      dense
      class="pa-5 py-0 mx-auto grey lighten-5 mb-6"
      sm="6"
      md="3"
    >
      <v-col cols="12">
        <v-card color="white">
          <v-row>
            <v-col cols="10">
              <v-card-title class="mx-auto text-center black--text">
                <nuxt-link
                  style="text-decoration: none; color: inherit"
                  :to="'/abraham/' + blog._id"
                >
                  <p>
                    {{ blog.title }}
                  </p>
                </nuxt-link>
              </v-card-title>
              <v-card-text class="black--text">
                {{ blog.content }}
              </v-card-text>
            </v-col>
            <v-col cols="1">
              <v-btn left text class="grey--text" @click="editArea(blog)">
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn left text class="grey--text" @click="deleteBlog(blog.id)">
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AbrahamAddBlog from './AbrahamAddBlog.vue'
export default {
  name: 'BlogPost',
  data() {
    return {
      current: {},
      edit_area: false,
      blog_title: '',
      blog_content: '',
    }
  },
  computed: { ...mapState('abraham', ['blogs']) },
  created() {
    this.fetchBlogs()
  },
  methods: {
    ...mapActions('abraham', ['fetchBlogs', 'deleteBlog', 'updateBlog']),
    editArea(blog) {
      this.edit_area = !this.edit_area
      this.current = blog
    },

    update() {
      this.updateBlog({
        id: this.current.id,
        body: this.blog_content,
        userId: this.current.userId,
        title: this.blog_title,
      })
    },
  },
  components: { AbrahamAddBlog },
}
</script>

<style>
.font {
  font-family: Helvetica, Arial, sans-serif;
}

.text-black input {
  color: black !important;
}

.edit-post {
  margin-left: 2rem;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
