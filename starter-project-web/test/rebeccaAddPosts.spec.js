import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import RebeccaAddPosts from '../components/RebeccaAddPosts'

describe('test component RebeccaAddPosts.vue', () => {
  // let actions

  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(Vuetify)
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('should call submitPost method when addpost button is clicked', () => {
    const submitPost = jest.fn()
    const wrapper = mount(RebeccaAddPosts, {
      methods: { submitPost },
      localVue,
      vuetify
    })
    // wrapper.vm.$on('submitPost', spy)
    wrapper.find('.submit-btn').trigger('click')

    // Ensure that our mock event was called
    expect(submitPost).toHaveBeenCalledTimes(1)
  })

  it('should dispatch addPost action when addpost button is clicked', async () => {
    const store = new Vuex.Store()
    store.dispatch = jest.fn()

    const wrapper = mount(RebeccaAddPosts, { store, localVue, vuetify })
    wrapper.find('.submit-btn').trigger('click')
    await wrapper.vm.$nextTick()
    expect(store.dispatch).toHaveBeenCalledWith('rebecca/addPost', { body: '', title: '' })
  })
})
