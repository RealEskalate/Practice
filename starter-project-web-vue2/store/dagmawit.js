const state = {
  blogPosts: [],
}
const getters = {
  allBlogPosts: (state) => state.blogPosts,
}
const actions = {
  async fetchBlogPosts({ commit }) {
    const response = await this.$axios.get('articles/all')
    commit('setBlogPosts', response.data)
  },
}
const mutations = {
  setBlogPosts: (state, blogPosts) => (state.blogPosts = blogPosts),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
