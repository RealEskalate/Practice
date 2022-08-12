<template>
  <v-container>
    <v-row class="main-row">
      <v-col cols="12" sm="4">
        <form @submit="onSubmit" class="blog-input">
          <v-row class="input-group">
            <v-text-field placeholder="title" v-model="title"></v-text-field>
          </v-row>

          <v-row class="input-group">
            <v-text-field
              placeholder="Description"
              v-model="description"
            ></v-text-field>
          </v-row>

          <v-row class="input-group">
            <v-textarea
              outlined
              placeholder="Detail"
              value=""
              v-model="content"
            ></v-textarea>
          </v-row>
          <v-row class="input-group">
            <v-btn type="submit" rounded color="dark" dark> Post </v-btn>
          </v-row>
        </form>
      </v-col>

      <v-col cols="12" sm="8">
        <div class="login-btn" >
          <v-btn v-if="!$auth.loggedIn" to="/abraham/login">login</v-btn>

        </div>
        <Blogs />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import Blogs from '../../components/samiya/SamiyaBlogs.vue'
export default {
  data() {
    return {
      title: '',
      content: '',
      description: '',
    }
  },
  components: {
    Blogs,
  },

  methods: {
    ...mapActions(['addBlog']),
    onSubmit(e) {
      e.preventDefault()
      const blog = {
        title: this.title,
        content: this.content,
        description: this.description,
      }
      this.addBlog(blog)
    },
  },
}
</script>
<style scope>
.blog-input {
  top: 50px;
  position: sticky;
}

.main-row {
  min-height: 100vh;
}

.login-btn{
  display: flex;
  justify-content: center;

}
</style>
