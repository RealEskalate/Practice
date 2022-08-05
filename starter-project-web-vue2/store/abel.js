const state = {
  blogs: [],
}

const getters = {
  allBlogs: (state) => state.blogs,
}

const actions = {
  async fetchBlogs({ commit }) {
    const req = await this.$axios.get('articles/all')
    commit('setBlogs', req.data)
  },
  async addBlog({ commit }, blog) {
    const res = await this.$axios.post('articles/', blog)
    commit('addBlog', res.data)
  },
  async deleteBlog({ commit }, id) {
    await this.$axios.delete(`articles/${id}`)
    commit('removeBlog', id)
  },
  async updateBlog({ commit }, updatedBlog) {
    const req = await this.$axios.put(`articles/${updatedBlog.id}`, updatedBlog)
    commit('updateBlog', req.data)
  },
}

const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  addBlog: (state, blog) => state.blogs.unshift(blog),
  removeBlog: (state, id) =>
    (state.blogs = state.blogs.filter((blog) => blog.id !== id)),
  updateBlog: (state, uptBlog) => {
    const index = state.blogs.findIndex((blog) => blog.id === uptBlog.id)
    if (index !== -1) {
      state.blogs.splice(index, 1, uptBlog)
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
