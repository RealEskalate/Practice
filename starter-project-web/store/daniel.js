import axios from 'axios'

const state = {
  albums: [

  ]
}

const getters = {
  allAlbums: state => state.albums
}

const actions = {
  async fetchalbums ({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    commit('setalbums', response.data)
  },
  async addAlbum ({ commit }, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/albums', title)
    console.log(response)
    commit('newalbum', response.data)
  },
  async deletealbum ({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
    commit('removealbum', 'id')
  }

}

const mutations = {
  setalbums: (state, albums) => (state.albums = albums),
  newalbum: (state, album) => state.albums.unshift(album),
  removealbum: (state, id) => state.albums.filter(album => album.id !== id)
}

export default {
  state, getters, actions, mutations
}
