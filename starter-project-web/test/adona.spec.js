// import { mutations } from '../store'
import Vuex from 'vuex'
import axios from 'axios'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _ from 'lodash'
import { createLocalVue } from '@vue/test-utils'
import { actions } from '@/store/adona'
describe('store/posts', () => {
  const localVue = createLocalVue()
  // eslint-disable-next-line import/no-named-as-default-member
  Vuex.Store.prototype.$axios = axios
  localVue.use(Vuex)
  const allposts = [{ id: '1', userId: 1, title: 'post 1', body: 'first post' }, { id: '2', userId: 1, title: 'post 2', body: 'second post' }]
  let NuxtStore
  let store
  let mockAxiosGetResult
  jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve(mockAxiosGetResult)),
    post: jest.fn(() => Promise.resolve(mockAxiosGetResult))
  }))

  let action
  const testedAction = (context = {}, payload = {}) => {
    return actions[action].bind({ $axios: axios })(context, payload)
  }

  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })
  describe('getters', () => {
    let posts
    beforeEach(() => {
      posts = store.getters['adona/allPosts']
    })
    test('is empty', () => {
      expect(posts.length).toBe(0)
    })
  })
  describe('actions', () => {
    let commit
    beforeEach(() => {
      commit = jest.fn()
    })
    test('should be empty', async () => {
      action = 'fetchPosts'
      mockAxiosGetResult = []
      await testedAction({ commit })
      expect(store.getters['adona/allPosts']).toEqual([])
    })
    test('should add new post', async () => {
      const mockPost = { id: '1', userId: 1, title: 'post 1', body: 'first post' }
      mockAxiosGetResult = [mockPost]
      await store.dispatch('adona/addPost', mockPost)
      expect(store.getters['adona/allPosts'].length).toBe(1)
    })
  })

  describe('mutations', () => {
    const post1 = { id: '1', userId: 1, title: 'post 1', body: 'first post' }
    test('should be equal to mock post', () => {
      store.commit('adona/setPosts', allposts)
      expect(store.getters['adona/allPosts']).toStrictEqual(allposts)
    })
    test('should add  new post', () => {
      store.commit('adona/addPost', post1)
      const newPosts = store.getters['adona/allPosts']
      expect(newPosts.length).toBe(1)
    })
  })
})
