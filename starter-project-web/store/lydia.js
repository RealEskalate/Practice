export const state = () => ({
  posts: [
  ]
})

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  addPost (state, post) {
    state.posts.push(post)
  },
  editPost (state, post) {
    state.posts = state.posts.filter(item => item.id !== post.id)
    state.posts.push(post)
  },
  deletePost (state, id) {
    state.posts = state.posts.filter(post => post.id !== id)
  }
}

export const actions = {
  async fetchPosts ({ commit }) {
    const response = await this.$axios.get('http://jsonplaceholder.typicode.com/posts?userId=1')
    commit('setPosts', response.data)
  },
  async addPost ({ commit }, content) {
    const post = {
      userId: 1,
      title: 'My new post title',
      body: content
    }
    const response = await this.$axios.post('http://jsonplaceholder.typicode.com/posts/', post)
    commit('addPost', response.data)
  },
  async editPost ({ commit }, post) {
    const response = await this.$axios.put(`http://jsonplaceholder.typicode.com/posts/${post.id}`, post)
    commit('editPost', response.data)
  },
  async deletePost ({ commit }, id) {
    await this.$axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`)
    commit('deletePost', id)
  }
}
