import axios from 'axios'

export const state = {
  blogs: [],
}

export const actions = {
  async fetchBlogs({ commit }) {
    const response = await axios.get(
      'https://blog-app-backend.onrender.com/api/articles/all'
    )
    commit('setBlogs', response.data)
  },
  async addBlog({ commit }, blogPost) {
    const response = await this.$axios.post(
      'https://blog-app-backend.onrender.com/api/articles',
      blogPost
    )
    commit('newBlog', response.data)
  },
  async deleteBlog({ commit }, id) {
    const res = await this.$axios.delete(
      `https://blog-app-backend.onrender.com/api/articles/${id}`
    )
    console.log(res.data)
    commit('removeBlog', id)
  },
  async updateBlog({ commit }, currentBlog) {
    const response = await this.$axios.patch(
      `https://blog-app-backend.onrender.com/api/articles/${currentBlog._id}`,
      currentBlog
    )
    console.log(response.data)
    commit('editBlog', response.data)
  },
}

export const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  newBlog: (state, blog) => state.blogs.push(blog),
  removeBlog: (state, id) =>
    (state.blogs = state.blogs.filter((blog) => blog._id !== id)),
  editBlog: (state, currentBlog) => {
    const index = state.blogs.findIndex((blog) => blog._id === currentBlog._id)
    state.blogs.splice(index, 1, currentBlog)
  },
}
export const getters = {
  blogs() {
    return state.blogs
  },
}

// create, update, delete
