const state = () => ({
    blog: {},
    blogs: [],
    blogDetail: {title:'NOTITLELLTELET'}
})

const getters = {
    allTiruzerBlogs: state => state.blogs,
}

const actions = {
    setBlogDetail({ commit }, blog) {
        commit('setBlogDetail', blog)
    },

    async editBlog({ commit }, blog) {
        const response = await this.$axios.patch(`https://blog-app-backend.onrender.com/api/articles/${blog._id}`, blog)
        commit('editBlog', response.data)
    },

    async deleteBlog({ commit }, id) {
        await this.$axios.delete(`https://blog-app-backend.onrender.com/api/articles/${id}`)
        commit('deleteBlog', id)
    },

    async addBlog({ commit }, blog) {
        const response = await this.$axios.post(
            'https://blog-app-backend.onrender.com/api/articles/',
            blog
        )
        commit('newBlog', response.data)
    },

    async fetchBlogs({commit}) {
        const response = await this.$axios.get(
            'https://blog-app-backend.onrender.com/api/articles/all'
        )
        commit('setBlogs', response.data)
    }
}

const mutations = {
    setBlogs: (state, blogs) => (state.blogs = blogs),
    newBlog: (state, blog) => (state.blogs.unshift(blog)),
    deleteBlog: (state, id) => (state.blogs = state.blogs.filter(blog => blog._id !== id)),
    editBlog: (state, newBlog) => {
        const index = state.blogs.findIndex(blog => blog._id === newBlog._id);
        if(index !== -1){
            state.blogs.splice(index, 1, newBlog)
        }
    },
    setBlogDetail: (state, blog) => (state.blogDetail = blog)
}

export default {
    state,
    getters,
    actions,
    mutations,
}