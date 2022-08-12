const state = () => ({
  samiya: {
    blog: {},
    blogs: [],
  },
})

const getters = {
  allSamiyaBlogs: (state) => state.samiya.blogs,
  oneBlog: (state) => state.samiya.blog
}

const actions = {
  async fetchBlogs({ commit }) {
    const response = await this.$axios.get(
      'https://blog-app-backend.onrender.com/api/articles/all'
    )

    commit('setBlogs', response.data)
  },

  async fetchBlog({ commit }, id) {
    const response = await this.$axios.get(
      `https://blog-app-backend.onrender.com/api/articles/${id}`
    )

    commit('setBlog', response.data)
  },

  async deleteBlog({ commit }, id) {
    console.log("delete", id)
    await this.$axios.delete(
      `https://blog-app-backend.onrender.com/api/articles/${id}`
    )
    commit('deleteBlog', id)
   
  },
 

  async addBlog({ commit }, blog) {
    try {
      const response = await this.$axios.post(
        'https://blog-app-backend.onrender.com/api/articles',
        blog
      )

      commit('newBlog', response.data)
    } catch (e) {
      console.log(e.message)
    }
  },
  async updateBlog({commit}, blog){
    try {
      const response = await this.$axios.patch(
        `https://blog-app-backend.onrender.com/api/articles/${blog._id}`,
        blog
      )
      console.log(response.data.authorUserId);
      commit('editBlog', response.data)
    } catch (e) {
      console.log(e.message)
    }
  }
}

const mutations = {
  setBlogs: (state, blogs) => (state.samiya.blogs = blogs),
  newBlog: (state, blog) => state.samiya.blogs.unshift(blog),
  deleteBlog: (state, id) =>
    (state.samiya.blogs = state.samiya.blogs.filter(blog => blog._id !== id)),
  editBlog: (state, upBlog) => {
    const index = state.samiya.blogs.findIndex(blog => blog._id === upBlog._id);
    if(index !== -1){
      state.samiya.blogs.splice(index, 1, upBlog);
    }
  },
  setBlog: (state, blog) =>(state.samiya.blog = blog)
  }

export default {
  state,
  getters,
  actions,
  mutations,
}
