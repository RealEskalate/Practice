export const state = {
  blogs: [],
  blog: {},
  loggedIn: false,
}

export const getters = {
  blogs: (state) => state.blogs,
  blog: (state) => state.blog,
  loggedIn: (state) => state.loggedIn,
}

export const actions = {
  checkIfLoggedIn({ commit }, auth) {
    commit('setLoggedIn', auth)
  },
  async fetchBlogs({ commit }) {
    const response = await this.$axios.get('articles/all')
    commit('setBlogs', response.data)
  },

  async fetchBlog({ commit }, id) {
    const response = await this.$axios.get(`articles/${id}`)
    commit('setBlog', response.data)
  },

  async deleteBlog({ commit }, id) {
    const response = await this.$axios.delete(`articles/${id}`)
    commit('DELETE_BLOG', response.data)
  },

  async updateBlog({ commit }, blog) {
    const response = await this.$axios.patch(`articles/${blog._id}`, blog)
    commit('UPDATE_ARTICLE', response.data)
  },

  async addBlog({ commit }, newBlog) {
    // const k = this.$auth.$storage.getLocalStorage('access_token')
    // console.log(k)
    const response = await this.$axios.post('articles', newBlog)
    commit('setNewBlog', response.data)
  },
}

export const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  setBlog: (state, blog) => (state.blog = blog),
  setLoggedIn: (state, loggedIn) => (state.loggedIn = loggedIn),
  setNewBlog: (state, newBlog) => state.blogs.unshift(newBlog),
  DELETE_BLOG: (state, id) => {
    state.blogs = state.blogs.filter((blog) => blog.id !== id)
  },
  UPDATE_BLOG: (state, updatedBlog) => {
    const index = state.blogs.findIndex((blog) => blog.id === updatedBlog.id)
    if (index !== -1) {
      state.articles.splice(index, 1, updatedBlog)
    }
  },
}
