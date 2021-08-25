export const state = () => ({
  posts:[]
})

export const getters = {
  getAllPosts: state => state.posts
}

export const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  addPost: (state, post) => (state.posts.unshift(post)),
  removePost(state, id) { state.posts = state.posts.filter(post => post.id !== id) },
  updatePost(state, updatedPost) {
    const index = state.posts.filter(post => post.id === updatedPost.id)
    if (index !== -1) {
      state.posts[index] = updatedPost
    }
  }
}

export const actions = {
  async fetchPosts({ commit }) {
    const response = await this.$axios.get('https://jsonplaceholder.typicode.com/posts')
    commit('setPosts', response.data)
  },
  async addNewPost({ commit }, newPost) {
    const response = await this.$axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      newPost
    )
    commit('addPost', response.data)
  },
  async deletePost({ commit }, id) {
    console.log("delete method")
    await this.$axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)

    commit('removePost', id)
  },
  async updatePost({ commit }, updatedPost) {
    const response = await this.$axios.put(`https://jsonplaceholder.typicode.com/posts${id}`,
      updatedPost)
    commit('updatePost', response.data)
  }
}
