const state = {
  blogs: [],
}
const actions = {
  async fetchBlogs({ commit }) {
    const response = await this.$axios.get('articles/all')
    commit('setBlogs', response.data)
  },
  async deleteBlog({ commit }, id) {
    await this.$axios.delete(`articles/${id}`)
    commit('deletedBlog', id)
    window.location.reload()
  },
  async addBlog({ commit }, blog) {
    const response = await this.$axios.post('articles', blog)
    commit('newBlog', response.data)
  },
  async editBlog({ commit }, { blog, id }) {
    const response = await this.$axios.patch(`articles/${id}`, blog)
    commit('editBlog', response.data)
  },
}
const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  deletedBlog: (state, id) =>
    (state.blogs = state.blogs.filter((blog) => blog.id !== id)),
  newBlog: (state, blog) => state.blogs.unshift(blog),
  editBlog: (state, editedblog) => {
    const index = state.blogs.findIndex((blog) => blog._id === editedblog._id)

    if (index !== -1) {
      state.blogs.splice(index, 1, editedblog)
    }
  },
}
export default {
  state,
  actions,
  mutations,
}
