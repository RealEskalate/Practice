<template>
  <v-container class="font">
    <v-container class="pa-2 mb-6 mx-7 mt-3">
      <SileshiAddBlog />
    </v-container>

    <v-container v-if="edit_area" class="px-0 black--text">
      <v-subheader class="pb-10"> <h1>Edit Post </h1></v-subheader>
      <v-text-field
        outlined
        :value = "current.title"
        label="Title"
        v-model="blog_title"
      />
      <v-text-field
        outlined
        :value="current.content"
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
                  :to="'/samuel/' + blog._id"
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
              <v-btn left text @click="editArea(blog)" class="grey--text">
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn @click="deleteBlog(blog._id)" left text class="grey--text">
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
import SileshiAddBlog from './SileshiAddBlog.vue'

export default {
    name: "BlogPost",
    data() {
        return {
            current: {},
            edit_area: false,
            blog_title: "",
            blog_content: "",
        };
    },
    computed: { ...mapState("sileshi", ["blogs"]) },
    created() {
        this.fetchBlogs();
    },
    methods: {
        ...mapActions("sileshi", ["fetchBlogs", "deleteBlog", "updateBlog"]),
        editArea(blog) {
            this.edit_area = !this.edit_area;
            this.current = blog;
            this.blog_content = blog.content;
            this.blog_title = blog.title;
            console.log(blog, "this")
        },
        update() {
            this.updateBlog({
                _id: this.current._id,
                body: this.blog_content,
                authorUserId: this.current.authorUserId,
                title: this.blog_title,
            });
        },
    },
    components: { SileshiAddBlog }
}
</script>