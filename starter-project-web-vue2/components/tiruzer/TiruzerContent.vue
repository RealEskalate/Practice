<template>
  <v-container >
    <v-row>
      <v-col cols="12" sm="4" class="scrollable">
        <Blogs />
      </v-col>
      <v-col cols="12" sm="4" class="inputs">
        <v-row>
          <v-btn v-if="!$auth.loggedIn" to="/abraham/login">Login</v-btn>
        </v-row>
        <v-row v-if="$auth.loggedIn" class="blog-input">
          <v-form @submit="onSubmit">
            <v-container>
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
                <v-btn class="post-button" type="submit" color="blue">Post</v-btn>
              </v-row>

            </v-container>
          </v-form>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import Blogs from '../../components/tiruzer/TiruzerBlogs'


export default {
  data() {
    return {
      title: '',
      description: '',
      content: '',
    }
  },
  components: {
    Blogs,
  },
  methods: {
    ...mapActions("tiruzer", ['addBlog']),
    onSubmit(e) {
        e.preventDefault()
        const blog = {
            title: this.title,
            content: this.content,
            description: this.description
        }
        this.addBlog(blog)
        this.title= ''
        this.description= ''
        this.content= ''
    },   
  }
}
</script>

<style scoped>
.main-input{
    max-height: 100vh;
}

.blog-input{
    top:50px;
    position:sticky;
}

.post-button {
    display: flex;
    justify-content: center;
}


.scrollable {
    max-height: 100vh;
    overflow-y: scroll;
    margin-right: 50px;
}

.inputs {
    margin-left: 70px;
}
</style>