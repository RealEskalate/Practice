const state = {
    blogs: [],
}

const getters = {
    allBlogs: (state) => state.blogs,
}

const actions = {
    async fetchBlogs({ commit }) {
        const res = await this.$axios.get(
            'articles/all'
        )
        commit('setBlogs', res.data)
    },
    async deleteBlog({ commit }, id) {
        await this.$axios.delete(
            `articles/all${id}`
        )
        commit('removeBlog', id)
    },
    async register({ commit }, userInfo) {
        try {
            await this.$axios.post("user", userInfo)
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
    }
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
