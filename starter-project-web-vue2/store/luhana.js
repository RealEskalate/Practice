import axios from 'axios'

export const state = {
  blogs: [],
}
export const actions = {
  async fetchBlogs({ commit }) {
    const response = await axios.get(
      'https://blog-app-backend.onrender.com/api/articles/all'
    )
    commit('setBlogs', response.data)
  },
  async addBlog({ commit }, blogPost) {
    const response = await axios.post(
      'https://blog-app-backend.onrender.com/api/articles',
      blogPost
    )
    commit('newBlog', response.data)
  },
  async deleteBlog({ commit }, id) {
    await axios.delete(
      `https://blog-app-backend.onrender.com/api/articles/${id}`
    )
    commit('removeBlog', id)
  },
}

export const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  newBlog: (state, blog) => state.blogs.unshift(blog),
  removeBlog: (state, id) =>
    (state.blogs = state.blogs.filter((blog) => blog.id !== id)),
}
