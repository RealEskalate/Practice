// import axios from 'axios'

export const state = {
  blogs: [],
}

export const actions = {
  async fetchBlogs({ commit }) {
    const response = await this.$axios.get(
      'https://blog-app-backend.onrender.com/api/articles/all'
    )

    commit('setBlogs', response.data.reverse())
  },
  async addBlog({ commit }, blogPost) {
    const response = await this.$axios.post(
      'https://blog-app-backend.onrender.com/api/articles',
      blogPost
    )
    commit('newBlog', response.data)
  },
  async updateBlog({ commit }, updBlog) {
    // console.log(updBlog.id)
    const response = await this.$axios.patch(
      `https://blog-app-backend.onrender.com/api/articles/${updBlog.id}`,
      updBlog
    )
    commit('updateBlog', response.data)
  },

  async deleteBlog({ commit }, id) {
    // console.log(id)
    await this.$axios.delete(
      `https://blog-app-backend.onrender.com/api/articles/${id}`
    )
    commit('removeBlog', id)
  },
}

export const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  newBlog: (state, blog) => state.blogs.unshift(blog),
  updateBlog: (state, updBlog) => {
    const index = state.blogs.findIndex((blog) => blog._id === updBlog.id)
    if (index !== -1) {
      state.blogs.splice(index, 1, updBlog)
    }
  },
  removeBlog: (state, id) =>
    (state.blogs = state.blogs.filter((blog) => blog._id !== id)),
}
