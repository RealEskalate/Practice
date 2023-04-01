import axios from 'axios'
const state = {
  blogs: [],
}
// const getters = {
//     allBlogs: (state) => state.blogs
// }
const actions = {
  async fetchBlogs({ commit }) {
    const response = await axios.get(
      'https://blog-app-backend.onrender.com/api/articles/all'
    )

    commit('setBlogs', response.data)
  },
  async addBlog({ commit }, updatedB) {
    const response = await this.$axios.post(
      'https://blog-app-backend.onrender.com/api/articles',
      updatedB
    )

    commit('newBlog', response.data)
  },
  async deleteBlog({ commit }, id) {
    await this.$axios.delete(
      `https://blog-app-backend.onrender.com/api/articles/${id}`
    )

    commit('removeBlog', id)
  },
  async editBlog({ commit }, updated) {
    const response = await this.$axios.put(
      `https://blog-app-backend.onrender.com/api/articles/${updated.id}`,
      updated
    )
    commit('editBlog', response.data)
  },
}
const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  newBlog: (state, blog) => state.blogs.unshift(blog),
  removeBlog: (state, id) =>
    (state.blogs = state.blogs.filter((blog) => blog._id !== id)),
  // editBlog: (state, updatedB) => {
  //   const index = state.blogs.findIndex((blog) => blog._id === updatedB.id)

  //   if (index !== -1) {
  //     state.blogs.splice(index, 1, updatedB)
  //   }
  // },
}

export default {
  state,
  // getters,
  actions,

  mutations,
}
