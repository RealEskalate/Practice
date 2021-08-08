export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  newPost: (state, post) => state.posts.unshift(post),
  removePost (state, id) {
    state.posts = state.posts.filter(post => post.id !== id)
  },
  updatePost (state, updPost) {
    const index = state.posts.findIndex(post => post.id === updPost.id)
    if (index !== -1) {
      state.posts.splice(index, 1, updPost)
    }
  }
}

export const actions = {
  async fetchPosts ({ commit }) {
    const response = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    commit('setPosts', response.data)
  },
  async addPost ({ commit }, { title, body }) {
    const response = await this.$axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      { title, body }
    )
    commit('newPost', response.data)
  },
  async deletePost ({ commit }, id) {
    await this.$axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    commit('removePost', id)
  },
  async updatePost ({ commit }, updPost) {
    const response = await this.$axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updPost.id}`,
      updPost
    )

    commit('updatePost', response.data)
  }
}

export const getters = {
  allPosts: (state) => {
    return state.posts
  }
}
