import axios from 'axios'
// state
const state = () => ({
  posts: []
})
// getters
const getters = {
  allPosts: state => state.posts
}

// actions
const actions = {
  async getPosts ({ commit }) {
    const posts = await axios.get('http://jsonplaceholder.typicode.com/posts')
    commit('setPosts', posts.data)
  },
  async addPost ({ commit }, post) {
    const newPost = await axios.post('http://jsonplaceholder.typicode.com/posts', post)
    commit('newPost', newPost.data)
  },
  async deletePost ({ commit }, id) {
    await axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`)
    commit('removePost', id)
  }
}
// mutations
const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  newPost: (state, post) => (state.posts.unshift(post)),
  removePost: (state, id) => (state.posts = state.posts.filter(post => post.id !== id))
}

export default {
  state,
  getters,
  actions,
  mutations
}
