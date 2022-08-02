const state = {
    blogs: [],
}

const getters = {
    allBlogs: (state) => state.blogs,
}

const actions = {
    async fetchBlogs({ commit }) {
        const res = await this.$axios.get(
            'https://blog-app-backend.onrender.com/api/articles/all'
        )
        commit('setBlogs', res.data)
    },
    async deleteBlog({ commit }, id) {
        await this.$axios.delete(
            `https://blog-app-backend.onrender.com/api/articles/all${id}`
        )
        commit('removeBlog', id)
    },
    async register({ commit }, userInfo) {
        try {
            await this.$axios.post("https://blog-app-backend.onrender.com/api/user", userInfo)
            return true
        } catch (error) {
            return false
        }
    },
}

const mutations = {
    setBlogs: (state, blogs) => (state.blogs = blogs),
    removeBlog: (state, id) => (state.blogs = state.blogs.filter((blog) => blog._id !== id)),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
