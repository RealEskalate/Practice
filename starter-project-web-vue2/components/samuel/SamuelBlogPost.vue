<template>
  <v-container class="font">
    <v-container class="pa-2 mb-6 mx-7 mt-3">
      <SamuelAddBlog />
    </v-container>
    <v-container v-if="edit_area" class="px-0 black--text">
      <p class="edit-post">Edit Post</p>
      <v-text-field
        outlined
        class="text-black"
        label="Title"
        v-model="blog_title"
      />
      <v-text-field
        outlined
        class="text-black"
        label="Content"
        v-model="blog_content"
      />
      <v-btn @click="update" class="pa-2 mb-2 mx-7 mt-3" dark>Save</v-btn>
    </v-container>

    <v-row
      v-for="blog in blogs"
      :key="blog._id"
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
                  :to="`/samuel/${blog._id}`"
                >
                  <h4>
                    {{ blog.title }}
                  </h4>
                </nuxt-link>
              </v-card-title>
              <v-card-text class="black--text">
                {{ blog.content }}
                <p v-if="blog.authorUserId._id!==user._id" style="color:red">
                <br>
                By: {{ blog.authorUserId.fullName }}
                </p>
                <p v-if="blog.authorUserId._id===user._id" style="color:green">
                <br>
                Posted by You
                <i>{{user.fullName}}</i>
                </p>
              </v-card-text>
            </v-col>
            <v-col cols="1">
              <v-btn v-if="blog.authorUserId._id===user._id" left text @click="editArea(blog)" class="grey--text">
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn v-if="blog.authorUserId._id===user._id" @click="deleteBlog(blog._id)" left text class="grey--text">
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
import SamuelAddBlog from './SamuelAddBlog.vue'
export default {
    name: "BlogPost",
    data() {
        return {
            current: {},
            edit_area: false,
            blog_title: "",
            blog_content: ""
        };
    },
    computed: { ...mapState("samuel", ["blogs", "user"]) },
    created() {
        this.fetchBlogs();
        this.getCuruser();
    },
    methods: {
        ...mapActions("samuel", ["fetchBlogs", "deleteBlog", "updateBlog", "getCuruser"]),
        editArea(blog) {
            this.edit_area = !this.edit_area;
            this.current = blog;
            this.blog_content = blog.content;
            this.blog_title = blog.title;
        },
        update() {
            this.updateBlog({
                _id: this.current._id,
                content: this.blog_content,
                authorUserId: this.current.authorUserId,
                title: this.blog_title,
            });
            this.edit_area = !this.edit_area;
        },
    },
    components: { SamuelAddBlog }
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
