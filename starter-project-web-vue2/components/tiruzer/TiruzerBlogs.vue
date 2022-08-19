<template>
  <div>
    <v-card class="blog-post" v-for="blog in allTiruzerBlogs" :key="blog._id">
      <v-card-title>
        {{ blog.title }}
      </v-card-title>
      <v-card-text>
        {{ blog.description }}
      </v-card-text>
      <v-card-text>
        {{ blog.content }}
      </v-card-text>
      <v-card-action>
        <v-btn>
            <nuxt-link @click="onClick" v-bind:blog="blog" v-bind:to="'/tiruzer/' + blog._id">Read more..</nuxt-link>
        </v-btn>
        <div v-if="$auth.loggedIn && $auth.user._id === blog.authorUserId._id">
          <v-btn icon @click="deleteBlog(blog._id)"
            ><v-icon medium color="red darken-4">mdi-delete</v-icon></v-btn
          >
          <v-dialog width="600">
            <template #activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on"
                ><v-icon medium color="green darken-3">mdi-pencil</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <v-form @submit.prevent="onSubmit(blog)">
                  <v-row cols="12" md="4">
                    <v-text-field
                      v-model="title"
                      label="title"
                      required
                    ></v-text-field>
                  </v-row>

                  <v-row cols="12" md="4">
                    <v-text-field
                      v-model="description"
                      label="description"
                      required
                    ></v-text-field>
                  </v-row>

                  <v-row cols="12" md="4">
                    <v-textarea
                      v-model="content"
                      label="content"
                      required
                    ></v-textarea>
                  </v-row>

                  <v-row>
                    <v-btn class="post-button" type="submit" color="blue"
                      >Edit</v-btn
                    >
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
      </v-card-action>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      title: '',
      description: '',
      content: '',
    }
  },
  name: 'TiruzerBlogs',
  methods: {
    ...mapActions('tiruzer', ['fetchBlogs', 'deleteBlog', 'editBlog', 'setBlogDetail']),
    onSubmit(newBlog) {
      const blog = {
        _id: newBlog._id,
        title: this.title,
        content: this.content,
        description: this.description,
      }
      this.editBlog(blog)
    },
    // onClick(blog) {
    //     this.setBlogDetail(blog)
    // }
  },
  computed: mapGetters('tiruzer', ['allTiruzerBlogs']),
  created() {
    this.fetchBlogs()
  },
}
</script>

<style>
.scrollable {
    overflow-y: scroll;
}

.blog-post {
    margin-bottom: 20px;
}
</style>