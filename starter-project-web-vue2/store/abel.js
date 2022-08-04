
const state = {
  blogs: [],
}

const getters = {
  allBlogs: (state) => state.blogs,
}

const actions = {
  async fetchBlogs({ commit }) {
    const req = await this.$axios.get(
      'articles/all'
    )
    commit('setBlogs', req.data)
  },
  async addBlog({ commit }, blog) {
    const res = await this.$axios.post('articles/', blog)
    commit('addBlog', res.data)
  },
}

const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  addBlog: (state, blog) => state.blogs.unshift(blog),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
