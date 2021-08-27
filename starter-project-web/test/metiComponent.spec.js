import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Blogs from '@/components/MetiBlogs.vue'

const localVue = createLocalVue()
Vue.use(Vuex)
Vue.use(Vuetify)

describe('Meti Page', () => {
  let actions
  let store
  let state
  let getters

  beforeEach(() => {
    state = {
      posts: [{ id: 1, title: 'post', completed:false }]
    }

    actions = {
      fetchTodos: jest.fn(),
      deletePost: jest.fn()
    }

    getters = {
      allPosts: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        meti: {
          state,
          actions,
          getters,
          namespaced: true
        }
      }
    })
  })

  it('calls and renders to dos ', async () => {
    const wrapper = shallowMount(Blogs, { store, localVue})
    store.dispatch = jest.fn()
    await wrapper.vm.$nextTick()
    expect(actions.fetchTodos).toHaveBeenCalled()
  })

  
  
})


  