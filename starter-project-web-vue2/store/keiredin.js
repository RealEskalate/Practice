import axios from 'axios'

export const state = {
  blogs: [],
  blog: {}
}

export const getters = {
  blogs: state => state.blogs,
  blog: state => state.blog
}

export const actions = {
  async fetchBlogs({ commit }) {
    const response = await axios.get(
      'https://blog-app-backend.onrender.com/api/articles/all'
    )
    commit('setBlogs', response.data)
  },

  async fetchBlog({ commit }, id) {
    const response = await axios.get(
      `https://blog-app-backend.onrender.com/api/articles/${id}`
    )
    commit('setBlog', response.data)
  }
}


export const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  setBlog: (state, blog) => (state.blog = blog)
}
