<template>
  <div class="addblog">
    <AddBlogButton
      :text="showAddBlog ? 'Close' : 'Add Blog'"
      :color="showAddBlog ? 'red' : 'blue'"
      @toggle-add-blog="toggleAddBlog()"
    />
    <div v-if="showAddBlog" class="addblogform">
      <AddBlogForm />
    </div>
    <div class="bloglist">
      <BlogList />
    </div>
  </div>
</template>

<script>
import AddBlogForm from '~/components/natnaelT/AddBlogForm.vue'
import AddBlogButton from '~/components/natnaelT/AddBlogButton.vue'
import BlogList from '~/components/natnaelT/BlogList.vue'
export default {
  components: {
    AddBlogButton,
    AddBlogForm,
    BlogList,
  },
  data() {
    return {
      showAddBlog: false,
    }
  },
  head() {
    return {
      title: 'Blog App',
      meta: [
        {
          hid: 'description',
          name: 'Blog page',
          content: 'Blog to save thoughts',
        },
      ],
    }
  },

  methods: {
    toggleAddBlog() {
      this.showAddBlog = !this.showAddBlog
    },
  },
}
</script>

<style>
.addblog p {
  font-style: italic;
}

.addblog nuxt-link {
  display: inline-block;
  background: blue;
  color: aliceblue;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
}

.btn {
  justify-content: center;
  background: lightblue;
  padding: 5px 10px;
  color: black;
  display: inline-block;
  margin: 2px;
  border-radius: 10px;
}
</style>
