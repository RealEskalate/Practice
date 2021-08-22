import Vuex from 'vuex'
import { actions } from '@/store/lensa'
import * as index from '@/store/lensa'
import { createLocalVue } from '@vue/test-utils'
import _ from 'lodash'
import axios from 'axios'

const localVue = createLocalVue()
Vuex.Store.prototype.$axios = axios
localVue.use(Vuex)

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
// jest.useRealTimers()

describe('store/lensa.js', () => {
  let store
  let post1, post2
  beforeEach(() => {
    store = new Vuex.Store(_.cloneDeep(index))
    post1 = { id: '1', userId: 1, title: 'title_1', body: 'this is title one' }
    post2 = { id: '2', userId: 2, title: 'title_2', body: 'this is title two' }
  })
  describe('getters', () => {
    let posts
    beforeEach(() => {
      posts = [post1, post2]
      store.replaceState({
        posts
      })
    })
    describe('posts_all', () => {
      test('all posts', () => {
        expect(store.getters.allPosts).toEqual(
          expect.arrayContaining(posts)
        )
      })
    })
  })

  describe('actions', () => {
    let commit
    beforeEach(() => {
      commit = jest.fn()
    })

    describe(action = 'fetchPosts', () => {
      test('postss fetched', async () => {
        mockAxiosGetResult = []
        await testedAction({ commit })
        expect(store.getters.allPosts).toEqual([])
      })
    })
  })
})
