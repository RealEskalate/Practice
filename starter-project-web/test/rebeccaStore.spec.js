import _ from 'lodash'
import axios from 'axios'
import * as rebecca from '@/store/rebecca'

let mockAxiosGetResult
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve(mockAxiosGetResult)),
  post: jest.fn(() => Promise.resolve(mockAxiosGetResult))
}))

let action
const testedAction = (context = {}, payload = {}) => {
  return rebecca.actions[action].bind({ $axios: axios })(context, payload)
}

describe('store/rebecca', () => {
  let NuxtStore
  let store
  let posts
  const testPosts = [{ userId: 1, id: 1, title: 'new post', body: 'post' }]

  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })

  describe('get posts', () => {
    beforeEach(() => {
      posts = store.getters['rebecca/allPosts']
    })

    it('should return posts array', () => {
      expect(_.isArray(posts)).toBe(true)
    })
  })

  describe('changing posts with mutations', () => {
    it('should add a post to the state', () => {
      store.commit('rebecca/setPosts', testPosts)
      expect(store.getters['rebecca/allPosts']).toBe(testPosts)
    })
  })

  describe('rebecca/store actions', () => {
    let commit

    beforeEach(() => {
      commit = jest.fn()
      store.commit('rebecca/setPosts', testPosts)
    })

    it('should fetch posts', async () => {
      action = 'getPosts'
      mockAxiosGetResult = testPosts
      await testedAction({ commit })
      expect(store.getters['rebecca/allPosts']).toEqual(testPosts)
    })
  })
})
