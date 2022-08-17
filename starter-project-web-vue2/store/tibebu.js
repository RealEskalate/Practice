const state = {
  blogs: [],
  blog: {},
}

const getters = {
  allBlogs: (state) => state.blogs,
}

const actions = {
  async updateBlog({ commit }, updBlog) {
    console.log(updBlog)
    const res = await this.$axios.patch(`articles/${updBlog._id}`, updBlog)
    commit('editBlog', res.data)
  },
  async addBlog({ commit }, blogPost) {
    // console.log(blogPost)
    const res = await this.$axios.post('articles', blogPost)
    commit('newBlog', res.data)
  },
  async getSingleBlog({ commit }, id) {
    const res = await this.$axios.get(`articles/${id}`)
    // console.log(res.data)
    commit('setSingleBlog', res.data)
  },
  async fetchBlogs({ commit }) {
    const res = await this.$axios.get('articles/all')
    commit('setBlogs', res.data)
  },
  async deleteBlog({ commit }, id) {
    await this.$axios.delete(`articles/${id}`)
    commit('removeBlog', id)
  },
  async register({ commit }, userInfo) {
    try {
      await this.$axios.post('user', userInfo)
      return true
    } catch (error) {
      return false
    }
  },
  async login({ commit }, userInfo) {
    try {
      const res = await this.$auth.loginWith('local', { data: userInfo })
      if (res.data.status && res.data.status === 401) {
        return false
      } else {
        return true
      }
    } catch (error) {
      return false
    }
  },
}

const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  removeBlog: (state, id) =>
    (state.blogs = state.blogs.filter((blog) => blog._id !== id)),
  setSingleBlog: (state, blog) => (state.blog = blog),
  newBlog: (state, blog) => state.blogs.unshift(blog),
  editBlog: (state, updBlog) => {
    const index = state.blogs.findIndex((blog) => blog._id === updBlog._id)
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
