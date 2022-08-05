<template>
  <v-container>
    <div style="display: flex; justify-content: center; padding-bottom: 30px">
<<<<<<< Updated upstream
      <v-btn v-if="!loggedIn" color="primary" @click="onAddButtonClick"> Add Blog </v-btn>
	  <div v-else>
		<nuxt-link
          style="text-decoration: none; color: inherit"
          :to="'/abraham/login/'"
        >
		<v-btn color="primary" > Login to make CRUD </v-btn>
	</nuxt-link>
	</div>
	</div>
	
=======
      <v-btn v-if="!loggedIn" color="primary" @click="onAddButtonClick">
        Add Blog
      </v-btn>
      <div v-else>
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="'/abraham/login/'"
        >
          <v-btn color="primary"> Login to make CRUD </v-btn>
        </nuxt-link>
      </div>
    </div>
>>>>>>> Stashed changes

    <div v-if="formOpen">
      <AddEditComponent />
    </div>
    <v-card
      v-for="blog in blogs"
      :key="blog._id"
      color="#385F73"
      dark
      class="mb-6"
    >
      <v-card-title class="text-h5">
        {{ blog.title }}
      </v-card-title>

      <v-card-subtitle>
        {{ `${blog.content.substring(0, 10)}...` }}
      </v-card-subtitle>

      <v-card-actions>
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="'/bisrat/blogs/' + blog._id"
        >
          <v-btn text> More </v-btn>
        </nuxt-link>
<<<<<<< Updated upstream
		<div v-if="isOwner(blog)">
			<v-btn text color="green" @click="onBlogUpdate(blog)"> Update </v-btn>
			<v-btn text color="red" @click="onBlogDelete(blog)"> Delete </v-btn>
		</div>
=======
        <div v-if="isOwner(blog)">
          <v-btn text color="green" @click="onBlogUpdate(blog)"> Update </v-btn>
          <v-btn text color="red" @click="onBlogDelete(blog)"> Delete </v-btn>
        </div>
>>>>>>> Stashed changes
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AddEditComponent from './AddEditBlog.vue'

export default {
  name: 'BlogList',
  components: { AddEditComponent },
  data() {
    return {
      newBlogTitle: '',
<<<<<<< Updated upstream
	  loggedIn: false,
=======
      loggedIn: false,
>>>>>>> Stashed changes
    }
  },
  computed: { ...mapState('bisrat', ['blogs', 'formOpen']) },
  async created() {
    await this.getBlogs()
<<<<<<< Updated upstream
	this.loggedIn = super.$auth && super.$auth.loggedIn;
=======
    this.loggedIn = super.$auth && super.$auth.loggedIn
>>>>>>> Stashed changes
  },
  methods: {
    ...mapActions('bisrat', [
      'getBlogs',
      'deleteBlog',
      'setBlog',
      'setFormOpen',
    ]),
<<<<<<< Updated upstream
	
	isOwner(blog){
		return this.$auth.user && this.$auth.user.email===blog.authorUserId.email;
	},
	
=======

    isOwner(blog) {
      return (
        this.$auth.user && this.$auth.user.email === blog.authorUserId.email
      )
    },

>>>>>>> Stashed changes
    onBlogDelete(blog) {
      this.deleteBlog(blog)
    },
    onBlogUpdate(blog) {
      this.setBlog(blog)
      this.setFormOpen(true)
    },
    onAddButtonClick() {
      this.setFormOpen(!this.formOpen)
      this.setBlog(null)
    },
  },
}
</script>
