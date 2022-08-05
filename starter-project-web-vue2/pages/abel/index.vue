<template>
  <v-component>
    <div v-show="showAddBlog">
      <AbelAddBlogVue />
    </div>
    <div class="mb-1">
      <h1>Blogs</h1>
      <AbelButtonVue
        @toggle-task="toggleTask"
        :show="this.showAddBlog"
        :text="!this.showAddBlog ? 'Add Blog' : 'No more'"
      />
    </div>
    <AbelBlogListVue />
  </v-component>
</template>

<script>
import AbelBlogListVue from '~/components/abel/AbelBlogList.vue'
import AbelButtonVue from '~/components/abel/AbelButton.vue'
import AbelAddBlogVue from '~/components/abel/AbelAddBlog.vue'

export default {
  data() {
    return {
      showAddBlog: false,
    }
  },
  components: {
    AbelBlogListVue,
    AbelButtonVue,
    AbelAddBlogVue,
  },
  methods: {
    toggleTask() {
      this.showAddBlog = !this.showAddBlog
    },
  },
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
}
</style>
