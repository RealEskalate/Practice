import axios from 'axios'

export const state = {
  blogs: [],
}

export const actions = {
  async getBlogs({ commit }) {
    const response = await axios.get(
      'https://blog-app-backend.onrender.com/api/articles/all'
    )
    commit('getBlogs', response.data)
  },

  async deleteBlog({ commit }, id) {
    await this.$axios.delete(
      `https://blog-app-backend.onrender.com/api/articles/${id}`
    )
    commit('deleteBlog', id)
  },

  async addBlog({ commit }, newBlog) {
    const response = await this.$axios.post(
      'https://blog-app-backend.onrender.com/api/articles/',
      newBlog
    )
    commit('addBlogs', response.data)
  },

  async updateBlog({ commit }, updatedBlog) {
    const response = await this.$axios.patch(
      `https://blog-app-backend.onrender.com/api/articles/${updatedBlog._id}`,
      updatedBlog
    )
    commit('updateBlogs', response.data)
  },
}

export const getters = {
  getOneBlog(state) {
    return (id) => {
      return state.blogs.filter((blog) => blog._id === id)[0]
    }
  },

  blogs(state) {
    return state.blogs
  },
}

export const mutations = {
  getBlogs: (state, blogs) => (state.blogs = blogs),
  deleteBlog: (state, id) => {
    state.blogs = state.blogs.filter((blog) => blog._id !== id)
  },
  updateBlogs: (state, newBlog) => {
    const index = state.blogs.findIndex((blog) => blog._id === newBlog._id)
    if (index !== -1) {
      state.blogs.splice(index, 1, newBlog)
    }
  },
  addBlogs: (state, newBlog) => {
    state.blogs.push(newBlog)
  },
}
