import axios from 'axios'

export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts: (state, posts) => { state.posts = posts },
  addPost: (state, post) => state.posts.unshift(post),
  removePost: (state, id) => {
    state.posts = state.posts.filter(post => post.id !== id)
  }

}
export const actions = {
  async fetchPosts ({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    commit('setPosts', response.data)
  },
  async addPost ({ commit }, { title, body }) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
    commit('addPost', response.data)
  },
  async deletePost ({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    commit('removePost', id)
  }
}

export const getters = {
  allPosts: (state) => {
    return state.posts
  }
}