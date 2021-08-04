import axios from 'axios'

export const state = () => ({
  posts: [
  ]
})

export const mutations = {
  addPost (state, post) {
    state.posts.push(post)
  },
  setPosts (state, posts) {
    state.posts = posts
  }
}

export const actions = {
  addPost ({ commit }, content) {
    const post = {
      user_id: 1,
      title: 'My new post title',
      body: content
    }
    commit('addPost', post)
  },
  async fetchPosts ({ commit }) {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts?userId=1')
    commit('setPosts', response.data)
  }
}
