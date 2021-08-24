import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Blogs from '@/components/MetiBlogs.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('Meti Page', () => {
  let actions
  let store
  let state
  let vuetify
  let id

  beforeEach(() => {
    state = {
      blogger : [{ id: 1, title: 'post', completed:false }],
      posts: [{ id: 1, title: 'post', completed:false }]
    }

    actions = {
      fetchTodos: jest.fn(),
      deletePost: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        meti: {
          state,
          actions,
          namespaced: true
        }
      }
    })
    vuetify = new Vuetify()
  })

  it('calls and renders to dos ', async () => {
    const wrapper = shallowMount(Blogs, { store, localVue, vuetify })
    store.dispatch = jest.fn()
    await wrapper.vm.$nextTick()
    expect(actions.fetchTodos).toHaveBeenCalled()
  })

  
  
})


  