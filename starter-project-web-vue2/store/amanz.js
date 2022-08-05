// eslint-disable-next-line no-unused-vars
import axios from 'axios'

const state = {
  blogs: [],
  blog: {},
}

const getters = {
  allBlogs: (state) => state.blogs,
}

const actions = {
  // eslint-disable-next-line no-unused-vars
  async fetchBlogs({ commit }) {
    const response = await axios.get(
      'https://blog-app-backend.onrender.com/api/articles/all'
    )
    commit('setBlogs', response.data)
  },

  async fetchBlogsById({ commit }, id) {
    const response = await axios.get(
      `https://blog-app-backend.onrender.com/api/articles/${id}`
    )
    commit('setBlog', response.data)
  },

  async addBlog({ commit }, newBlog) {
    const response = await this.$axios.post(
      'https://blog-app-backend.onrender.com/api/articles',
      newBlog
    )
    commit('newBlog', response.data)
  },

  async deleteBlog({ commit }, id) {
    await this.$axios.delete(
      `https://blog-app-backend.onrender.com/api/articles/${id}`
    )

    commit('removeBlog', id)
  },

  async updateBlog({ commit }, updated) {
    const response = await this.$axios.put(
      `https://blog-app-backend.onrender.com/api/articles/${updated.id}`,
      updated
    )
    commit('updateBlog', response.data)
  },
}

const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  newBlog: (state, blog) => state.blogs.unshift(blog),
  setBlog: (state, blog) => (state.blog = blog),
  // newBlog: (state, blog) => state.blogs.unshift(blog),
  removeBlog: (state, id) =>
    (state.blogs = state.blogs.filter((blogg) => blogg._id !== id)),
  // updateBlog: (state, blog) => {
  //   const index = state.blogs.findIndex((blogg) => blogg._id === blog._id)

  // }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
