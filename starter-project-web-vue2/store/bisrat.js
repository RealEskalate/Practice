export const state = () => {
  return {
    blog: null,
    formOpen: false,
    blogDetail: {
      _id: null,
      title: '',
      content: '',
    },
    blogs: [
      {
        _id: 1,
        title: 'State Management in Vuejs',
        content:
          'jfdskk djkljk; dslkjkjdsf kjljkfdskjlkj dfskjlkjjkfd lkjsjdkjfd l kjdfsjl',
      },
      {
        _id: 2,
        title: 'State Management in Vuejs',
        content:
          'jfdskk djkljk; dslkjkjdsf kjljkfdskjlkj dfskjlkjjkfd lkjsjdkjfd l kjdfsjl',
      },
      {
        _id: 3,
        title: 'State Management in Vuejs',
        content:
          'jfdskk djkljk; dslkjkjdsf kjljkfdskjlkj dfskjlkjjkfd lkjsjdkjfd l kjdfsjl',
      },
    ],
  }
}

export const actions = {
  async getBlogs({ commit }) {
    const response = await this.$axios.get(
      'https://blog-app-backend.onrender.com/api/articles/all'
    )
    // if (response.statusCode === 200)
    commit('getBlogs', response.data)
  },
  async createBlog({ commit }, blog) {
    const response = await this.$axios.post(
      'https://blog-app-backend.onrender.com/api/articles/',
      blog
    )
    commit('createBlog', response.data)
  },
  async updateBlog({ commit }, blog) {
    const response = await this.$axios.patch(
      `https://blog-app-backend.onrender.com/api/articles/${blog._id}/`,
      {
        title: blog.title,
        content: blog.content,
      }
    )
    commit('updateBlog', response.data)
  },
  async deleteBlog({ commit }, blog) {
    await this.$axios.delete(
      `https://blog-app-backend.onrender.com/api/articles/${blog._id}/`
    )
    commit('deleteBlog', blog)
  },
  setBlog({ commit }, blog) {
    commit('setBlog', blog)
  },
  setFormOpen({ commit }, newStat) {
    commit('setFormOpen', newStat)
  },
  setBlogDetail({ commit }, blog) {
    commit('setBlogDetail', blog)
  },
}

export const mutations = {
  getBlogs: (state, blogs) => {
    blogs.reverse()
    state.blogs = blogs
  },
  createBlog: (state, blog) => {
    state.blogs.unshift(blog)
  },
  updateBlog: (state, blog) => {
    for (let index = 0; index < state.blogs.length; index++) {
      if (state.blogs[index]._id === blog._id) {
        state.blogs[index] = blog
      }
    }
  },
  deleteBlog: (state, blog) => {
    let indexOfBlog = -1
    for (let index = 0; index < state.blogs.length; index++) {
      if (state.blogs[index]._id === blog._id) {
        indexOfBlog = index
        break
      }
    }
    if (indexOfBlog !== -1) state.blogs.splice(indexOfBlog, 1)
  },
  setBlog: (state, blog) => {
    state.blog = blog
  },
  setFormOpen: (state, newStat) => {
    state.formOpen = newStat
  },
  setBlogDetail: (state, blog) => {
    state.blogDetail = blog
  },
}
