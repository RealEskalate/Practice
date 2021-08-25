// import { mutations } from '../store'
import Vuex from 'vuex'
import _ from 'lodash'
import { createLocalVue } from '@vue/test-utils'
describe("store/movies", () => {
// ----------------------------------------------------
// focus on the code from here...
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store

  beforeAll(async () => {
    // note the store will mutate across tests
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })
  describe('actions', () => {
    let posts
    beforeEach(() => {
      posts = store.getters['adona/allPosts']
    })
    test('is array', () => {
      expect(_.isArray(posts)).toBe(true)
    })
  })
})
