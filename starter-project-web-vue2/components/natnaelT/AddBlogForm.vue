<template>
  <form class="add-form" @submit="onSubmit">
    <div class="form-control">
      <label>Title</label>
      <input v-model="title" type="text" name="content" placeholder="Blog Title here..." />
    </div>
    <div class="form-control">
      <label>Content</label>
      <input
        v-model="content"
        type="text"
        name="content"
        placeholder="Write here..."
      />
    </div>
    <input type="submit" value="Save Blog" class="btn" />
  </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'AddBlogForm',
  
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    ...mapActions('natnaelT',['addBlog']),

    onSubmit(e) {
      e.preventDefault()
      if (!this.title) {
        alert('Please add a blog')
        return
      }
      const newBlog = {
        title: this.title,
        content: this.content
      }
      this.addBlog(newBlog)
      this.title = ''
      this.content = ''
    },
  },
}
</script>

<style scoped>

.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

</style>