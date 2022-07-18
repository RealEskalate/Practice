import axios from 'axios'

const state = {
  blogs: [],
}
const actions = {
  async fetchBlogs({ commit }) {
    const response = await axios.get(
      'https://blog-app-backend.onrender.com/api/articles/all'
    )
    commit('setBlogs', response.data)
  },
  async addBlog({ commit }, blogPost) {
    const response = await axios.post(
      'https://blog-app-backend.onrender.com/api/articles',
      blogPost
    )
    commit('newBlog', response.data)
  },
  async deleteBlog({ commit }, id) {
    console.log(id)
    await axios.delete(
      `https://blog-app-backend.onrender.com/api/articles/${id}`
    )
    commit('removeBlog', id)
  },
  async updateBlog({ commit }, updBlog) {
    console.log(updBlog)
    const response = await this.$axios.put(
      `https://blog-app-backend.onrender.com/api/articles/${updBlog.id}`,
      updBlog
    )
    commit('updateBlog', response.data)
  },
}

const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  newBlog: (state, blog) => state.blogs.unshift(blog),
  removeBlog: (state, id) =>
    (state.blogs = state.blogs.filter((blog) => blog.id !== id)),
  updateBlog: (state, updBlog) => {
    const index = state.blogs.findIndex((blog) => blog.id === updBlog.id)

    if (index !== -1) {
      state.blogs.splice(index, 1, updBlog)
    }
  },
}

export default {
  state,
  actions,
  mutations,
}
