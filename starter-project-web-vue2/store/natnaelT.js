const state = {
  blogs: [],
}
const getters = {
  allBlogs: (state) => state.blogs,
}
const actions = {
  async fetchBlogs({ commit }) {
    const response = await this.$axios.get('articles/all')
    commit('setBlogs', response.data)
  },
  async addBlog({ commit }, blog) {
    const response = await this.$axios.post('articles/', blog)
    commit('newBlog', response.data)
  },
  async deleteBlog({ commit }, id) {
    await this.$axios.delete(`articles/${id}`)
    commit('removeBlog', id)
  },
  async updateBlog({ commit }, id) {
    await this.$axios.patch(`articles/${id}`)
  },
}
const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  newBlog: (state, blog) => state.blogs.unshift(blog),
  removeBlog: (state, id) =>
    (state.blogs = state.blogs.filter((todo) => todo.id !== id)),
}
export default {
  state,
  getters,
  actions,
  mutations,
}
