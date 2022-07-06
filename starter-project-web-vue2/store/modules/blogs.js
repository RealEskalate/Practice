import axios from 'axios'

const state = {
  blogs: [],
}

const getters = {
  allBlogs: (state) => state.blogs,
}

const actions = {
  async fetchBlogs({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    commit('setBlogs', response.data)
  },
  async addBlog({ commit }, blogPost) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts/',
      blogPost
    )
    commit('newBlog', response.data)
  },
  async deleteBlog({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    commit('removeBlog', id)
  },
  async filterBlogs({ commit }, e) {
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    )
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    )
    commit('setBlogs', response.data)
  },

  async updateBlog({ commit }, updBlog) {
    console.log(updBlog)
    const response = await this.$axios.put(
      `https://jsonplaceholder.typicode.com/posts/${updBlog.id}`,
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
  getters,
  actions,
  mutations,
}
