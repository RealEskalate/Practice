export default {
  namespaced: true,
  state: {
    blogs: [],
    blog: {},
  },
  actions: {
    async fetchBlog({ commit }, id) {
      const res = await this.$axios.get(`articles/${id}`)
      commit('displayBlog', res.data)
    },
    async fetchBlogs({ commit }) {
      const res = await this.$axios.get('articles/all')
      const data = res.data.reverse()
      commit('setBlogs', data)
    },
    async addBlog({ commit }, newBlog) {
      const res = await this.$axios.post('articles', newBlog, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      commit('addBlog', res.data)
    },
    async deleteBlog({ commit }, id) {
      await this.$axios.delete(`articles/${id}`)
      commit('deleteBlog', id)
    },
    async updateBlog({ commit }, updBlog) {
      const res = await this.$axios.patch(`articles/${updBlog.id}`, updBlog)
      commit('updateBlog', res.data)
    },
    async loginUser(_, loginInfo) {
      await this.$auth.loginWith('local', {
        data: loginInfo,
      })
    },
    async registerUser(_, regInfo) {
      await this.$axios.post('user', regInfo)
    },
  },
  mutations: {
    displayBlog: (state, blog) => (state.blog = blog),
    setBlogs: (state, blogs) => (state.blogs = blogs),
    addBlog: (state, blog) => state.blogs.unshift(blog),
    deleteBlog: (state, id) =>
      (state.blogs = state.blogs.filter((blog) => blog._id !== id)),
    updateBlog: (state, updBlog) => {
      const idx = state.blogs.findIndex((blog) => blog.id === updBlog.id)
      if (idx !== -1) {
        console.log('hi')
        state.blogs.splice(idx, 1, updBlog)
      }
    },
  },
}
