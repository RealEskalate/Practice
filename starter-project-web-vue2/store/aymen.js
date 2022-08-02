const state = {
    blogs: [],
    token: ""
}

const getters = {
    allBlogs: (state) => state.blogs,
    token: (state) => state.token
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
    register({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            this.$axios.post("https://blog-app-backend.onrender.com/api/user", userInfo)
                .then((res) => {
                    if (res.status === 201) {
                        resolve(true)
                    }
                    else {
                        reject(res)
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    login({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            this.$axios.post("https://blog-app-backend.onrender.com/api/auth/login", userInfo)
                .then((res) => {
                    if (res.status === 201) {
                        if (!res.data.status) {
                            commit('authToken', res.data)
                            resolve(true)
                        }
                        else {
                            reject(res)
                        }
                    }
                    else {
                        reject(res)
                    }
                })
                .catch(error => {
                    reject(error)
                })

        })
    }
}

const mutations = {
    setBlogs: (state, blogs) => (state.blogs = blogs),
    removeBlog: (state, id) => (state.blogs = state.blogs.filter((blog) => blog._id !== id)),
    authToken: (state, res) => (state.token = res.access_token)
}

export default {
    state,
    getters,
    actions,
    mutations,
}
