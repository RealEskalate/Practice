export default {
  namespaced: true,
  state: {
    blogs: [],
  },
  actions: {
   
    async fetchBlogs({ commit }) {
      const res = await this.$axios.get(
        'https://blog-app-backend.onrender.com/api/articles/all'
      )
      const data = res.data.reverse()
      commit('setBlog', data)
    },
    async addBlog({ commit }, newBlog) {
      const res = await this.$axios.post(
        'https://blog-app-backend.onrender.com/api/articles',
        newBlog
      )
      commit('addBlog', res.data)
    },
    async deleteBlog({ commit }, id) {
      await this.$axios.delete(
        `https://blog-app-backend.onrender.com/api/articles/${id}`
      )
      commit('deleteBlog', id)
    },
    async updateBlog({ commit }, updBlog) {
      const res = await this.$axios.patch(
        `https://blog-app-backend.onrender.com/api/articles/${updBlog.id}`,
        updBlog
      )
      commit('updateBlog', res.data)
    },
  },
  mutations: {
    displayBlog: (state, blog) => (blog),
    setBlog: (state, blogs) => (state.blogs = blogs),
    addBlog: (state, blog) => state.blogs.unshift(blog),
    deleteBlog: (state, id) =>
      (state.blogs = state.blogs.filter((blog) => blog._id !== id)),
    updateBlog: (state, updBlog) => {
        const index = state.blogs.findIndex((blog) => blog.id === updBlog.id)

        if (index !== -1) {
          state.blogs.splice(index, 1, updBlog)
        }
    },
  },
}
