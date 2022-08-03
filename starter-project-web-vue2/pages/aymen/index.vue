<template>
  <div>
    <Header />
    <AddBlog />
    <BlogList />
  </div>
</template>

<script>
import BlogList from '../../components/aymen/BlogList.vue'
import AddBlog from '../../components/aymen/AddBlog.vue'
import Header from '../../components/aymen/Header.vue'

export default {
  name: 'Aymen',
  components: {
    BlogList,
    AddBlog,
    Header
  },
}
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
</style>
