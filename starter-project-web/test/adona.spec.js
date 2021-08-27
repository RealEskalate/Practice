// import { mutations } from '../store'
import Vuex from 'vuex'
import axios from 'axios'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _ from 'lodash'
import { createLocalVue } from '@vue/test-utils'
import { actions } from '@/store/adona'
describe('store/posts', () => {
// ----------------------------------------------------
// focus on the code from here...
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const allposts = [{ id: '1', userId: 1, title: 'post 1', body: 'first post' }, { id: '2', userId: 1, title: 'post 2', body: 'second post' }]
  let NuxtStore
  let store
  let mockAxiosGetResult
  jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve(mockAxiosGetResult)),
    post: jest.fn(() => Promise.resolve(mockAxiosGetResult))
    // $patch: jest.fn(() => Promise.resolve(mockAxiosGetResult))
  }))

  let action
  const testedAction = (context = {}, payload = {}) => {
    return actions[action].bind({ $axios: axios })(context, payload)
  }

  beforeAll(async () => {
    // note the store will mutate across tests
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
