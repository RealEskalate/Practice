import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Rebecca from '../pages/Rebecca'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('Rebecca Page', () => {
  let actions
  let store
  let state
  let vuetify

  beforeEach(() => {
    state = {
      posts: [{ id: 1, title: 'post', body: 'post' }]
    }

    actions = {
      getPosts: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        rebecca: {
          state,
          actions,
          namespaced: true
        }
      }
    })
    vuetify = new Vuetify()
  })

  it('should renders posts', async () => {
    const wrapper = shallowMount(Rebecca, { store, localVue, vuetify })
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.post').length).toBe(1)
  })

  it('should call store action "getPosts" when page is rendered', async () => {
    const wrapper = shallowMount(Rebecca, { store, localVue, vuetify })
    store.dispatch = jest.fn()
    await wrapper.vm.$nextTick()
    expect(actions.getPosts).toHaveBeenCalled()
  })

  it('should call store action "deletePost" when delete icon is clicked', async () => {
    const wrapper = shallowMount(Rebecca, { store, localVue, vuetify })
    store.dispatch = jest.fn()
    wrapper.find('.delete').trigger('click')
    await wrapper.vm.$nextTick()
    expect(store.dispatch).toHaveBeenCalledWith('rebecca/deletePost', 1)
  })
})
